import React, { useState } from "react";
import { Link } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { RxCross1 } from "react-icons/rx";
import "./Navbar.css";
function Navbar() {
 ;
  const [navbarOpen, setNavbarOpen] = useState(false);
  const handleToggle = () => {
    setNavbarOpen((prev) => !prev);
  };
  return (
    <div className="navbar">
      <h4 className="text-white">Space X</h4>
      <nav className={navbarOpen ? "nav-mobile" : "menu_link"}>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/product">Missions</Link>
          </li>
        </ul>
      </nav>
      <span onClick={handleToggle} className="hamburgericon">
        {navbarOpen ? (
          <i style={{marginRight:'-30px'}}>
            <RxCross1></RxCross1>
          </i>
        ) : (
          <i>
            <GiHamburgerMenu />
          </i>
        )}
      </span>
    </div>
  );
}

export default Navbar;
