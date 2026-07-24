import { Routes, Route } from 'react-router' // Logica de rutas
//Importar mis rutas
import Home from '@/pages/home/Home';
import Login from '@/pages/login/Login';
import Register from '@/pages/register/Register';


//Componentes de las rutas
const NotFound = () => <div className='text-center mt-40 text-2xl'>Error 404 Página No Encontrada</div>

function App() {
  return (
    <Routes>
      {/* Ruta principal (raíz) */}
      <Route path='/' element={<Home />}/>
      {/* Definición de las rutas principales */}
      <Route path='/login' element={<Login />}/>
      <Route path='/register' element={<Register />} />

      
      {/* Ruta comodín para capturar cualquier URL inválida */}
      <Route path='*' element={<NotFound />} />
    </Routes>
  )
}

export default App
