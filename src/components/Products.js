import { useEffect, useState } from "react";

const Products = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const data = await fetch("https://fakestoreapi.com/products");
      const json = await data.json();

      console.log(json);
      setProducts(json);
    };

    fetchProducts();
  }, []);
  return (
    <div>
      {products.map((product) => {
        <div className="productCard" key={product.id}>
          <img src={product.image} />
          <h4>{product.title}</h4>
          <h5>{product.price}</h5>
          <button className="cartBtn">Add to Cart</button>
        </div>;
      })}
    </div>
  );
};
export default Products;
