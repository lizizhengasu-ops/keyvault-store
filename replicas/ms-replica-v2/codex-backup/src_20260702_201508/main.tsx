import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App'
import './index.css'

// Body style - triple protection with HTML + CSS + JS
document.body.style.background = '#FFFFFF'
document.body.style.color = '#000000'
document.body.style.margin = '0'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>
)