import React from "react";
export default function Hero() {
  return (
    /* 1. El contenedor principal NO lleva clipPath */
    <section className="relative w-full min-h-[550px] flex items-center bg-white overflow-visible">
      
      {/* 2. CAPA DE FONDO: Aquí es donde aplicamos el recorte circular */}
      <div 
        className="absolute inset-0 z-0 overflow-hidden"
        style={{ clipPath: "ellipse(80% 90% at 50% -5%)" }}
      >
        <img
          src="/fondo-hero.png" 
          alt="Hero Background"
          className="w-full h-full object-cover"
        />
        {/* Un pequeño overlay para ayudar a la lectura si es necesario */}
        <div className="absolute inset-0 bg-purple-900/10"></div>
      </div>

      {/* 3. CAPA DE CONTENIDO: Al estar fuera del div anterior, no se corta */}
      <div className="relative z-10 px-10 md:px-20 w-full max-w-7xl mx-auto">
        <div className="max-w-xl text-white">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight drop-shadow-lg">
            Empleabilidad e <br /> Inclusión Yape
          </h1>

          <p className="mb-8 text-lg md:text-xl font-medium drop-shadow-md">
            Empoderando a la Juventud Peruana mediante oportunidades laborales.
          </p>

          {/* botooon flotante*/}
          <button className="bg-[#00ffa3] text-black px-10 py-4 rounded-2xl font-bold text-lg shadow-2xl hover:scale-105 transition-all active:scale-95 border-none cursor-pointer">
            Postular
          </button>
        </div>
      </div>
      
    </section>
  );
}