import React from "react";
import { Link } from "react-router-dom";
import './landing.css';

function Navbar() {
  return (
    <nav>
      <div className="nav__header">
        <div className="nav__logo">
          <Link to="/" className="logo">Solescape</Link>
        </div>
        <div className="nav__menu__btn" id="menu-btn">
          <i className="ri-menu-line"></i>
        </div>
      </div>
      <ul className="nav__links" id="nav-links">
        <li><Link to="/">Home</Link></li>
        <li><a href="#about">About</a></li>
        <li><a href="#product">Products</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
      <div className="nav__search" id="nav-search"></div>
      <li className="nav__links" id="auth-button">
        <button className="button" id="login-btn">
          <Link to="/login">Sign In</Link>
        </button>
      </li>
      <div className="profile-icon" id="profile-icon" style={{ display: "none" }}>
        <Link to="/profile"><i className="fa-solid fa-user"></i></Link>
        <div className="dropdown-menu" id="dropdown-menu" style={{ display: "block" }}>
          <Link to="/profile">Profile</Link>
          <a href="#" id="logout">Logout</a>
        </div>
      </div>
      <div className="cart-icon">
        <i className="fa-solid fa-cart-shopping"></i>
        <div className="totalQuantity">0</div>
      </div>
      <div className="button">
        <Link to="/sell">+Sell</Link>
      </div>
    </nav>
  );
}

export default Navbar;
