export default function Modal () {
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
                        <input type="email" name="u-mail" id="" className="form-control"/>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="u-pwd">Password:</label>
                        <input type="password" name="u-pwd" id="" className="form-control"/>
                    </div>
                        <input type="checkbox" name="" id="" /> Remember me
                    
                    <button type="submit btn-modal">Log In</button>
                </form>
                <div className="text-center">New to FarmHub? <button>Register here</button></div>
            </section>
        </main>
    )
}