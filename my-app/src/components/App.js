// src/components/App.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import AuthModal from './AuthModal';
import Profile from './Profile';

function App() {
  const [user, setUser] = useState(null);

  const handleLogin = (userData) => {
    setUser(userData);
  };

  const handleLogout = () => {
    setUser(null);
  };

  return (
    <Router>
      <div className="App">
        {user ? (
          <Routes>
            <Route path="/profile" element={<Profile user={user} onLogout={handleLogout} />} />
            <Route path="*" element={<Navigate to="/profile" />} />
          </Routes>
        ) : (
          <AuthModal onLogin={handleLogin} />
        )}
      </div>
    </Router>
  );
}

export default App;