import { Link, BrowserRouter } from "react-router-dom";
import "./navbarmain.css";

const NavbarMain = () => {
  return (
    <div className="navbar">
      <div className="crystal-logo" aria-label="crystal-logo">
        <span>crystal</span>
      </div>
      <BrowserRouter>
        <ul className="navbar-links">
          <li>
            <Link href="/">
              <span aria-label="home">Home</span>
            </Link>
          </li>
          <li>
            <Link href="/dashboard">
              <span aria-label="dashboard">Dashboard</span>
            </Link>
          </li>
          <li>
            <Link href="/about">
              <span aria-label="about">About</span>
            </Link>
          </li>
          <li>
            <Link href="/contact">
              <span aria-label="contact">Contact</span>
            </Link>
          </li>
        </ul>
      </BrowserRouter>
    </div>
  );
};

export default NavbarMain;
