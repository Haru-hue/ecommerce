import { useLocation } from "react-router"

export default function Footer () {
    const location = useLocation()
    const isHidden = location.pathname.startsWith('/user') ? 'hidden' : ''
    return (
        <footer className="container">
            <div className={`footer ${isHidden}`}>
                <ul className="services-section">
                    <li className="service">
                        <h4>
                            <span>Icon</span>
                            Shop with Confidence</h4>
                        <p>We got you covered</p>
                    </li>
                    <li className="service">
                        <h4>
                            <span>Icon</span>
                        Great Offers</h4>
                        <p>Discounted items up to 70%</p>
                    </li>
                    <li className="service">
                        <h4>
                            <span>Icon</span>
                            Become a Seller</h4>
                        <p>Make money with our help</p>
                    </li>
                    <li className="service">
                        <h4>
                            <span>Icon</span>
                            24/7 Customer Support</h4>
                        <p>Round-the-clock assistance</p>
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
                                        <span>Icon</span>
                                        Hotline:
                                    </p>
                                    <h3>+234 (705) 923 0778</h3>
                                </li>
                                <li>
                                    <p>
                                        <span>Icon</span>
                                        Babcock University
                                    </p>
                                </li>
                                <li>
                                    <p>
                                        <span>Icon</span>
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
                            <div className="play-icon">Google Playstore</div>
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