import "../styles/footer.css";
import { Link } from "react-router-dom";
import Button from "./Button";
import logoWhite from "../assets/images/logoWhite.svg";

const Footer = () => {
  return (
    <footer>
      <div className="footer-top">
        <h2>Boost your links today</h2>
        <Button text="Get Started" type="btn btn-rounded btn-rg" />
      </div>
      <div className="footer-btm">
        <Link to="/shortly">
          <img src={logoWhite} alt="Shortly logo"  />
        </Link>
        <div className="footer-menu">
          <div className="">
            <h4>Features</h4>
            <ul>
              <li>
                <Link to="">Link Shortening</Link>
              </li>
              <li>
                <Link to="">Branded Links</Link>
              </li>
              <li>
                <Link to="">Analytics</Link>
              </li>
            </ul>
          </div>
          <div className="">
            <h4>Resources</h4>
            <ul>
              <li>
                <Link to="">Blog</Link>
              </li>
              <li>
                <Link to="">Developers</Link>
              </li>
              <li>
                <Link to="">Support</Link>
              </li>
            </ul>
          </div>
          <div className="">
            <h4>Company</h4>
            <ul>
              <li>
                <Link to="/about">About</Link>
              </li>
              <li>
                <Link to="">Our Team</Link>
              </li>
              <li>
                <Link to="">Careers</Link>
              </li>
              <li>
                <Link to="/contact">Contact</Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="socials">
          <a href="#">
            <i className="bi bi-facebook" aria-label="Facebook"></i>
          </a>
          <a href="#">
            <i className="bi bi-twitter" aria-label="Twitter"></i>
          </a>
          <a href="#">
            <i className="bi bi-pinterest" aria-label="Pinterest" ></i>
          </a>
          <a href="#">
            <i className="bi bi-instagram" aria-label="Instagram"></i>
          </a>
        </div>
      </div>
        <div className="attribution">
          Challenge by{" "}
          <a
            href="https://www.frontendmentor.io?ref=challenge"
            target="_blank"
            rel="noreferrer"
          >
            Frontend Mentor
          </a>
          . Coded by <a href="#">PDA</a>.
        </div>
    </footer>
  );
};

export default Footer;
