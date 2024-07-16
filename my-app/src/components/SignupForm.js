// SignupForm.js
import React, { useState } from 'react';
import axios from 'axios';
import './SignupForm.css'; // Import CSS file

function SignupForm({ onLogin }) {
  const [userDetails, setUserDetails] = useState({ username: '', email: '', password: '' });
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setUserDetails({ ...userDetails, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('http://localhost:5000/api/signup', userDetails)
      .then(response => {
        onLogin(response.data);
      })
      .catch(error => {
        if (error.response && error.response.data && error.response.data.message) {
          setError(error.response.data.message);
        } else {
          setError('An error occurred. Please try again later.');
        }
      });
  };

  return (
    <form className="signup-form" onSubmit={handleSubmit}>
      <input type="text" name="username" placeholder="Username" onChange={handleChange} />
      <input type="email" name="email" placeholder="Email" onChange={handleChange} />
      <input type="firstname" name="firstname" placeholder="FirstName" onChange={handleChange} />
      <input type="lastname" name="lastname" placeholder="LastName" onChange={handleChange} />
      <input type="password" name="password" placeholder="Password" onChange={handleChange} />
      <button type="submit">Signup</button>
      {error && <p className="error-message">{error}</p>}
    </form>
  );
}

export default SignupForm;