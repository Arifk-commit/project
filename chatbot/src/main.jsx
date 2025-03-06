import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Navbar from './components/navbar.jsx'
import  Header  from './components/header.jsx'
import Input from './components/Input.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Navbar />
    <Header />
    <Input />
    <App />
  </StrictMode>,
)
