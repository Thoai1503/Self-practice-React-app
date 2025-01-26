import React from "react";

const Navbar = () => {
  return (
    <div class="page-wrapper">
      <div class="nav-wrapper">
        <div class="grad-bar"></div>
        <nav class="navbar">
          <img
            src="https://upload.wikimedia.org/wikipedia/en/thumb/c/c8/Bluestar_%28bus_company%29_logo.svg/1280px-Bluestar_%28bus_company%29_logo.svg.png"
            alt="Company Logo"
          ></img>
          <div class="menu-toggle" id="mobile-menu">
            <span class="bar"></span>
            <span class="bar"></span>
            <span class="bar"></span>
          </div>
          <ul class="nav no-search">
            <li class="nav-item">
              <a href="#">Home</a>
            </li>
            <li class="nav-item">
              <a href="#">About</a>
            </li>
            <li class="nav-item">
              <a href="#">Work</a>
            </li>
            <li class="nav-item">
              <a href="#">Careers</a>
            </li>
            <li class="nav-item">
              <a href="#">Contact Us</a>
            </li>
            <i class="fas fa-search" id="search-icon"></i>
            <input
              class="search-input"
              type="text"
              placeholder="Search.."
            ></input>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
