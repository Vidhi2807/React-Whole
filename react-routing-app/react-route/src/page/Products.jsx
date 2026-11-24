import { useEffect, useState } from "react";
import Card from "../components/card";

function Products() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  return (
    <div className="container">
      <h2>Products</h2>
      <div className="grid">
        {products.map((p) => (
          <Card
            key={p.id}
            title={p.title}
            image={p.image}
            extra={`₹ ${p.price}`}
          />
        ))}
      </div>
    </div>
  );
}

export default Products;
