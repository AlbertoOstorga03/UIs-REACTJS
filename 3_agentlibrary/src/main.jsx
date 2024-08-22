import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import AgentLibrary from './AgentLibrary.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AgentLibrary />
  </StrictMode>,
)
