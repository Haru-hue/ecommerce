import { FormEvent, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

import { useAuthValues } from 'providers/AuthProvider'

import Button from 'components/button'

import { Logo2 } from 'assets/images'

import styles from './Login.module.scss'

const EMAIL = 'email'
const PASSWORD = 'password'
const REMEMBER_ME = 'rememberMe'

interface FormElements extends HTMLFormControlsCollection {
  [EMAIL]: HTMLInputElement
  [PASSWORD]: HTMLInputElement
  [REMEMBER_ME]: HTMLInputElement
}

interface FormErrors {
  [EMAIL]?: string | null
  [PASSWORD]?: string | null
}

const Login = () => {
  const { login } = useAuthValues()
  const [errors, setErrors] = useState<FormErrors>({})
  const [requestError, setRequestError] = useState<string | null>(null)
  const navigate = useNavigate()

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    setRequestError(null)
    event.preventDefault()

    const formElements = event.currentTarget.elements as FormElements
    const email = formElements[EMAIL].value
    const password = formElements[PASSWORD].value
    const rememberMe = formElements[REMEMBER_ME].checked

    const formErrors = {
      [EMAIL]: !email ? 'Email is required' : null,
      [PASSWORD]: !password ? 'Password is required' : null,
    }

    setErrors(formErrors)

    if (Object.values(formErrors).filter(Boolean).length > 0) {
      return
    }

    login({
      email,
      password,
      rememberMe,
    })
      .then(() => navigate('/'))
      .catch((error: any) => setRequestError(error.message))
  }

  return (
    <section className={styles.container}>
      <div>
        <img alt="logo" className={styles.logo} src={Logo2} />
        <h2 className={styles.subtitle}>Log into your account</h2>
      </div>
      <form onSubmit={onSubmit}>
        <div className={styles.inputContainer}>
          <label className={styles.label} htmlFor={EMAIL}>
            E-mail address
          </label>
          <input className={styles.input} type="email" name={EMAIL} />
          {errors[EMAIL] ? <div className={styles.errorMsg}>{errors[EMAIL]}</div> : null}
        </div>
        <div className={styles.inputContainer}>
          <label className={styles.label} htmlFor={PASSWORD}>
            Password
          </label>
          <input className={styles.input} type="password" name={PASSWORD} />
          {errors[PASSWORD] ? <div className={styles.errorMsg}>{errors[PASSWORD]}</div> : null}
        </div>
        <div className={styles.rememberMeContainer}>
          <input className={styles.radioInput} type="checkbox" name={REMEMBER_ME} />
          <span className={styles.rememberMeText}>Remember me</span>
        </div>
        <div>
          {requestError ? <div className={styles.errorMsg}>{requestError}</div> : null}
          <Button className={styles.btn} size="lg">
            Log In
          </Button>
        </div>
      </form>
      <div className={styles.registerContainer}>
        New to FarmHub?&nbsp;
        <Link className={styles.registerLink} to="/register">
          Register here
        </Link>
      </div>
    </section>
  )
}

export default Login
