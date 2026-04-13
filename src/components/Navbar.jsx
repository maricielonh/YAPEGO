import React from "react";

function Navbar() {
  return (
   <nav className="fixed top-0 left-0 w-full z-50 flex justify-between items-center px-8 h-16 bg-[#742284]/80 backdrop-blur-md text-white border-b border-white/10 font-sans">
      
      {/* SECCIÓN LOGO */}
      <div className="relative w-32 h-full flex items-center">
        {/* 2. EXPLICACIÓN DEL CAMBIO:
          - 'absolute': Saca al logo del flujo, así no estira la barra.
          - 'top-1': Lo posiciona un poco desde arriba.
          - 'h-24': Aquí puedes poner el tamaño que quieras (h-24, h-32, etc.) y la barra NO crecerá.
        */}
        <img 
          src="/logo.png" 
          alt="Yape Logo" 
          className="absolute -top-5 left-0 h-24 w-auto object-contain drop-shadow-lg" 
        />
      </div>

      <ul className="hidden md:flex gap-10">
        <li>Inicio</li>
        <li>Empleos</li>
        <li>Mi perfil</li>
        <li>✉</li>
        <li>Ayuda</li>
      </ul>

      <button className="bg-purple-900 px-5 py-2 rounded-lg">
        Iniciar sesión
      </button>

    </nav>
  );
};

export default Navbar;