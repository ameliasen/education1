import React from 'react';
import './Header.css';

const Header= () => {
  return (
    <header className="navbar">
      <div className="navbar-left">
        <span className="brand-name">COLEAD</span>
      </div>
      <nav className="navbar-right">
        <ul className="nav-menu">
          <li><a href="/" className="active">Home</a></li>
          <li><a href="Course">Self-study Courses</a></li>
          <li><a href="About">Resources</a></li>
           <li><a href="AdminDashboard">Account</a></li>
          <li><a href="Login"><button className='login-button'>Login</button></a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
