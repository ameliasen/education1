import React from "react";
import "./testimonial.css";
import testimonialImage1 from "../../image/testimonial1.jpg";
import testimonialImage2 from "../../image/testimonial2.jpg";
import testimonialImage3 from "../../image/testimonial3.jpg";

const testimonial = [
{
  name: 'Ambika Singh',
  role: 'Web Development Student',
  feedback: 'I am a BCA graduate and had done various courses, but I was unable to outshine and get a good job.',
  image: testimonialImage2, // ✅ matches actual file name


 
  },
  

   {
  name: 'Divya Kumari',
  role: 'Data Science Learner',
  feedback: 'The Data Science program is great for people who are looking forward to related jobs in the future.',
  image: testimonialImage1, 
    },

  {
  name: 'Anjali Singh',
  role: 'UI/UX Designer',
    feedback: 'In just 3 months, I have learned a lot here. Mentors always shared the latest updates happening in the UI/UX design field.',

  image: testimonialImage3, 
}

];

const Testimonial = () => {
  return (
    <section className="testimonial-section">
      <h2>What Our Learners Say</h2>
      <div className="testimonial-container">
        {testimonial.map((testimonial, index) => (
          <div className="testimonial-card" key={index}>
            <img src={testimonial.image} alt={testimonial.name} />
            <p className="feedback">"{testimonial.feedback}"</p>
            <h4>{testimonial.name}</h4>
            <p className="role">{testimonial.role}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonial;