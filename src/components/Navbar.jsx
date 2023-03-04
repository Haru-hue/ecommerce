import { useLocation } from "react-router"
import Logo from '../images/Logo.png'

export default function Navbar () {
    const location = useLocation()
    const isHidden = location.pathname.startsWith('/user') ? 'hidden' : ''
    return (
        <header className={`container-fluid ${isHidden}`}>
            <nav className="navbar navbar-expand-lg p-3">
                <div className="navbar-brand">
                        <a href="/"><img src={Logo} alt="FarmHub" className="img-fluid" /></a>
                </div>
                <form action="" className="d-flex" role="search">
                        <input className="form-control" type="search" name="" id="" placeholder="Search for products here"/>
                        <i class="fa-solid fa-magnifying-glass"></i>
                </form>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav navbar-icons">
                        <li className="nav-item"><i class="fa-regular fa-user"></i></li>
                        <li className="nav-item"><i class="fa-regular fa-heart"></i></li>
                        <li className="nav-item"><i class="fa-solid fa-circle-question"></i></li>
                    </ul>
                </div>
            </nav>
            <nav className="navbar px-5">
                <div className="shop-navbar">
                    <button className="shop-toggler" type="button" data-bs-toggle="collapse" data-bs-target="" aria-controls="" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span> Shop by Category
                    </button>
                    <h6>
                        <span><i class="fa-solid fa-bolt"></i></span>
                        Today's Deals
                    </h6>
                    <h6>
                        <span><i class="fa-solid fa-tag"></i></span>
                        Special Discounts
                    </h6>
                </div>
                <ul className="navbar-nav">
                    <h6>
                        <span><i class="fa-solid fa-arrows-rotate"></i></span>
                        Recently Viewed
                    </h6>
                </ul>
            </nav>
        </header>
    )
}