import { useState } from 'react'
import './AgentLibrary.css'

function AgentLibrary() {
  return (
    <>
      <header className='header'>
            <div className="header-container">
            <div className="header-left">
                <img src="logo.png" alt="Logo" className="logo-image" />
            </div>
            <div>
              <p className='header-middle'>
                CTRL+V Demo
              </p>
            </div>
            <div className="header-right">
                <button className="header-button">☰</button>
            </div>
            </div>
        </header>
        
    <div className="container">
    <h1 className='title fade-in-up'>Agent Library</h1>
      <p className="description fade-in-right">
        This step allows you to create, name, and apply a human-readable, traceable digital ID to an AI Agent.
      </p>
    <hr/>
      <div className="button-container">
        <button className="action-button">Total Agents: 3</button>
        <button className="action-button">Create Agent</button>
        <button className="action-button">Agent Explorer</button>
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
            <td><button className="action-button-chat">Chat</button></td>
          </tr>
          <tr>
            <td>Physician</td>
            <td>GROK</td>
            <td>Healthcare</td>
            <td>View</td>
            <td>View</td>
            <td><button className="action-button-chat">Chat</button></td>
          </tr>
          <tr>
            <td>Physics Professor</td>
            <td>Cerebras</td>
            <td>Higher Education</td>
            <td>View</td>
            <td>View</td>
            <td><button className="action-button-chat">Chat</button></td>
          </tr>
        </tbody>
      </table>

    <hr/>
      <p className="copyright">
          © 2024 ⎈+V
      </p>
      <p className='easteregg'>
            We only put this here to see if anyone would read it. If you are reading it, contact us to let us know how clever and detail oriented you are.
      </p>
    </div>
    </>
  )
}

export default AgentLibrary
