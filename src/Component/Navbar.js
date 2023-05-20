import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
function Navbar() {
  const selectedItems = useSelector((state)=>state.cart)
  console.log(selectedItems)
  return (
    <div className="d-flex justify-content-evenly align-items-center " style={{backgroundColor:'black',color:'whitesmoke',height:'50px'}}>
      <h4>Product Items</h4>
      <div >
        <Link to="/" className="me-5" style={{textDecoration:'none'}}>Home</Link>
        <Link to="/product" style={{textDecoration:'none'}}>Product</Link>
      </div>
      <h6>Added Items: {selectedItems.length}</h6>
    </div>
  );
}

export default Navbar;
