import { useLocation } from 'react-router'
import { Logo } from 'assets/images'
import Button from './button/index'
import { BoltIcon, CircleQuestionIcon, HeartIcon, MagnifyingGlassIcon, TagIcon, UserIcon } from './icons'
import axios from 'axios'
import { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faRotate } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'

interface Product {
  _id: string;
  name: string;
  price: number;
  image: {
    url: string;
  };
}

interface Category {
  _id: string;
  name: string;
}

interface SearchBarProps {
  products: Product[];
  onProductSelect: (product: Product) => void;
}

export default function Navbar({ products }: SearchBarProps) {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState<Product[]>([]);
  const [categories, setCategories] = useState<Category[]>([]);

  const handleSearch = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const term = event.target.value;
    setSearchTerm(term);
  
    // Perform local search
    const localResults = products.filter((product) =>
      product.name.toLowerCase().includes(term.toLowerCase())
    );
  
    // Perform API search
    let apiResults: Product[] = [];
    if (term) {
      try {
        const response = await axios.get<Product[]>(`http://localhost:5000/shop?q=${term}`);
        apiResults = response.data;
        console.log(apiResults);
      } catch (err) {
        console.log(err);
      }
    }
    // Combine local and API results
    const results = [...localResults, ...apiResults];
    setSearchResults(results);
  };

  async function getResults() {
    try {
      const response = await axios.get<Product[]>('http://localhost:5000/shop');
      setSearchResults(response.data);
      console.log(response.data);
    } catch (err) {
      console.log(err);
    }
  }

  async function getCategories() {
    try {
      const response = await axios.get<Category[]>('http://localhost:5000/categories');
      setCategories(response.data);
    } catch (err) {
      console.log(err);
    }
  }

  useEffect(() => {
    getResults();
    getCategories();
  }, [])

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
                <select defaultValue="" name="categories" className="cat-field w-100">
                  <option value="">All Categories</option>
                  <option value="1">Fruits & Vegetables</option>
                  <option value="2">Frozen Seafoods</option>
                  <option value="3">Dairy Products</option>
                  <option value="4">Wheat and Grains</option>
                  <option value="5">Bread and Pastries</option>
                  <option value="6">Raw Meats</option>
                </select>
              </span>
              <div className="input-group search-container">
                <input className="form-control" type="search" name="search" 
                placeholder="Search for products here" value={searchTerm} onChange={handleSearch} />
                <div className="input-group-text">
                  <MagnifyingGlassIcon />
                </div>
                { searchTerm && (
                    <div className="search-results">
                      {searchResults
                      .filter((item) => item.name.toLowerCase().includes(searchTerm.toLowerCase()))
                      .map((item) => {
                        return (
                          <div key={item._id} className="search-result d-flex py-2 my-1">
                            <img src={item?.image?.url} alt={item.name} className="img-fluid w-25" />
                            <div className="search-result-info ps-1 py-3 small d-flex flex-column">
                              <p>{item.name}</p>
                              <p>${item.price}</p>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  )}
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
          <div className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              <Button
                className="shop-toggler d-flex align-items-center text-uppercase"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target=""
                aria-controls=""
                aria-expanded="false"
                aria-label="Toggle navigation"
                size="sm">
                <span className="text-white ps-2 fs-4"><FontAwesomeIcon icon={faBars} /></span>
                <p className="px-3 m-0 small fw-bold">Shop by Category</p>
              </Button>
            </a>
            <ul className="dropdown-menu w-100">
              {categories.map((item) => {
                return (
                  <Link to={`/category/${item._id}`}>
                    <li key={item._id} className="dropdown-item">
                      {item.name}
                    </li>
                  </Link>
                );
              })}
              <li><a className="dropdown-item" href="#">Action</a></li>
              <li><a className="dropdown-item" href="#">Another action</a></li>
              <li><a className="dropdown-item" href="#">Something else here</a></li>
            </ul>       
          </div>
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
              <FontAwesomeIcon icon={faRotate} />
            </span>
            Recently Viewed
          </h6>
        </ul>
      </nav>
    </header>
  )
}
