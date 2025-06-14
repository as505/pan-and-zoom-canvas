import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import GithubButton from './githubButton.tsx'
import Credits from './credits.tsx'
import MouseClick from './mouseClick.tsx'
import MouseScroll from './mouseScroll.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <GithubButton />
    <App />
    <MouseClick />
    <Credits />
    <MouseScroll />
  </StrictMode>,
)
