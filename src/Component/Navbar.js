import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import "./Navbar.css";
function Navbar() {
  const selectedItems = useSelector((state) => state.cart);
  console.log(selectedItems);
  return (
    <div className="navbar">
      <h4 className="text-white">Product Items</h4>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/product">Product</Link>
          </li>
        </ul>
      </nav>
      <h6  className="text-white">Added Items: {selectedItems.length}</h6>
    </div>
  );
}

export default Navbar;
