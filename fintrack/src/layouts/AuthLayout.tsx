//Proporcionar la estructura visual común para todas las páginas públicas de autenticación.
import { Outlet } from 'react-router';

export const AuthLayout = () => {
  return (
    //Contenedor principal
    <div className="flex min-h-screen flex-col bg-slate-50 text-slate-800 antialiased">
      {/* Espacio para Logo */}
      <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/80 backdrop-blur-md">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            {/* Marcador de posición para el Logo */}
            <div className="flex flex-shrink-0 items-center rounded-lg bg-slate-100 px-3 py-1.5 text-sm font-semibold tracking-wide text-slate-600">
              ⚡ Logo & Diseño
            </div>

            {/* Espacio para futura navegación */}
            <nav className="hidden space-x-4 md:flex">
              <span className="text-sm font-medium text-slate-400">
                Menú pendiente
              </span>
            </nav>
          </div>
        </div>
      </header>

      {/* Contenedor principal */}
      <main className="mx-auto w-full max-w-7xl flex-1 px-4 py-8 sm:px-6 lg:px-8">
        {/* Contenedor visual para el contenido dinámico */}
        <div className="rounded-xl border border-dashed border-slate-300 bg-white p-6 shadow-sm">
          {/* Aquí se inyectan las páginas hijas */}
          <Outlet />
        </div>
      </main>

    </div>
  );
};
