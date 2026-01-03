import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Login from './components/login/Login'
import Home from './components/home/Home'

createRoot(document.getElementById('root')).render(
  <StrictMode>
 
    {/* <Login/> */}
    <Home/>
  </StrictMode>,
)
