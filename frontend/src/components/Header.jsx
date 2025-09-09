import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "C:/Users/A/Desktop/StoreApp/my-app/src/assets/images/logo.png";
import "C:/Users/A/Desktop/StoreApp/my-app/src/assets/css/Header.css"; // Import CSS

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="header_section">
      <div className="container">
        <nav className="navbar custom_nav-container">
          {/* Logo */}
          <Link className="navbar-brand" to="/">
            <img width="250" src={logo} alt="logo" />
          </Link>

          {/* Hamburger Toggle */}
          <button
            className={`navbar-toggler ${isOpen ? "open" : ""}`}
            onClick={toggleMenu}
            aria-label="Toggle navigation"
            aria-expanded={isOpen}
          >
            <span className="bar" />
            <span className="bar" />
            <span className="bar" />
          </button>

          {/* Collapsible Nav */}
          <div className={`navbar-menu ${isOpen ? "show" : ""}`}>
            <ul className="navbar-nav">
              <li className="nav-item"><Link className="nav-link" to="/">Home</Link></li>
              <li className="nav-item"><Link className="nav-link" to="/about">About</Link></li>
              <li className="nav-item"><Link className="nav-link" to="/product">Products</Link></li>
              <li className="nav-item"><Link className="nav-link" to="/blog">Offers</Link></li>
              <li className="nav-item"><Link className="nav-link" to="/testimonial">Login</Link></li>
              <li className="nav-item"><Link className="nav-link" to="/contact">Contact</Link></li>
            </ul>
          </div>
        </nav>
      </div>
    </header>
  );
}
