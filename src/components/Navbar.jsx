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
			<Link to="/shortly" className="logo">
				<img src={logo} alt="Shortly logo" />
			</Link>

			<ul className="menu">
				<span className="menu-top">
					<li>Features</li>
					<li>Pricing</li>
					<li>Resources</li>
				</span>
				<hr />
				<span className="menu-btm">
					<li>
						<Link to="/login">Login</Link>
					</li>
					<li>
						<Link to="/signup">
							<Button type="btn btn-rounded btn-rg">Sign Up</Button>
						</Link>
					</li>
				</span>
			</ul>

			<div className="menu-icon" onClick={toggleHamburger}>
				<i
					className={hamburgerOpen ? "bi bi-x" : "bi bi-list"}
					style={{fontSize: "2rem"}}
				></i>
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
