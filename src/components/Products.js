import { useEffect, useState } from "react";

const Products = () => {
  const [items, setItems] = useState([]);

  const fetchProducts = async () => {
    const data = await fetch("https://fakestoreapi.com/products");
    const json = await data.json();

    console.log(json);
    setItems(json);
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div>
      {items.map((item) => (
        <div className="productCard" key={item.id}>
          <img src={item.image} />
          <h4>{item.title}</h4>
          <h5>${item.price}</h5>
          <button className="cartBtn">Add to Cart</button>
        </div>
      ))}
    </div>
  );
};
export default Products;
