import React, { useEffect } from 'react'
import './App.css'
import Register from './Register'
import MobileMenu from './MobileMenu';
import AgentLibrary from './AgentLibrary';
import CreateAgent from './CreateAgent';
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom'

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
        </Routes>
      </div>
    </Router> 
  );
};


function Home() {
  const navigate = useNavigate()

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
        />
        <br />
        <input 
          type="text" 
          placeholder="Password" 
          className="input-field fade-in"
        />
        <br />
        <button className="login-button fade-in">Login</button>
        <br />
        <button className="register fade-in-right" onClick={() => navigate('/register')}>Register to view</button>
        <br />
      </div>
  );
};

export default App
