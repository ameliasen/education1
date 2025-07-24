 import React from 'react';
import Sidebar from '../Utils/Sidebar';
import './user.css';
 
 
 
 const AdminUser =()=>{
return(
    <>
    <div className='AdminUser'>
        <div className="sidebar">
        <Sidebar />
      </div>
<section className="table-section">
          <h2>Recent Enrollments</h2>
          <table>
            <thead>
              <tr>
                <th>Student</th>
                <th>Course</th>
                <th>Date</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Jane Doe</td>
                <td>React for Beginners</td>
                <td>2025-07-18</td>
                <td>Enrolled</td>
              </tr>
              <tr>
                <td>John Smith</td>
                <td>Advanced Python</td>
                <td>2025-07-17</td>
                <td>Completed</td>
              </tr>
              <tr>  
                <td>Alice White</td>
                <td>Data Science 101</td>
                <td>2025-07-17</td>
                <td>In Progress</td>
              </tr>
            </tbody>
          </table>
        </section>
        </div>
        </>
)

 }
 
 
export default AdminUser;
 