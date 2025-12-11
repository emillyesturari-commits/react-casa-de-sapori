import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './index.css'
import App from './App.tsx'
import Footer from './components/Footer/Footer.tsx';
import Header from './components/Header/Header.tsx';


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
    <Footer/>
  </StrictMode>,
)
