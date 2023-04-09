import { FormEvent, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

import {
  CONFIRM_PASSWORD,
  EMAIL,
  FIRST_NAME,
  LAST_NAME,
  PASSWORD,
  RegisterFormElements,
  RegisterFormErrors,
  SEND_OFFER,
} from 'models/RegisterForm'

import { useAuthValues } from 'providers/AuthProvider'
import { useRegistrationData } from 'providers/RegistrationDataProvider'

import Button from 'components/button'

import { Logo2 } from 'assets/images'

import styles from './Register.module.scss'

const Register = () => {
  const navigate = useNavigate()
  const { confirmPassword, email, password } = useRegistrationData()
  const { signup } = useAuthValues()
  const [errors, setErrors] = useState<RegisterFormErrors>({})
  const [requestError, setRequestError] = useState<string | null>(null)

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    setRequestError(null)
    event.preventDefault()

    const formElements = event.currentTarget.elements as RegisterFormElements
    const email = formElements[EMAIL].value
    const firstName = formElements[FIRST_NAME].value
    const lastName = formElements[LAST_NAME].value
    const password = formElements[PASSWORD].value
    const confirmPassword = formElements[CONFIRM_PASSWORD].value
    const sendOffer = formElements[SEND_OFFER].checked

    const formErrors = {
      [EMAIL]: !email ? 'Email is required' : null,
      [FIRST_NAME]: !firstName ? 'First name is required' : null,
      [LAST_NAME]: !lastName ? 'Last name is required' : null,
      [PASSWORD]: !password ? 'Password is required' : null,
      [CONFIRM_PASSWORD]: !confirmPassword ? 'Password confirmation is required' : null,
    }

    if (password !== confirmPassword) {
      formErrors[CONFIRM_PASSWORD] ??= "Passwords aren't a match"
    }

    setErrors(formErrors)

    if (Object.values(formErrors).filter(Boolean).length > 0) {
      return
    }

    signup({
      email,
      firstName,
      lastName,
      password,
      sendOffer,
    })
      .then(() => navigate('/login'))
      .catch((error: Error) => setRequestError(error.message))
  }

  return (
    <section className={styles.container}>
      <div>
        <img alt="logo" className={styles.logo} src={Logo2} />
        <h2 className={styles.subtitle}>Create your account</h2>
      </div>
      <form onSubmit={onSubmit}>
        <div className={styles.inputContainer}>
          <label className={styles.label} htmlFor={EMAIL}>
            E-mail address
          </label>
          <input className={styles.input} type="email" name={EMAIL} defaultValue={email} />
          {errors[EMAIL] ? <div className={styles.errorMsg}>{errors[EMAIL]}</div> : null}
        </div>
        <div className={styles.inputContainer}>
          <label className={styles.label} htmlFor={FIRST_NAME}>
            First Name
          </label>
          <input className={styles.input} name={FIRST_NAME} />
          {errors[FIRST_NAME] ? <div className={styles.errorMsg}>{errors[FIRST_NAME]}</div> : null}
        </div>
        <div className={styles.inputContainer}>
          <label className={styles.label} htmlFor={LAST_NAME}>
            Last Name
          </label>
          <input className={styles.input} name={LAST_NAME} />
          {errors[LAST_NAME] ? <div className={styles.errorMsg}>{errors[LAST_NAME]}</div> : null}
        </div>
        <div className={styles.inputContainer}>
          <label className={styles.label} htmlFor={PASSWORD}>
            Password
          </label>
          <input className={styles.input} type="password" name={PASSWORD} defaultValue={password} />
          {errors[PASSWORD] ? <div className={styles.errorMsg}>{errors[PASSWORD]}</div> : null}
        </div>
        <div className={styles.inputContainer}>
          <label className={styles.label} htmlFor={CONFIRM_PASSWORD}>
            Confirm Password
          </label>
          <input className={styles.input} type="password" name={CONFIRM_PASSWORD} defaultValue={confirmPassword} />
          {errors[CONFIRM_PASSWORD] ? <div className={styles.errorMsg}>{errors[CONFIRM_PASSWORD]}</div> : null}
        </div>
        <div className={styles.textContainer}>
          <input className={styles.radioInput} type="checkbox" name={SEND_OFFER} />
          <span className={styles.offerText}>Send me emails about new arrivals, hot items, daily savings, & more.</span>
        </div>
        <div className={styles.textContainer}>
          <p>
            By clicking Create Account, you acknowledge you have read and agreed to our&nbsp;
            <a className={styles.textLink} href="#">
              Terms of Use
            </a>
            &nbsp; and&nbsp;
            <a className={styles.textLink} href="#">
              Privacy Policy.
            </a>
          </p>
        </div>
        <div>
          {requestError ? <div className={styles.errorMsg}>{requestError}</div> : null}
          <Button className={styles.btn} size="lg">
            Register Now
          </Button>
        </div>
      </form>
      <div className={styles.registerContainer}>
        Already have an account?&nbsp;
        <Link className={styles.registerLink} to="/login">
          Sign in
        </Link>
      </div>
    </section>
  )
}

export default Register
