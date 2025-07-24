import React from 'react';
import CourseCard from '../../Component/CourseCard/CourseCard';
import Course1 from '../../image/Course1.jpg';
import Course2 from '../../image/Course2.jpg';
import Course3 from '../../image/course3.jpg';  
import Course4 from '../../image/course4.jpg';
import Course5 from '../../image/course5.jpg';
import Course6 from '../../image/courses6.jpg';
import './Course.css';

const Course = (props) => {
  return (
    <>
     <div className="Main-course">

       <CourseCard image={Course1} description={"Webdevelopment Full Course | Web Development Tutorial For Beginners | Simplilearn"}/>

     <CourseCard image={Course2} description={"Java Developer Full Course| Java Developer Tutorial For Begnners | Simplilearn"}/>

      <CourseCard image={Course3} description={"Python Full Course | Python Tutorial For Beginners | Simplilearn "}/>

      <CourseCard image={Course4} description={"Cyber Sceurity Full Course | Cyber Tutorial For Beginers | Simplilearn"}/>

      <CourseCard image={Course5} description={"Cloud Computing Full Course | Cloud Computing Tutorial For Beginners | Simplilearn"}/>

      <CourseCard image={Course6} description={"Artificial Intelligence Full Course | AI and Machine Learning Tutorial For Beginners | Simplilearn"}/>

     </div>

    </>
  );
};

export default Course;
