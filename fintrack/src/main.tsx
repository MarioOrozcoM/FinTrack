import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router' // 👈 Solo importamos el contenedor principal
import App from './App.tsx'
import './index.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <App /> {/* 👈 Renderizamos App directamente para que controle las rutas */}
    </BrowserRouter>
  </StrictMode>,
)