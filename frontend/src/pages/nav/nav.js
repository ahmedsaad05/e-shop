import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Import the Link component
import './nav.css';

export const Nav = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <div>
      {/* Navigation Bar */}
      <nav className="navbar">
        <div className="logo">cosmetics</div>

        {/* Search Bar */}

        <ul className={`nav-links ${isMenuOpen ? 'show-mobile' : ''}`}>
          {/* Use Link component for navigation */}
          <li><Link to="/">Home</Link></li>
          <li><Link to="/products">Products</Link></li>
          <li><Link to="/cart">Cart</Link></li>
          <li><Link to="/profile">Profile</Link></li>
          <li><Link to="/login">login</Link></li>


        </ul>

        <div className="menu-icon" onClick={toggleMenu}>
          &#9776; {/* Unicode for the menu icon (three horizontal lines) */}
        </div>
      </nav>
    </div>
  );
};
