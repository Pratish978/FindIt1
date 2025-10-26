import React, { useState } from 'react';
import '../Styles/Navbar.css';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="logo">Find<span>It</span></div>

      
      <div className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>
        <span></span>
        <span></span>
        <span></span>
      </div>

      
      <div className={`nav-links ${menuOpen ? 'active' : ''}`}>
        <a href="/">Home</a>
        <a href="/recently-lost">Lost Items</a>
        <a href="/recently-found">Found Items</a>
        <a href="/login">Login</a>
        <a href="/signup">Sign Up</a>
      </div>
    </nav>
  );
};

export default Navbar;
