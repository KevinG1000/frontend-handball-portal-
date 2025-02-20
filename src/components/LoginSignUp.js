// src/components/LoginSignUp.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import for redirection
import './LoginSignUp.css';

function LoginSignUp() {
  const [isLogin, setIsLogin] = useState(true);
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isSliding, setIsSliding] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');

    const endpoint = isLogin ? '/api/auth/login' : '/api/auth/signup';
    const payload = isLogin ? {
      username,
      password
    } : {
      username,
      email,
      password
    };

    try {
      const response = await fetch(`http://localhost:8080${endpoint}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload)
      });

      const data = await response.json();

      if (response.ok) {
        // Store user data in localStorage or state management solution
        localStorage.setItem('user', JSON.stringify(data));
        // Redirect to home page or dashboard
        navigate('/');
      } else {
        setError(data.message || 'Authentication failed');
      }
    } catch (error) {
      setError('Network error. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleToggle = () => {
    setIsSliding(true);
    setError(''); // Clear any errors when switching forms
    setTimeout(() => {
      setIsLogin(!isLogin);
      setIsSliding(false);
    }, 400);
  };

  return (
    <div className="login-page-wrapper">
      <div className="login-signup-container">
        <h2>{isLogin ? 'Login' : 'Sign Up'}</h2>
        {error && <div className="error-message">{error}</div>}
        <form onSubmit={handleSubmit} className={`login-signup-form ${isSliding ? 'sliding-out' : ''}`}>
          <div className="login-signup-label">
            <label>Username:</label>
            <input
              type="text"
              className="login-signup-input"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
              disabled={isLoading}
            />
          </div>
          {!isLogin && (
            <div className="login-signup-label">
              <label>Email:</label>
              <input
                type="email"
                className="login-signup-input"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                disabled={isLoading}
              />
            </div>
          )}
          <div className="login-signup-label">
            <label>Password:</label>
            <div style={{
              display: 'flex',
              gap: '10px',
              alignItems: 'flex-start'
            }}>
              <input
                type={showPassword ? "text" : "password"}
                className="login-signup-input"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                disabled={isLoading}
                style={{ flex: 1 }}
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                style={{
                  padding: '8px 15px',
                  border: '1px solid #ccc',
                  borderRadius: '4px',
                  background: 'white',
                  cursor: 'pointer',
                  fontSize: '14px',
                  width: '70px',
                  height: '40px',
                  marginTop: '13px',
                  alignSelf: 'flex-start'
                }}
              >
                {showPassword ? 'Hide' : 'Show'}
              </button>
            </div>
          </div>
          <button
            type="submit"
            className="login-signup-submit"
            disabled={isLoading}
          >
            {isLoading ? 'Please wait...' : (isLogin ? 'Login' : 'Sign Up')}
          </button>
        </form>
        <button
          onClick={handleToggle}
          className="login-signup-toggle"
          disabled={isLoading}
        >
          {isLogin ? 'Need an account? Sign Up' : 'Already have an account? Login'}
        </button>
      </div>
    </div>
  );
}

export default LoginSignUp;
