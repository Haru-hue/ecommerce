import { FormEvent } from 'react'
import { Link } from 'react-router-dom'

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

const Login = () => {
  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    const formElements = event.currentTarget.elements as FormElements
    const email = formElements[EMAIL].value
    const password = formElements[PASSWORD].value
    const rememberMe = formElements[REMEMBER_ME].checked

    const body = {
      email,
      password,
      rememberMe,
    }

    // TODO: Setup the correct URI
    fetch('/login', { body: JSON.stringify(body), method: 'POST' })
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
        </div>
        <div className={styles.inputContainer}>
          <label className={styles.label} htmlFor={PASSWORD}>
            Password
          </label>
          <input className={styles.input} type="password" name={PASSWORD} />
        </div>
        <div className={styles.rememberMeContainer}>
          <input className={styles.radioInput} type="checkbox" name={REMEMBER_ME} />
          <span className={styles.rememberMeText}>Remember me</span>
        </div>
        <div>
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
