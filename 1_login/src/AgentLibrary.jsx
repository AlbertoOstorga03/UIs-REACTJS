import { useState } from 'react'
import './AgentLibrary.css'
import { useNavigate } from 'react-router-dom';

function AgentLibrary() {

  const navigate = useNavigate();
  
  const goToMenu = ()  => {
    navigate('/mobile-menu'); // Navega a la ruta '/mobile-menu'
  }

  const goToChat = ()  => {
    navigate('/chat'); // Navega a la ruta '/chat'
  }
  
  return (
    <>
      <header className='header-3'>
            <div className="header-container-3">
            <div className="header-left-3">
                <img src="logo.png" alt="Logo" className="logo-image" />
            </div>
            <div>
              <p className='header-middle-3'>
                CTRL+V Demo
              </p>
            </div>
            <div className="header-right-3">
                <button className="header-button" onClick={goToMenu}>☰</button>
            </div>
            </div>
        </header>
        
    <div className="container-3">
    <h1 className='title-3 fade-in-up'>Agent Library</h1>
      <p className="description-3 fade-in-right">
        This step allows you to create, name, and apply a human-readable, traceable digital ID to an AI Agent.
      </p>
    <hr/>
      <div className="button-container-3">
        <button className="action-button-3">Total Agents: 3</button>
        <button className="action-button-3">Create Agent</button>
        <button className="action-button-3">Agent Explorer</button>
      </div>

      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Model</th>
            <th>Service</th>
            <th>DID</th>
            <th>Secure ID</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Finance Agent</td>
            <td>ChatGPT 3.5</td>
            <td>Personal Finance</td>
            <td>View</td>
            <td>View</td>
            <td><button className="action-button-chat-3" onClick={goToChat}>Chat</button></td>
          </tr>
          <tr>
            <td>Physician</td>
            <td>GROK</td>
            <td>Healthcare</td>
            <td>View</td>
            <td>View</td>
            <td><button className="action-button-chat-3" onClick={goToChat}>Chat</button></td>
          </tr>
          <tr>
            <td>Physics Professor</td>
            <td>Cerebras</td>
            <td>Higher Education</td>
            <td>View</td>
            <td>View</td>
            <td><button className="action-button-chat-3" onClick={goToChat}>Chat</button></td>
          </tr>
        </tbody>
      </table>

    <hr/>
      <p className="copyright-3">
          © 2024 ⎈+V
      </p>
      <p className='easteregg-3'>
            We only put this here to see if anyone would read it. If you are reading it, contact us to let us know how clever and detail oriented you are.
      </p>
    </div>
    </>
  )
}

export default AgentLibrary
