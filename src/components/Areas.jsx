import React, { useRef } from "react";
import { Link } from "react-router-dom"; // Importante para la navegación

const areas = [
  { title: "Tech", icon: "💻" },
  { title: "Data & Analytics", icon: "📊" },
  { title: "People", icon: "🤝" },
  { title: "Planeamiento", icon: "📅" },
  { title: "Experiencia", icon: "✨" },
  { title: "Pagos", icon: "💳" },
  { title: "Commerce", icon: "🛍️" },
  { title: "Marketing", icon: "📢" }
];

export default function Areas() {
  const scrollRef = useRef(null);

  // Función para desplazar el carrusel
  const scroll = (direction) => {
    if (scrollRef.current) {
      const { clientWidth } = scrollRef.current;
      const offset = direction === "left" ? -clientWidth : clientWidth;
      scrollRef.current.scrollBy({ left: offset, behavior: "smooth" });
    }
  };

  // Función para crear una URL limpia (ej: "Data & Analytics" -> "data-analytics")
  const createSlug = (text) => {
    return text
      .toLowerCase()
      .replace(/&/g, 'and') // Cambia & por 'and'
      .replace(/[\s\W-]+/g, '-') // Cambia espacios y caracteres raros por guiones
      .replace(/^-+|-+$/g, ''); // Limpia guiones al inicio o final
  };

  return (
    <section className="px-6 md:px-16 py-12 bg-white">
      <div className="max-w-7xl mx-auto">
        
        <h2 className="text-3xl font-bold text-[#1a1a1a] mb-10">
          Conoce las áreas
        </h2>

        <div className="relative group">
          
          {/* Flecha Izquierda */}
          <button 
            onClick={() => scroll("left")}
            className="absolute left-[-20px] top-1/2 -translate-y-1/2 z-10 w-12 h-12 flex items-center justify-center rounded-full bg-white shadow-xl border border-gray-100 hover:bg-gray-50 transition-all opacity-0 group-hover:opacity-100 hidden md:flex"
            aria-label="Anterior"
          >
            <span className="text-2xl text-gray-600">‹</span>
          </button>

          {/* Contenedor Deslizable */}
          <div 
            ref={scrollRef}
            className="flex gap-6 overflow-x-auto snap-x snap-mandatory no-scrollbar scroll-smooth"
            style={{ 
              scrollbarWidth: 'none', 
              msOverflowStyle: 'none'
            }}
          >
            {areas.map((area, i) => (
              <div 
                key={i}
                className="min-w-[280px] md:min-w-[380px] snap-start bg-white p-8 rounded-3xl border border-gray-100 shadow-sm hover:shadow-md transition-all flex flex-col items-start"
              >
                <div className="text-5xl mb-6">{area.icon}</div>
                
                <h3 className="text-2xl font-bold text-gray-900 mb-6">
                  {area.title}
                </h3>
                
                {/* El Link dirige a la página de detalle usando el slug del título */}
                <Link 
                  to={`/areas/${createSlug(area.title)}`}
                  className="bg-[#b347ff] hover:bg-[#a236ee] text-white font-bold px-8 py-3 rounded-xl transition-colors inline-block mt-auto"
                >
                  Ver roles
                </Link>
              </div>
            ))}
          </div>

          {/* Flecha Derecha */}
          <button 
            onClick={() => scroll("right")}
            className="absolute right-[-20px] top-1/2 -translate-y-1/2 z-10 w-12 h-12 flex items-center justify-center rounded-full bg-white shadow-xl border border-gray-100 hover:bg-gray-50 transition-all opacity-0 group-hover:opacity-100 hidden md:flex"
            aria-label="Siguiente"
          >
            <span className="text-2xl text-gray-600">›</span>
          </button>

        </div>
      </div>

      {/* Estilo para ocultar la barra de scroll visualmente */}
      <style dangerouslySetInnerHTML={{ __html: `
        .no-scrollbar::-webkit-scrollbar { display: none; }
      `}} />
    </section>
  );
}