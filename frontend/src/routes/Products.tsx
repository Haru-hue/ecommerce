import axios from "axios";
import Pagination from "components/Paginate";
import { useEffect, useState } from "react";

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
  category: string;
  count: number;
}

const ShopPage = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [categories, setCategories] = useState<Category[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [productsPerPage] = useState(20)

  async function getProducts() {
    try {
      const response = await axios.get<Product[]>('http://localhost:5000/shop');
      setProducts(response.data);
      console.log(response.data[0])
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
      <div className="d-flex flex-column">
        <h1>Shop</h1>
        <div className="sorting">

        </div>
      </div>
      <div className="p-5">
        <div className="row p-5">
          <div className="col-lg-3">
            <div className="d-flex flex-column">
              <h4>All Categories</h4>
              <ul className="list-group">
                {categories.map((category) => (
                  <button className="list-group-item btn-category" key={category.category}>
                    {category.category} <div className="ps-3">{category.count}</div>
                  </button>
                ))}
              </ul>
            </div>
          </div>
          <div className="col-lg-9">
            <div className="shop-grid">
              {currentProducts.map((product) => (
                <div key={product._id} className="card">
                  <img src={product?.image?.url} alt={product.name} className="card-img-top" />
                  <div className="card-body">
                    <h5 className="card-title">{product.name}</h5>
                    <p className="card-text">{product.price}</p>
                    <p className="card-text small">{product.meta.weight}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <Pagination productsPerPage={productsPerPage} totalProducts={products.length} currentPage={currentPage}  paginate={paginate} />
      </div>
    </div>
  );
}



export default ShopPage;