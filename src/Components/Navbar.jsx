import React, { useState } from 'react';
import '../Styles/Navbar.css';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="logo">Find<span>It</span></div>

      {/* Mobile Hamburger Menu */}
      <div className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>
        <span></span>
        <span></span>
        <span></span>
      </div>

      {/* Nav Links */}
      <div className={`nav-links ${menuOpen ? 'active' : ''}`}>
        <a href="/">Home</a>
        <a href="#lost">Lost Items</a>
        <a href="#find">Found Items</a>
        <a href="/login">Login</a>
        <a href="/signup">Sign Up</a>
      </div>
    </nav>
  );
};

export default Navbar;
