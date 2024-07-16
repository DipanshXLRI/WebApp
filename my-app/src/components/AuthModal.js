// AuthModal.js
import React, { useState } from 'react';
import SignupForm from './SignupForm';
import LoginForm from './LoginForm';
import './AuthModal.css'; // Import CSS file

function AuthModal({ onLogin }) {
  const [showSignup, setShowSignup] = useState(false);

  return (
    <div className="auth-modal">
      <div className="modal-content">
        <button onClick={() => setShowSignup(!showSignup)}>
          {showSignup ? 'Switch to Login' : 'Switch to Signup'}
        </button>
        {showSignup ? (
          <SignupForm onLogin={onLogin} />
        ) : (
          <LoginForm onLogin={onLogin} />
        )}
      </div>
    </div>
  );
}

export default AuthModal;