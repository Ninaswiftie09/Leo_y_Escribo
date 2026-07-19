import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './styles/global.css'
import './styles/lesson-themes.css'
import './styles/typography.css'
import './styles/reading.css'
import './styles/syllables.css'
import './styles/themes.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
