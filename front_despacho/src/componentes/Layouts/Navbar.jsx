<<<<<<< HEAD
import React from 'react';

export default function Navbar() {
  return (
    <nav className="bg-slate-900/90 border-b border-slate-800 backdrop-blur sticky top-0 z-50 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          
          {}
          <div className="flex items-center space-x-3">
            {/* Emblema con iniciales */}
            <div className="h-9 w-9 rounded-lg bg-gradient-to-br from-indigo-500 to-indigo-700 flex items-center justify-center font-bold text-white shadow-lg shadow-indigo-500/20 transform hover:scale-105 transition-transform">
              IN
            </div>
            {/* Texto de Marca con Degradado */}
            <span className="text-lg font-bold tracking-tight bg-gradient-to-r bg-clip-text text-transparent from-indigo-400 to-cyan-400">
              Innovatech Portal
            </span>
          </div>

          {}
          <div className="hidden md:flex space-x-6">
            <span className="text-sm font-medium text-slate-300 hover:text-indigo-400 cursor-pointer transition-colors">
              Módulo Despachos
            </span>
            <span className="text-sm font-medium text-slate-500 hover:text-indigo-400 cursor-pointer transition-colors">
              Módulo Ventas
            </span>
            <span className="text-sm font-medium text-slate-500 hover:text-indigo-400 cursor-pointer transition-colors">
              Reportería
            </span>
          </div>

          {}
          <div className="flex items-center space-x-2 bg-emerald-500/10 border border-emerald-500/30 px-3 py-1.5 rounded-full shadow-inner">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span className="text-[10px] sm:text-xs font-semibold text-emerald-400 uppercase tracking-wider">
              CI/CD: v2.0 Activo (Fargate)
            </span>
          </div>

        </div>
      </div>
    </nav>
  );
}
=======
function Navbar() {
  return (
    <nav className="rounded-xl w-[250px] min-h-[880px] bg-teal-600 text-white sticky top-0 p-4 m-4">
      {/* Logo o título */}
      <h2 className="text-xl font-bold mb-8">Despacho Dashboard</h2>

      {/* Menú de navegación */}
      <ul className="space-y-3">
        <li>
          <a
            href="#"
            className="block font-bold py-2 px-3 hover:bg-teal-700 rounded"
          >
            Usuarios
          </a>
        </li>
        <li>
          <a
            href="#"
            className="block font-bold py-2 px-3 hover:bg-teal-700 rounded"
          >
            Productos
          </a>
        </li>
        <li>
          <a
            href="#"
            className="block font-bold py-2 px-3 hover:bg-teal-700 rounded"
          >
            Configuración
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
>>>>>>> 1c7aede2932e9c45aad2c75fba6197ae925d0e06
