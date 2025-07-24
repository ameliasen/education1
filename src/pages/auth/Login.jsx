import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

 const handleLogin = async (e) => {
  e.preventDefault();

  try {
    const res = await axios.post("http://localhost:4000/login", {
      email: email,       // Use state value
      password: password  // Use state value
    });
    console.log("Login Success:", res.data);
  } catch (err) {
    console.error("Login failed:", err);
  }
};


  const styles = {
    container: {
      height: '100vh',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    },
    formContainer: {
      backgroundColor: 'rgba(255, 255, 255, 0.9)',
      padding: '40px',
      borderRadius: '15px',
      boxShadow: '0 8px 16px rgba(0, 0, 0, 0.3)',
      width: '400px',
      height: '500px',
      textAlign: 'center',
    },
    heading: {
      marginBottom: '25px',
      fontSize: '28px',
      color: '#333',
    },
    input: {
      width: '100%',
      padding: '12px',
      margin: '10px 0',
      borderRadius: '8px',
      border: '1px solid #ccc',
      fontSize: '16px',
    },
    button: {
      marginTop: '20px',
      width: '100%',
      padding: '12px',
      backgroundColor: '#300557ff',
      color: '#fff',
      border: 'none',
      borderRadius: '8px',
      fontSize: '16px',
      cursor: 'pointer',
    },
    logo: {
      width: '80px',
      marginBottom: '15px',
    },
  };

  return (
    <div style={styles.container}>
      <div style={styles.formContainer}>
        <img
          src="https://cdn-icons-png.flaticon.com/512/3135/3135768.png"
          alt="Login"
          style={styles.logo}
        />
        <h2 style={styles.heading}>E-Learning Login</h2>
        <form onSubmit={handleLogin}>
          <input
            type="email"
            placeholder="Email"
            required
            style={styles.input}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            required
            style={styles.input}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type="submit" style={styles.button}>Login</button>
          <p>
            Don't have an account?{" "}
            <Link to="/register" className="singup-a">Sign Up</Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
