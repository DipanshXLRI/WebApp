import React, { useState } from 'react';
import axios from 'axios';
import './LoginForm.css'; // Import CSS file

function LoginForm({ onLogin }) {
  const [credentials, setCredentials] = useState({ username: '', password: '' });
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('http://localhost:5000/api/login', credentials)
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
    <form className="login-form" onSubmit={handleSubmit}>
      <input type="text" name="username" placeholder="Username" onChange={handleChange} />
      <input type="password" name="password" placeholder="Password" onChange={handleChange} />
      <button type="submit">Login</button>
      {error && <p className="error-message">{error}</p>}
    </form>
  );
}

export default LoginForm;