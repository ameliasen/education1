import React from 'react';
import './Course.css';




const CourseCard = (props) => {
  return (
    <div className="course-card-container">
      <div className="course-card">
      <img className="course-image" src={props.image} alt="Course" />
      <div className="course-content">
        <h2 className="course-title">
        {props.description}
        </h2>
        <p className="course-info">Uploaded: Dec 3, 2024</p>
        <p className="course-likes">333 Likes</p>
        <button className="Lecture-button"><a href="/Coursedescription">More</a></button>
      </div>
    </div>
    </div>
  );
};

export default CourseCard;


