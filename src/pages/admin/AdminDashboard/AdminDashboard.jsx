import React from 'react';
import './AdminDashboard.css';
import Sidebar from '../Utils/Sidebar';

const AdminDashboard = () => {
  return (
    <div className="dashboard">
     <Sidebar/>
      <main className="main-content">
        <header>
          <h1>Admin Dashboard</h1>
          <div className="profile">Admin</div>
        </header>

        <section className="cards">
          <div className="card">
            <h3>Total Courses</h3>
            <p>128</p>
          </div>
          <div className="card">
            <h3>Registered Students</h3>
            <p>2300</p>
          </div>
          <div className="card">
            <h3>Active Instructors</h3>
            <p>85</p>
          </div>
          <div className="card">
            <h3>Revenue</h3>
            <p>$42,500</p>
          </div>
        </section>

       
      </main>
    </div>
  );
};

export default AdminDashboard;