import axios from "axios";
import { useEffect, useState } from "react";

interface Product {
  _id: string;
  name: string;
  price: number;
  category: string;
  image: {
    url: string;
  };
  meta: {
    weight: number;
  };
}

const ShopPage = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [productsPerPage] = useState(20)

  async function getProducts() {
    try {
      const response = await axios.get<Product[]>('http://localhost:5000/shop');
      setProducts(response.data);
      console.log(response.data[0].image.url)
    } catch (err) {
      console.log(err);
    }
  }

  useEffect(() => {
    getProducts();
  }, []);

  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = products.slice(indexOfFirstProduct, indexOfLastProduct);

  // Change page
  function paginate(pageNumber: number) {
    setCurrentPage(pageNumber);
  }

  return (
    <div className="container">
      <div className="grid">
        {currentProducts.map((product) => (
          <div key={product._id} className="card">
            <img src={product?.image?.url} alt={product.name} className="card-img-top" />
            <div className="card-body">
              <h5 className="card-title">{product.name}</h5>
              <p className="card-text">{product.price}</p>
              <p className="card-text">{product.category}</p>
              <p className="card-text">{product.meta.weight}</p>
            </div>
          </div>
        ))}
      </div>
      <Pagination productsPerPage={productsPerPage} totalProducts={products.length} paginate={paginate} />
    </div>
  );
}

interface PaginationProps {
  productsPerPage: number;
  totalProducts: number;
  paginate: (pageNumber: number) => void;
}

function Pagination({ productsPerPage, totalProducts, paginate }: PaginationProps) {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalProducts / productsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <nav>
      <ul className="pagination">
        {pageNumbers.map((number) => (
          <li key={number} className="page-item">
            <button onClick={() => paginate(number)} className="page-link">
              {number}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default ShopPage;