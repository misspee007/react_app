import "./styles/navbar.css";
import { useState } from "react";

const Navbar = () => {
  const [hamburgerOpen, setHamburgerOpen] = useState(false);

  const toggleHamburger = () => {
    hamburgerOpen ? setHamburgerOpen(false) : setHamburgerOpen(true);
  }

  return (
    <div className="nav">
      <ul className="menu">
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/about">About</a>
        </li>
        <li>
          <a href="/contact">Contact Us</a>
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
