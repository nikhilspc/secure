import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './site.css'
import App from './Site.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
