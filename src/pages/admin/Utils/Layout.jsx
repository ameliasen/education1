import React from 'react';
import './common.css';
import Sidebar from './Sidebar';

const Layout = () => {
  return (
    <div className="layout-container">
      <div className="sidebar">
        <Sidebar />
      </div>

      <div className="logout-container">
        <div className="curity-logo">CURITY</div>
        <div className="checkmark"></div>
        <h2 className='log-head'>You have been logged out</h2>
        <p className='log-thank'>Thank you</p>
        <div className="powered">Powered by CURITY</div>
      </div>
    </div>
  );
};

export default Layout;
