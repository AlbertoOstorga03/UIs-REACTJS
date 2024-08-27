import React, { useState } from 'react'
import './App.css'
import Register from './Register'
import MobileMenu from './MobileMenu';
import AgentLibrary from './AgentLibrary';
import CreateAgent from './CreateAgent';
import Chat from './Chat';
import ContactUs from './ContactUs';
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom'
import axios from 'axios';

function App() {
  return (
    <Router>
      <div className="styles.wrapper">
        <Routes>
          {/* Home */}
          <Route path='/' element={<Home/>} />
          {/* Register */}
          <Route path='/register' element={<Register/>} />
          {/* Mobile Menu */}
          <Route path='/mobile-menu' element={<MobileMenu/>} />
          {/* Agent Library */}
          <Route path='/agent-library' element={<AgentLibrary/>} />
          {/* Create Agent */}
          <Route path='/create-agent' element={<CreateAgent/>} />
          {/* Chat */}	
          <Route path='/chat' element={<Chat/>} />
          {/* Contact Us */}
          <Route path='/contact-us' element={<ContactUs/>} />
        </Routes>
      </div>
    </Router> 
  );
};

function Home() {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const API_URL = "https://agent-api.anika-ai.tech";

  const handleLogin = async () => {
    const response = await fetch("https://agent-api.anika-ai.tech/login", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ username, password }),
    });

    const data = await response.json();
    if (response.ok) {
      navigate('/agent-library');
    } else {
      data.message = 'Invalid username or password, try again.';
      alert(data.message);
    }
  };

  return (
    <div className="container">
      <div className="logo fade-in-down">
        <img src="logo.png" alt="Logo" className="logo-image" />
      </div>
      <h1 className='title fade-in-up'>Universal AI Registry</h1>
      <p className="description fade-in-right">
        Welcome to the CTRL+V demo. A simple proof of concept showcasing the ability to assign a human-readable and traceable digital ID to an AI Agent.
      </p>

      <input 
        type="text" 
        placeholder="Username" 
        className="input-field fade-in"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <br />
      <input 
        type="password" 
        placeholder="Password" 
        className="input-field fade-in"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <br />
      <button className="login-button fade-in" onClick={handleLogin}>Login</button>
      <br />
      <button className="register fade-in-right" onClick={() => navigate('/register')}>Register to view</button>
      <br />
    </div>
  );
};

export default App;
