import React from 'react';

//Interfaz
interface ButtonCustomProps {
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  //Espacio para futuros props
}

// Extendemos las propiedades nativas de un botón HTML usando la pista de TS
export type ButtonProps = ButtonCustomProps &
  React.ButtonHTMLAttributes<HTMLButtonElement>;

//Arquitectura de diseño con Tailwind CSS
const variantStyles = {
  primary: 'bg-indigo-600 text-white hover:bg-indigo-700 focus:ring-indigo-500',
  secondary: 'bg-slate-600 text-white hover:bg-slate-700 focus:ring-slate-500',
  outline:
    'border border-slate-300 bg-transparent text-slate-700 hover:bg-slate-50 focus:ring-indigo-500',
};

const sizeStyles = {
  sm: 'px-3 py-1.5 text-xs font-medium',
  md: 'px-4 py-2 text-sm font-medium',
  lg: 'px-5 py-2.5 text-base font-medium',
};

//Componente base reutilizable
export function Button({
  //Asignar valores por defecto con destructuring
  variant = 'primary',
  size = 'md',
  className = '', //Permite extender estilos desde el componente padre
  children, //Contenido dinámico
  ...props //Captura las propiedades nativas de <button>
}: ButtonProps) {
  const baseStyles =
    'inline-flex items-center justify-center rounded-lg font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:pointer-events-none disabled:opacity-50';
  const combinedClasses =
    `${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`.trim();

  return (
    <button
      className={combinedClasses}
      {...props} // Inyecta automáticamente type, disabled, onClick, aria-*, etc.
    >
      {children}
    </button>
  );
}


export default Button;