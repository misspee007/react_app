import "../styles/navbar.css";
import { useState } from "react";
import { Link } from "react-router-dom";

import logo from "../assets/images/logo.svg";
import Button from "./Button";

const Navbar = () => {
  const [hamburgerOpen, setHamburgerOpen] = useState(false);

  const toggleHamburger = () => {
    hamburgerOpen ? setHamburgerOpen(false) : setHamburgerOpen(true);
  };

  return (
    <nav className="nav">
        <Link to="/" className="logo">
          <img src={logo} alt="Shortly logo" />
        </Link>

        <ul className="menu">
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          <li>
            <Link to="/login">Login</Link>
          </li>
          <li>
            <Link to="/signup">
              <Button text="Sign Up" type="btn btn-rounded-sm btn-sm" />
            </Link>
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
    </nav>
  );
};

export default Navbar;
