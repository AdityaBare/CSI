import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Lock } from 'lucide-react';
import logo from '../../assets/images/logo.png';
import './Header.css';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const isLoggedIn = false; // Assume not logged in for now

  const navItems = [
    { name: 'Home', path: '/', protected: false },
    { name: 'Team', path: '/team', protected: true },
    { name: 'Events', path: '/events', protected: true },
    { name: 'Gallery', path: '/gallery', protected: true },
    { name: 'About', path: '/about', protected: false },
    { name: 'Login', path: '/auth', protected: false },
  ];

  return (
    <header className="header">
      <div className="header-content">
        <div className="logo-container">
          <img src={logo} alt="Sanjivani Logo" className="logo" />
        </div>
        <nav className={`nav ${isMenuOpen ? 'nav-open' : ''}`}>
          {navItems.map((item) => (
            <Link
              key={item.name}
              to={item.path}
              className="nav-link"
              onClick={() => setIsMenuOpen(false)}
            >
              {item.name}
              {item.protected && !isLoggedIn && <Lock size={12} className="lock-icon" />}
            </Link>
          ))}
        </nav>
        <button
          className="hamburger"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
    </header>
  );
}
