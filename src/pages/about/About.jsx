import React from 'react';
import './About.css';




const About = () => {
  return (
    <>
    

    <div className="about-container">
      <section className="intro-section">
        <h1>About <span>Co-Lead</span></h1>
        <p className='about-para'>
          Welcome to <strong>Co-Lead</strong> – your ultimate destination for quality online education.
          Our platform is designed to empower learners by providing easy access to courses, study materials, and video lectures.
        </p>
      </section>

      <section className="cards-section">
        <div className="card">
          <h2> Our Mission</h2>
          <p>To make education accessible and affordable to every student, anytime and anywhere.</p>
        </div>
        <div className="card">
          <h2> Our Vision</h2>
          <p>To build a global community of learners and educators through technology and innovation.</p>
        </div>
        <div className="card">
          <h2> Our Instructors</h2>
          <p>Industry experts and certified professionals who bring real-world experience into the classroom.</p>
        </div>
      </section>


<div className="about-features">
        <div className="feature-card">
          <h3> Courses</h3>
          <p>
            Explore a variety of interactive and career-focused courses, covering programming, web development, and more.
          </p>
        </div>
        <div className="feature-card">
          <h3> Notes</h3>
          <p>
            Access comprehensive and exam-ready notes prepared by experts, ideal for self-study and revisions.
          </p>
        </div>
        <div className="feature-card">
          <h3> Lectures</h3>
          <p>
            Watch high-quality lectures anytime, anywhere to reinforce your understanding with visual explanations.
          </p>
        </div>
      </div>

      <section className="stats-section">
        <div className="stat">
          <h2>10K+</h2>
          <p>Students Enrolled</p>
        </div>
        <div className="stat">
          <h2>500+</h2>
          <p>Courses Available</p>
        </div>
        <div className="stat">
          <h2>1M+</h2>
          <p>Lecture Views</p>
        </div>
      </section>

      <section className="why-choose-section">
        <h2>Why Choose Us?</h2>
        <ul>
          <li> Well-structured Courses</li>
          <li> Live Doubt Clearing Sessions</li>
          <li> Certification After Completion</li>
          <li> Affordable Pricing</li>
        </ul>
      </section>

       <section className="section cta">
        <h2>Join Us Today!</h2>
        <p>
          Start your learning journey with us. Whether you're looking to improve
          your skills or explore new subjects, we’ve got you covered.
        </p>
        <a href="/courses" className="btn">
          Explore Courses
        </a>
        <a href="/login" className="btn">
          Login
        </a>
      </section>
    </div>
    </>
  );
};

export default About;