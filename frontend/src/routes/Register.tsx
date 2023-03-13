import { FormEvent } from 'react'
import { Link } from 'react-router-dom'

import Button from 'components/button'

import { Logo2 } from 'assets/images'

import styles from './Register.module.scss'

const CONFIRM_PASSWORD = 'confirmPassword'
const EMAIL = 'email'
const FIRST_NAME = 'firstName'
const LAST_NAME = 'lastName'
const PASSWORD = 'password'
const SEND_OFFER = 'sendOffer'

interface FormElements extends HTMLFormControlsCollection {
  [CONFIRM_PASSWORD]: HTMLInputElement
  [EMAIL]: HTMLInputElement
  [FIRST_NAME]: HTMLInputElement
  [LAST_NAME]: HTMLInputElement
  [PASSWORD]: HTMLInputElement
  [SEND_OFFER]: HTMLInputElement
}

const Register = () => {
  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    const formElements = event.currentTarget.elements as FormElements
    const email = formElements[EMAIL].value
    const firstName = formElements[FIRST_NAME].value
    const lastName = formElements[LAST_NAME].value
    const confirmPassword = formElements[CONFIRM_PASSWORD].value
    const password = formElements[PASSWORD].value
    const sendOffer = formElements[SEND_OFFER].checked

    const body = {
      email,
      firstName,
      lastName,
      password,
      sendOffer,
    }

    // TODO: Setup the correct URI
    fetch('/register', { body: JSON.stringify(body), method: 'POST' })
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
          <input className={styles.input} type="email" name={EMAIL} />
        </div>
        <div className={styles.inputContainer}>
          <label className={styles.label} htmlFor={FIRST_NAME}>
            First Name
          </label>
          <input className={styles.input} name={FIRST_NAME} />
        </div>
        <div className={styles.inputContainer}>
          <label className={styles.label} htmlFor={LAST_NAME}>
            Last Name
          </label>
          <input className={styles.input} name={LAST_NAME} />
        </div>
        <div className={styles.inputContainer}>
          <label className={styles.label} htmlFor={PASSWORD}>
            Password
          </label>
          <input className={styles.input} type="password" name={PASSWORD} />
        </div>
        <div className={styles.inputContainer}>
          <label className={styles.label} htmlFor={CONFIRM_PASSWORD}>
            Confirm Password
          </label>
          <input className={styles.input} type="password" name={CONFIRM_PASSWORD} />
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
