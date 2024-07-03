// src/features/auth/Login.jsx
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { loginUser } from './authSlice'; // Correct import path
import './Auth.css'; // Import your CSS file for styling

const Login = () => {
  const dispatch = useDispatch();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    if (!username || !password) {
      alert('Username and password are required.');
      return;
    }

    if (password.length !== 8) {
      alert('Password must be exactly 8 characters long.');
      return;
    }

    dispatch(loginUser({ username, password }));
    // Optionally, clear input fields after dispatching login action
    setUsername('');
    setPassword('');
  };

  return (
    <div className="auth-container">
      <div className="auth-form-container">
        <h2>Login</h2>
        <form>
          <label>Username:</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <label>Password (8 characters):</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type="button" onClick={handleLogin}>Login</button>
        </form>
      </div>
    </div>
  );
};

export default Login;
