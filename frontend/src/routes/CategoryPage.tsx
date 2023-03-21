import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router";
import Pagination from "components/Paginate";
import { Link } from "react-router-dom";
import Banner from "components/Banner";

interface Products {
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
  

export default function CategoryPage () {
    const { id } = useParams<{ id?: string }>();
    const [categories, setCategories] = useState<Category[]>([]);
    const [categoryProducts, setCategoryProducts] = useState<Products[]>([]);
    const [totalProducts, setTotalProducts] = useState(0)
  
    async function getCategory(categoryId: string) {
      try {
        const response = await axios.get<Products[]>(
          `http://localhost:5000/category/${categoryId}`
        );
        setCategoryProducts(response.data)
      } catch (error) {
        console.error(error);
      }
    }

    async function getCategories() {
      try {
        const response = await axios.get<Category[]>(
          `http://localhost:5000/categories`
        );
        setCategories(response.data)
      } catch (error) {
        console.error(error);
      }
    }

    async function getTotalProducts() {
      try {
        const response = await axios.get<{ totalProducts: number}>('http://localhost:5000/shop');
        setTotalProducts(response.data.totalProducts);
        console.log(response)
      } catch (err) {
        console.log(err);
      }
    }
  
    useEffect(() => {
      id && getCategory(id);
      getCategories()
      getTotalProducts()
    }, [id]);

    return (
    <>
      <Banner/>
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
            {/* <Icon icon="material-symbols:grid-on-sharp"  className={`fs-3 ${grid ? 'active' : ''}`} onClick={handleClick}/>
            <FontAwesomeIcon icon={faList} className={`fs-3 ${!grid ? 'active' : ''}`} onClick={handleClick}/> */}
          </div>
        </div>
      </div>
      <section className="p-5">
        <div className="row p-5">
          <div className="col-lg-3 pe-5">
            <div className="d-flex flex-column">
              <div className="category-group pb-5">
              <h4 className="fw-bolder pb-3">All Categories</h4>
                    <Link to='/shop'>
                      <button className="btn-category d-flex mb-2 small b-none py-2 px-3">
                        <div className="fw-bold">All</div>
                        <div className="ps-4 text-muted">{totalProducts}</div>
                      </button>
                    </Link>
              {categories.map((item) => {
                if (item._id === id) {
                  return (
                    <Link to={`/category/${item._id}`} key={item._id}>
                      <button className="btn-category d-flex mb-2 small b-none py-2 px-3">
                        <div className="fw-bold">{item.name}</div>
                        <div className="ps-4 text-muted">{item.count}</div>
                      </button>
                    </Link>
                  );
                }
              })}
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
            <div className="shop-grid">
              {categoryProducts.map((product) => (
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
              {/* <Pagination productsPerPage={productsPerPage} totalProducts={products.length} currentPage={currentPage}  paginate={paginate} /> */}
            </div>
          </div>
        </div>
      </section>
    </>
    )
}