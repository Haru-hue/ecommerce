import { useLocation } from 'react-router'

import { Logo } from 'assets/images'

import Button from './button/index'
import { ArrowDownIcon, BoltIcon, CircleQuestionIcon, HeartIcon, MagnifyingGlassIcon, TagIcon, UserIcon } from './icons'

export default function Navbar() {
  const location = useLocation()
  const isHidden = location.pathname.startsWith('/user') ? 'hidden' : ''

  return (
    <header className={isHidden}>
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
                <select defaultValue="" name="categories" className="cat-field">
                  <option value="">All Categories</option>
                  <option value="1">Fruits & Vegetables</option>
                  <option value="2">Frozen Seafoods</option>
                  <option value="3">Dairy Products</option>
                  <option value="4">Wheat and Grains</option>
                  <option value="5">Bread and Pastries</option>
                  <option value="6">Raw Meats</option>
                </select>
              </span>
              <div className="input-group">
                <input className="form-control" type="search" name="search" placeholder="Search for products here" />
                <div className="input-group-text">
                  <MagnifyingGlassIcon />
                </div>
              </div>
            </div>
          </form>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto navbar-icons d-flex justify-content-around">
              <li className="nav-item">
                <UserIcon />
              </li>
              <li className="nav-item">
                <HeartIcon />
              </li>
              <li className="nav-item">
                <CircleQuestionIcon />
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
            size="sm">
            <span className="navbar-toggler-icon"></span> Shop by Category
          </Button>
          <h6 className="fw-bold">
            <span>
              <BoltIcon />
            </span>
            Today&apos;s Deals
          </h6>
          <h6 className="fw-bold">
            <span>
              <TagIcon />
            </span>
            Special Discounts
          </h6>
        </div>
        <ul className="navbar-nav">
          <h6 className="d-flex align-items-center fw-bold">
            <span>
              <ArrowDownIcon />
            </span>
            Recently Viewed
          </h6>
        </ul>
      </nav>
    </header>
  )
}
