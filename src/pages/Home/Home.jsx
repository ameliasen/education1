import React from 'react';
import './Home.css';
import LearningBanner from '../../image/learning_banner.webp';
import Testimonial from '../../Component/Testimonial/testimonial';
import bgImg from "../../image/e-learning-back.avif"; 
const statsData = [
  {
    icon: 'fa-users',
    text: 'Retain customers and employees.'
  },
  {
    icon: 'fa-user-circle',
    text: 'Increase customer lifetime value.'
  },
  {
    icon: 'fa-money-bill-wave',
    text: 'Reduce customer support costs.'
  },
  {
    icon: 'fa-tachometer-alt',
    text: 'Boost sales and partner team performance.'
  },
  {
    icon: 'fa-chalkboard-teacher',
    text: 'Maintain compliance through training.'
  }
];

const LearnerStats = () => {
  return (
    <div className="learner-stats-container">
      <h2>Engaged learners lead to better numbers.</h2>
      <div className="stats-icons">
        {statsData.map((item, index) => (
          <div key={index} className="stat-item">
            <i className={`fas ${item.icon}`}></i>
            <p>{item.text}</p>
          </div>
        ))}
      </div>
      <button className="demo-btn">Get a demo</button>
    </div>
  );
};

const Home = () => {
  return (

    
    <>
      

    <div className="homepage">
<div className='home-header'>

      <section className="hero">
         <h1 className='Colead'>COLEAD</h1>
        <h2>Welcome to E-Learn Platform</h2>
        <p className="welcome-p">Your one-stop solution for online learning.</p>
        <button className="explore-btn" ><a href="/course" className="Button-a">Explore Courses</a></button>
      </section>

      

      <section className="features">
        <h2 className='features-heading'>Popular Categories</h2>
        <div className="feature-cards">
          <div className="card">Web Development</div>
          <div className="card">Data Science</div>
          <div className="card">Programming</div>
          <div className="card">Machine Learning</div>
        </div>
      </section>


     </div> 
  

      <div className="home-container">
        <div className="home-image">
          <img src={LearningBanner} alt="Learning Banner" />
        </div>
        <div className="home-text">
          <h1>Deliver meaningful learning experiences across the board</h1>
          <p>
            Easily create on-brand and enjoyable learning experiences with Adobe Learning Manager.
            Engage customers, drive sales enablement, and develop employee skills in a single and unified scalable platform.
          </p>
        </div>
      </div>
        </div>

      <LearnerStats />
    <Testimonial />
    </>
  );
};

export default Home;
