// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import LandingPage from './components/LandingPage';
import WhatIsHandball from './components/WhatIsHandball';
import Tournaments from './components/Tournaments';
import WhereToPlay from './components/WhereToPlay';
import LoginSignUp from './components/LoginSignUp';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/what-is-handball" element={<WhatIsHandball />} />
          <Route path="/tournaments" element={<Tournaments />} />
          <Route path="/where-to-play" element={<WhereToPlay />} />
          <Route path="/login-signup" element={<LoginSignUp />} />
        </Routes>
      </div>
    </Router>
  );
}

function NavBar() {
  return (
    <nav className="navbar">
      <Link to="/" className="nav-logo">Everything Handball</Link>
      <Link to="/what-is-handball">What is Handball</Link>
      <Link to="/where-to-play">Where to Play</Link>
      <Link to="/tournaments">Tournaments</Link>
      <Link to="/login-signup">Login/Sign Up</Link>
    </nav>
  );
}

export default App;
