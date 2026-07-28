import { Routes, Route } from 'react-router'; // Logica de rutas
//Importar mis rutas
import Home from '@/pages/home/Home';
import Login from '@/pages/login/Login';
import Register from '@/pages/register/Register';
import { AuthLayout } from '@/layouts/AuthLayout';

//Componentes de las rutas
const NotFound = () => (
  <div className="text-center mt-40 text-2xl">
    Error 404 Página No Encontrada
  </div>
);

function App() {
  return (
    <Routes>
      {/* Ruta principal (raíz) */}
      <Route index element={<Home />} />
      {/* AuthLayout como la ruta padre */}
      <Route path="/" element={<AuthLayout />}>
        {/* Sus rutas hijas */}
        {/* Definición de las rutas principales */}
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
      </Route>

      {/* Ruta comodín para capturar cualquier URL inválida */}
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
