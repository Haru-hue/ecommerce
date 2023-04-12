import { getApiUrl } from 'utils'

import { PropsWithChildren, createContext, useCallback, useContext, useMemo, useState } from 'react'

import { LoginPayload } from 'models/LoginPayload'
import { SignupPayload } from 'models/SignupPayload'
import { User } from 'models/User'

interface AuthContextValue {
  login: (payload: LoginPayload) => Promise<void>
  logout: () => void
  signup: (payload: SignupPayload) => Promise<void>
  user: User | null
}

const handleResponse = async (response: Response) => {
  const text = await response.text()

  if (!response.ok) {
    return Promise.reject({
      statusCode: response.status,
      message: JSON.parse(text),
    })
  }

  return JSON.parse(text)
}

const AUTH_KEY = 'farm_hub_auth_key'
const API_URL = getApiUrl()

const AuthContext = createContext<AuthContextValue | void>(undefined)

export const AuthProvider = ({ children }: PropsWithChildren) => {
  const [user, setUser] = useState<User | null>(() => {
    const storedData = localStorage.getItem(AUTH_KEY)

    if (!storedData) return null

    try {
      const parsedData = JSON.parse(storedData)
      return parsedData
    } catch {
      return null
    }
  })

  const logout = useCallback(() => setUser(null), [])

  const login = useCallback(({ rememberMe, ...payload }: LoginPayload) => {
    return fetch(`${API_URL}/login`, {
      body: JSON.stringify(payload),
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then(handleResponse)
      .then(data => {
        setUser(data)
        if (rememberMe) {
          localStorage.setItem(AUTH_KEY, JSON.stringify(data))
        }
      })
  }, [])

  const signup = useCallback(async (payload: SignupPayload) => {
    return fetch(`${API_URL}/register`, {
      body: JSON.stringify(payload),
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
    }).then(handleResponse)
  }, [])

  const value = useMemo(
    () => ({
      login,
      logout,
      signup,
      user,
    }),
    [logout, login, signup, user],
  )

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

export const useAuthValues = () => {
  const context = useContext(AuthContext)

  if (context === undefined) {
    throw new Error('useAuthValues must be used within AuthProvider')
  }

  return context
}

export default AuthProvider
