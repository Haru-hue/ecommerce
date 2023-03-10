import { useLocation } from "react-router";
import Button from "../components/button/index";
import Logo from "../images/Logo.png";

export default function Navbar() {
  const location = useLocation();
  const isHidden = location.pathname.startsWith("/user") ? "hidden" : "";

  return (
    <header className={`${isHidden}`}>
      <div className="main">
        <nav className="navbar navbar-expand-lg p-5 py-2">
          <div className="navbar-brand px-5">
            <a href="/">
              <img src={Logo} alt="FarmHub" className="img-fluid" />
            </a>
          </div>
          <form action="" className="d-flex ps-5" role="search">
            <div className="search-field d-flex align-items-center">
              <span className="d-flex align-items-center">
                <select name="" id="" className="cat-field">
                  <option selected>All Categories</option>
                  <option>Fruits & Vegetables</option>
                  <option>Frozen Seafoods</option>
                  <option>Dairy Products</option>
                  <option>Wheat and Grains</option>
                  <option>Bread and Pastries</option>
                  <option>Raw Meats</option>
                </select>
              </span>
              <div className="input-group">
                <input
                  className="form-control"
                  type="search"
                  name=""
                  id=""
                  placeholder="Search for products here"
                />
                <div className="input-group-text">
                  <i class="fa-solid fa-magnifying-glass"></i>
                </div>
              </div>
            </div>
          </form>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto navbar-icons d-flex justify-content-around">
              <li className="nav-item">
                <i class="fa-regular fa-user"></i>
              </li>
              <li className="nav-item">
                <i class="fa-regular fa-heart"></i>
              </li>
              <li className="nav-item">
                <i class="fa-solid fa-circle-question"></i>
              </li>
            </ul>
          </div>
        </nav>
      </div>
      <nav className="navbar px-5 py-3">
        <div className="shop-navbar d-flex align-items-center justify-content-around">
          <Button
            className="shop-toggler fs-5 text-uppercase"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target=""
            aria-controls=""
            aria-expanded="false"
            aria-label="Toggle navigation"
            size="sm"
          >
            <span class="navbar-toggler-icon"></span> Shop by Category
          </Button>
          <h6 className="fw-bold">
            <span>
              <i class="fa-solid fa-bolt"></i>
            </span>
            Today's Deals
          </h6>
          <h6 className="fw-bold">
            <span>
              <i class="fa-solid fa-tag"></i>
            </span>
            Special Discounts
          </h6>
        </div>
        <ul className="navbar-nav">
          <h6 className="d-flex align-items-center fw-bold">
            <span>
              <i class="fa-solid fa-arrows-rotate"></i>
            </span>
            Recently Viewed
          </h6>
        </ul>
      </nav>
    </header>
  );
}