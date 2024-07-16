// Profile.js
import React from 'react';
import './Profile.css'; // Import CSS file

function Profile({ user, onLogout }) {
  return (
    <div className="profile-container">
      <h1>User Profile</h1>
      <p>Username: {user.username}</p>
      <p>Email: {user.email}</p>
      <p>FirstName: {user.firstname}</p>
      <p>LastName: {user.lastname}</p>
      <button onClick={onLogout}>Logout</button>
    </div>
  );
}

export default Profile;