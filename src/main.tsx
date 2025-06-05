import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import GithubButton from './githubButton.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <GithubButton />
    <App />
  </StrictMode>,
)
