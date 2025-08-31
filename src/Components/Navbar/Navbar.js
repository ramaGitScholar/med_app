import React from 'react';
import './Navbar.css';
import {Link} from 'react-router-dom'

export default function Navbar() {
  const handleClick = () => {
    console.log('Menu Clicked');
  };

  const navItems = [
    { label: 'Appointments', className: 'links', path: '/' },
    { label: 'Reviews', className: 'links', path: '/' },
    { label: 'Sign Up', className: 'links btn1', path: '/sign-up' },
    { label: 'Log In', className: 'links btn1', path: '/log-in' },
  ];

  return (
    <nav>
      <div className="logo">
        <span>StayHealthy</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="40"
          width="40"
          viewBox="0 0 1000 1000"
          style={{ fill: '#3685fb' }}
        >
          <title>Doctor With Stethoscope SVG icon</title>
          <g>
            {/* Path for the stethoscope icon */}
            <path d="M499.8,10c91.7,0,166,74.3,166,166c0,91.7-74.3,166-166,166c-91.7,0-166-74.3-166-166C333.8,84.3,408.1,10,499.8,10z" />
            {/* Additional path for the icon */}
            <path d="M499.8,522.8c71.2,0,129.1-58.7,129.1-129.1H370.6C370.6,464.1,428.6,522.8,499.8,522.8z" />
            {/* Another path for the icon (truncated) */}
            <path d="..." />
          </g>
        </svg>
      </div>

      <div className="nav_icon" onClick={handleClick}>
        <i className="fa-solid fa-bars"></i>
      </div>

      <div className="nav-links">
        <ul className="links">
          {navItems.map((item, index) => (
            <li key={index} className={item.className}>
              <Link to={item.path}>{item.label}</Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}