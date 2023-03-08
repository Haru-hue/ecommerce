import { useLocation } from "react-router"
import playBadge from "../images/Google_Play_Store_badge.png"

export default function Footer () {
    const location = useLocation()
    const isHidden = location.pathname.startsWith('/user') ? 'hidden' : ''
    return (
        <footer className="container-fluid p-5">
            <div className={`footer ${isHidden}`}>
                <ul className="services-section d-flex justify-content-around">
                    <li className="service">
                    <i class="fa-solid fa-shield"></i>
                        <span>
                            <h4>Shop with Confidence</h4>
                            <p>We got you covered</p>
                        </span>
                    </li>
                    <li className="service">
                    <i class="fa-solid fa-tags"></i>
                        <span>
                            <h4>Great Offers</h4>
                            <p>Discounted items up to 70%</p>
                        </span>
                    </li>
                    <li className="service">
                    <i class="fa-solid fa-money-bill-1-wave"></i>
                        <span>
                            <h4>Become a Seller</h4>
                            <p>Make money with our help</p>
                        </span>
                    </li>
                    <li className="service">
                        <i class="fa-solid fa-user-group"></i>
                        <span>
                            <h4>24/7 Customer Support</h4>
                            <p>Round-the-clock assistance</p>
                        </span>
                    </li>
                </ul>
                <div className="footer-bottom">
                    <div className="row">
                        <div className="col-lg-4">
                            <h5>FarmHub - Connecting Farmers to Buyers</h5>
                            <p className="pt-3">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            </p>
                            <ul>
                                <li>
                                    <p>
                                        <span><i class="fa-solid fa-phone"></i></span>
                                        Hotline:
                                    </p>
                                    <h3>+234 (705) 923 0778</h3>
                                </li>
                                <li>
                                    <p>
                                        <span><i class="fa-solid fa-phone"></i></span>
                                        Babcock University
                                    </p>
                                </li>
                                <li>
                                    <p>
                                        <span><i class="fa-solid fa-envelope"></i></span>
                                        ukojoshy@gmail.com
                                    </p>
                                </li>
                            </ul>
                        </div>
                        <div className="col-lg-2">
                            <h5>About Us</h5>
                            <ul>
                                <li>About FarmHub</li>
                                <li>Terms & Conditions</li>
                                <li>Privacy Policy</li>
                            </ul>
                        </div>
                        <div className="col-lg-2">
                            <h5>Support Center</h5>
                            <ul>
                                <li>Safety Tips</li>
                                <li>About Us</li>
                                <li>FAQ</li>
                            </ul>
                        </div>
                        <div className="col-lg-2">
                            <h5>FarmHub Retail</h5>
                            <ul>
                                <li>Sell with FarmHub</li>
                                <li>Become a Sales Consultant</li>
                            </ul>
                        </div>
                        <div className="col-lg-2">
                            <h5>Resources</h5>
                            <div className="play-icon">
                                <img src={playBadge} alt="" className="img-fluid"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="copyright">
                &copy; 2023 <b>FarmHub.</b> by Uko Joshua. All Rights Reserved
            </div>
        </footer>
    )
}