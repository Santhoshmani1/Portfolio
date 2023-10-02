import React from 'react'
import ReactDOM from 'react-dom/client'
import { PopupProvider } from 'react-popup-manager/dist/src/PopupProvider.js'
import App from './App.jsx'
import './css/index.css'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <PopupProvider>
    <App />
    </PopupProvider>
    
  </React.StrictMode>,
)
