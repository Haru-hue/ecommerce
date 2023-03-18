import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router";

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
  

export default function CategoryPage () {
    const { id } = useParams<{ id?: string }>();
    const [category, setCategory] = useState<Products[]>([]);
  
    async function getCategory(categoryId: string) {
      try {
        const response = await axios.get<Products[]>(
          `http://localhost:5000/category/${categoryId}`
        );
        setCategory(response.data)
      } catch (error) {
        console.error(error);
      }
    }
  
    useEffect(() => {
      id && getCategory(id);
    }, [id]);

    return (
        <div>
            <div className="shop-grid">
              {category.map((product) => (
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
    )
}