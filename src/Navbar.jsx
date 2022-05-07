import "./styles/navbar.css";
import { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [hamburgerOpen, setHamburgerOpen] = useState(false);

  const toggleHamburger = () => {
    hamburgerOpen ? setHamburgerOpen(false) : setHamburgerOpen(true);
  }

  return (
    <div className="nav">
      <ul className="menu">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/contact">Contact Us</Link>
        </li>
      </ul>
      <div className="menu-icon" onClick={toggleHamburger}>
        <i className={hamburgerOpen ? "bi bi-x" : "bi bi-list"}></i>
      </div>

      <style jsx="true">{`
       @media screen and (max-width: 768px){
        .menu{
          display: ${hamburgerOpen ? "inline" : "none"};
        }
      `}</style>
    </div>
  );
};

export default Navbar;
