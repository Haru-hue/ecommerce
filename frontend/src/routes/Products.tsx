import axios from "axios";
import Banner from "components/Banner";
import Pagination from "components/Paginate";
import { useEffect, useState } from "react";
import { Icon } from '@iconify/react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faList } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

interface Product {
  _id: string;
  name: string;
  price: number;
  image: {
    url: string;
  };
  meta: {
    weight: number;
  };
}

interface Category {
  _id: string;
  name: string;
  count: number;
}

const ShopPage = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [categories, setCategories] = useState<Category[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [productsPerPage] = useState(20)
  const [grid, setGrid] = useState(true)

  async function getProducts() {
    try {
      const response = await axios.get<{ allProducts: Product[]}>('http://localhost:5000/shop');
      setProducts(response.data.allProducts);
      console.log(products)
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

  const handleClick = () => {
    setGrid(!grid)
  }

  useEffect(() => {
    getProducts();
    getCategories();
  }, []);

  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = products.slice(indexOfFirstProduct, indexOfLastProduct);

  // Change page
  function paginate(pageNumber: number) {
    setCurrentPage(pageNumber);
  }

  return (
    <div className="container-fluid">
      <Banner></Banner>
      <div className="d-flex justify-content-between align-items-center mx-5 px-5 pt-5">
        <h3 className="fw-bold">Shop</h3>
        <div className="sorting d-flex justify-content-between">
          <div className="d-flex align-items-center justify-content-between">
            <p className="fw-bold m-0">Sort by:</p>
            <select name="" id="" className="text-muted">
              <option value="">Default sorting</option>
              <option value="priceL">Sort by price: low to high</option>
              <option value="priceH">Sort by price: high to low</option>
            </select>
          </div>
          <div className="d-flex align-items-center justify-content-between">
            <p className="fw-bold m-0">View</p>
            <Icon icon="material-symbols:grid-on-sharp"  className={`fs-3 ${grid ? 'active' : ''}`} onClick={handleClick}/>
            <FontAwesomeIcon icon={faList} className={`fs-3 ${!grid ? 'active' : ''}`} onClick={handleClick}/>
          </div>
        </div>
      </div>
      <div className="px-5">
        <div className="row p-5">
          <div className="col-lg-3 pe-5">
            <div className="d-flex flex-column">
              <div className="category-group pb-5">
              <h4 className="fw-bolder pb-3">All Categories</h4>
              {categories.map((item) => (
                <Link to={`/category/${item._id}`}>
                  <button className="btn-category d-flex mb-2 small b-none py-2 px-3" key={item._id}>
                    <div className="fw-bold">{item.name}</div> <div className="ps-4 text-muted">{item.count}</div>
                  </button>
                </Link>
              ))}
              </div>
                <div className="price-group">
                  <h4 className="fw-bolder">Price Ranges</h4>
                  <button className="btn-category d-flex mb-2 small b-none py-2 px-3 fw-bold">₦500 - ₦1000</button>
                  <button className="btn-category d-flex mb-2 small b-none py-2 px-3 fw-bold">₦500 - ₦1000</button>
                  <button className="btn-category d-flex mb-2 small b-none py-2 px-3 fw-bold">₦500 - ₦1000</button>
                  <button className="btn-category d-flex mb-2 small b-none py-2 px-3 fw-bold">₦500 - ₦1000</button>
                  <button className="btn-category d-flex mb-2 small b-none py-2 px-3 fw-bold">₦500 - ₦1000</button>
                </div>
            </div>
          </div>
          <div className="col-lg-9">
            <div className={`${grid ? 'shop-grid' : 'd-flex flex-column'}`}>
              {currentProducts.map((product) => (
                  <div key={product._id} className="card">
                    <Link to={`/products/${product._id}`}>

                      <div className="card-img-top"><img src={product?.image?.url} alt={product.name} className="img-fluid" /></div>
                    </Link>
                    <div className="card-body">
                    <Link to={`/products/${product._id}`}>
                        <h6 className="card-title fw-bold">{product.name}</h6>
                      </Link>
                      <p className="card-text small">{product.meta.weight}</p>
                      <p className="card-text fw-bold text-green">₦ {product.price.toLocaleString()}</p>
                    </div>
                  </div>
              ))}
            </div>
            <div className="container pt-5">
              <Pagination productsPerPage={productsPerPage} totalProducts={products.length} currentPage={currentPage}  paginate={paginate} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}



export default ShopPage;