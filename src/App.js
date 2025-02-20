// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useNavigate } from 'react-router-dom';
import LandingPage from './components/LandingPage';
import WhatIsHandball from './components/WhatIsHandball';
import Tournaments from './components/Tournaments';
import WhereToPlay from './components/WhereToPlay';
import LoginSignUp from './components/LoginSignUp';
import './App.css';

function NavigationBar() {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem('user'));

  const handleLogout = () => {
    localStorage.removeItem('user');
    window.location.reload();
    navigate('/login');
  };

  return (
    <nav className="navbar">
      <Link to="/" className="navbar-brand">Everything Handball</Link>
      <div className="nav-links">
        <Link to="/what-is-handball" className="nav-link">What is Handball</Link>
        <Link to="/where-to-play" className="nav-link">Where to Play</Link>
        <Link to="/tournaments" className="nav-link">Tournaments</Link>
      </div>
      <div className="navbar-right">
        {user ? (
          <>
            <span className="username">Welcome, {user.username}</span>
            <button onClick={handleLogout} className="logout-btn">Logout</button>
          </>
        ) : (
          <Link to="/login" className="nav-link">Sign Up | Login</Link>
        )}
      </div>
    </nav>
  );
}

function App() {
  return (
    <Router>
      <div className="App">
        <NavigationBar />
        <Routes>
          <Route path="/login" element={<LoginSignUp />} />
          <Route path="/what-is-handball" element={<WhatIsHandball />} />
          <Route path="/where-to-play" element={<WhereToPlay />} />
          <Route path="/tournaments" element={<Tournaments />} />
          <Route path="/" element={<LandingPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
