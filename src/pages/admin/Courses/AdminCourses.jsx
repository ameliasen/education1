import React, { useState } from 'react';
import CourseCard from "../../../Component/CourseCard/CourseCard";
import Course1 from '../../../image/Course1.jpg';
import Course2 from '../../../image/Course2.jpg';
import Course3 from '../../../image/course3.jpg';  
import Course4 from '../../../image/course4.jpg';
import Course5 from '../../../image/course5.jpg';
import Course6 from '../../../image/courses6.jpg';
import './admincourses.css';
import Sidebar from '../Utils/Sidebar';
import "../Utils/common.css";

const AdminCourses = () => {
  const [courses, setCourses] = useState([
    { id: 1, image: Course1, description: "Webdevelopment Full Course | Web Development Tutorial For Beginners | Simplilearn" },
    { id: 2, image: Course2, description: "Java Developer Full Course| Java Developer Tutorial For Beginners | Simplilearn" },
    { id: 3, image: Course3, description: "Python Full Course | Python Tutorial For Beginners | Simplilearn " },
    { id: 4, image: Course4, description: "Cyber Sceurity Full Course | Cyber Tutorial For Beginners | Simplilearn" },
    { id: 5, image: Course5, description: "Cloud Computing Full Course | Cloud Computing Tutorial For Beginners | Simplilearn" },
    { id: 6, image: Course6, description: "Artificial Intelligence Full Course | AI and Machine Learning Tutorial For Beginners | Simplilearn" },
  ]);

  const [newDescription, setNewDescription] = useState('');
  const [newImage, setNewImage] = useState('');

  const handleAddCourse = () => {
    if (newDescription && newImage) {
      const newCourse = {
        id: Date.now(),
        image: newImage,
        description: newDescription,
      };
      setCourses([...courses, newCourse]);
      setNewDescription('');
      setNewImage('');
    }
  };

  const handleDelete = (id) => {
    const updatedCourses = courses.filter(course => course.id !== id);
    setCourses(updatedCourses);
  };

  return (
    <div className="Main-course">
      {/* Sidebar on the left */}
      <div className="Sidebar">
        <Sidebar />
      </div>

      {/* Course Cards + Add Form on the right */}
      <div className="course-cards">
        <h2 className='add-head'>Admin Courses</h2>

        {/* Form to add new course */}
        <div className="add-course-form">
          <input
            type="text"
            placeholder="Image URL"
            value={newImage}
            onChange={(e) => setNewImage(e.target.value)}
            className='course-input'
          />
          <input
            type="text"
            placeholder="Course Description"
            value={newDescription}
            onChange={(e) => setNewDescription(e.target.value)}
            className='course-description'
          />
          <button onClick={handleAddCourse} className='add-btn'>Add Course</button>
        </div>

        {/* Display course cards */}
        <div className="cards-wrapper">
          {courses.map(course => (
            <div key={course.id} className="card-container">
              <CourseCard image={course.image} description={course.description} />
              <button className="delete-btn" onClick={() => handleDelete(course.id)}>Delete</button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AdminCourses;
