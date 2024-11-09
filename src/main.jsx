import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { WrapperQuery } from './api/WrapperQuery'
import "./normalize.css"
import "./index.css"
import App from './App.jsx'
import Test from './Test.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <WrapperQuery>
        <App />
      </WrapperQuery>
    </BrowserRouter>

  </StrictMode>,
)
