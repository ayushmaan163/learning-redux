import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="logo">Redux Store</div>
      <div className="navItems">
        <Link className="navLink" to="/">
          Home
        </Link>
        <Link className="navLink" to="/cart">
          Cart
        </Link>
        <span className="cartCounter">Cart Items: 0</span>
      </div>
    </div>
  );
};
export default Navbar;
