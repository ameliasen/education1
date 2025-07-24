import React from 'react';
import { Link } from 'react-router-dom'; // ✅ import Link
import './common.css';

const Sidebar = () => {
  return (
    <aside className="sidebar">
      <h2>E-Learn Admin</h2>
      <nav>
        <ul>
          <li><Link to="/AdminDashboard">Homepage</Link></li>
          <li><Link to="/AdminCourses">Courses</Link></li>
          <li><Link to="/AdminUser">Students</Link></li>
          <li><Link to="/Layout">Logout</Link></li>
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
