import { Dispatch, PropsWithChildren, SetStateAction, createContext, useContext, useState } from 'react'

interface RegistrationContextValue {
  confirmPassword?: string
  email?: string
  password?: string
}

const RegistrationDataContext = createContext<void | RegistrationContextValue>({})
const RegistrationDataDispatchContext = createContext<Dispatch<SetStateAction<RegistrationContextValue>> | undefined>(
  undefined,
)

export const RegistrationDataProvider = ({ children }: PropsWithChildren) => {
  const [data, setData] = useState<RegistrationContextValue>({})

  return (
    <RegistrationDataDispatchContext.Provider value={setData}>
      <RegistrationDataContext.Provider value={data}>{children}</RegistrationDataContext.Provider>
    </RegistrationDataDispatchContext.Provider>
  )
}

export const useRegistrationData = () => {
  const context = useContext(RegistrationDataContext)

  if (context === undefined) {
    throw new Error('useRegistrationData must be used within RegistrationDataContext')
  }

  return context
}

export const useDispatchRegistrationData = () => {
  const context = useContext(RegistrationDataDispatchContext)

  if (context === undefined) {
    throw new Error('useDispatchRegistrationData must be used within RegistrationDataContext')
  }

  return context
}

export const useRegistration = () => {
  const data = useRegistrationData()
  const dispatch = useDispatchRegistrationData()

  return [data, dispatch] as const
}

export default RegistrationDataProvider
