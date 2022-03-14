import React from "react";
import "../../../App.css";
import "./navStyles.css";

const Nav = () => {
  return (
    <>
      <button class="mobile-nav-toggle">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="mobile-nav_logo"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      </button>
      <nav class="nav-section_main nav-section_main-mobile">
        <div class="nav-section_logo">
          <a href="index.html">NucaPrints</a>
        </div>
        <div class="nav-section_spacer" data-visible="false">
          <a href="index.html">Home</a>
          <a href="product.html">Shop</a>
          <a href="contact.html">Contact</a>
        </div>
      </nav>
    </>
  );
};

export default Nav;
