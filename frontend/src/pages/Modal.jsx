import { useState } from 'react'

import Logo from '../assets/Logo2.png'

export function Modal() {
  // const [email, setEmail] = useState('')

  return (
    <main>
      <section className="container">
        <div className="d-flex">
          <div className="image">Here</div>
          <h6>Log into your account</h6>
        </div>
        <form action="">
          <div className="mb-3">
            <label htmlFor="u-mail">E-mail address:</label>
            <input type="email" name="u-mail" id="" className="form-control" />
          </div>
          <div className="mb-3">
            <label htmlFor="u-pwd">Password:</label>
            <input type="password" name="u-pwd" id="" className="form-control" />
          </div>
          <input type="checkbox" name="" id="" /> Remember me
          <button type="submit btn-modal">Log In</button>
        </form>
        <div className="text-center">
          New to FarmHub? <button>Register here</button>
        </div>
      </section>
    </main>
  )
}

export function Register() {
  const [email, setEmail] = useState('')

  return (
    <main className="container p-5">
      <section className="container">
        <div className="d-flex flex-column align-items-center">
          <div className="image d-flex">
            <img src={Logo} alt="FarmHub" className="img-fluid w-50 m-auto" />
          </div>
          <h5 className="fw-bold pt-1">Create your account</h5>
        </div>
        <form action="" className="m-auto">
          <div className="mb-3">
            <label htmlFor="u-mail">E-mail address:</label>
            <input type="email" name="u-mail" id="" className="form-control w-50" />
          </div>
          <div className="mb-3">
            <label htmlFor="u-pwd">Password:</label>
            <input type="password" name="u-pwd" id="" className="form-control" />
          </div>
          <input type="checkbox" name="" id="" /> Remember me
          <button type="submit btn-modal">Log In</button>
        </form>
        <div className="text-center">
          New to FarmHub? <button>Register here</button>
        </div>
      </section>
    </main>
  )
}
