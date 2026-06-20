import React from 'react';

export default function Navbar() {
  return (
    <nav className="bg-gray-900 border-b-2 border-green-500 px-6 py-4 sticky top-0 z-50 shadow-xl shadow-green-900/10">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        
        {/* Identificador de Marca Modificado (Visualmente impactante) */}
        <div className="flex items-center space-x-3">
          <div className="h-10 w-10 rounded-full bg-green-500 flex items-center justify-center text-xl shadow-[0_0_15px_rgba(34,197,94,0.5)]">
            🚀
          </div>
          <span className="text-xl font-black uppercase tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-600">
            Innovatech Live
          </span>
        </div>

        {/* Indicadores de Infraestructura y Pipeline */}
        <div className="flex flex-wrap items-center justify-center gap-4">
          
          {/* Nuevo formato de badge para el Orquestador */}
          <div className="bg-gray-800 border border-gray-700 px-4 py-1.5 rounded-md text-xs text-gray-300 font-mono flex items-center gap-2">
            <span>⚙️ Orquestador: <span className="text-orange-400 font-bold">ECS Fargate</span></span>
          </div>

          {/* Badge parpadeante súper evidente */}
          <div className="flex items-center space-x-2 bg-green-500/10 border border-green-500/40 px-4 py-1.5 rounded-full shadow-[0_0_10px_rgba(34,197,94,0.2)]">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500"></span>
            </span>
            <span className="text-[11px] font-bold text-green-400 uppercase tracking-widest">
              Deploy v3.0 Exitoso
            </span>
          </div>

        </div>

      </div>
    </nav>
  );
}