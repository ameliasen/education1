import React, { useState } from "react";
import './auth.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Register = () => {
  const [name, setname] = useState('');
  const [email, setemail] = useState('');
  const [password, setpassword] = useState('');
  const navigate = useNavigate();

  const handleClick = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post("http://localhost:4000/register", {
        name,
        email,
        password,
      });
      console.log(response.data);
      alert("Registered Successfully");
      navigate('/Verify'); // ✅ Navigate properly after success
    } catch (err) {
      console.error("Registration error:", err);
      alert("Registration failed");
    }
  };

  return (
    <div className="container">
      <div className="signup-box">
        <h2>Sign up</h2>
        <form onSubmit={handleClick}>
          <input
            type="text"
            placeholder="First Name"
            required
            onChange={(e) => setname(e.target.value)}
          />
          <input type="text" placeholder="Last Name" required />
          <input
            type="email"
            placeholder="E-mail"
            required
            onChange={(e) => setemail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            required
            onChange={(e) => setpassword(e.target.value)}
          />
          <p>Already a member? <a href="Login">Log in</a></p>
          <button type="submit"><a href="Verify" className="register-a">Register</a></button>
        </form>
      </div>
      <div className="illustration">
        <img
          src="https://cdn-icons-png.flaticon.com/512/4140/4140048.png"
          alt="Sign Up Illustration"
        />
      </div>
    </div>
  );
};

export default Register;
