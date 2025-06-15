import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import GithubButton from './githubButton.tsx'
import Credits from './credits.tsx'
import MouseIcons from './mouseIcons.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <GithubButton />
    <App />
    <MouseIcons />
    <Credits />
  </StrictMode>,
)
