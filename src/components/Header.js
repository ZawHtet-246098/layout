import React, { useState } from 'react';
import './Header.css';

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="header">
      <div className="logo">LOGO</div>
      <nav className={`nav ${isOpen ? 'open' : ''}`}>
        <a href="/">Home</a>
        <a href="/">Discovery</a>
        <a href="/">Photos</a>
        <a href="/">Contact</a>
      </nav>
      <div className="burger" onClick={toggleMenu}>
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
      </div>
    </header>
  );
}

export default Header;
