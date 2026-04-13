import React, { useRef } from "react";

const areas = [
  { title: "Tecnología", icon: "💻" },
  { title: "Datos y Analítica", icon: "📊" },
  { title: "Marketing", icon: "📢" },
  { title: "Diseño UX/UI", icon: "🎨" },
  { title: "Producto", icon: "🚀" },
  { title: "Operaciones", icon: "⚙️" },
  { title: "Talento", icon: "🤝" },
  { title: "Negocios", icon: "💼" }
];

export default function Areas() {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    if (scrollRef.current) {
      const { clientWidth } = scrollRef.current;
      const offset = direction === "left" ? -clientWidth : clientWidth;
      scrollRef.current.scrollBy({ left: offset, behavior: "smooth" });
    }
  };

  return (
    <section className="px-6 md:px-16 py-12 bg-white">
      <div className="max-w-7xl mx-auto">
        
        <h2 className="text-3xl font-bold text-[#1a1a1a] mb-10">
          Conoce las áreas
        </h2>

        {/* Contenedor Relativo para las flechas */}
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
                className="min-w-[280px] md:min-w-[380px] snap-start bg-white p-8 rounded-3xl border border-gray-100 shadow-sm hover:shadow-md transition-all"
              >
                <div className="text-5xl mb-6">{area.icon}</div>
                
                <h3 className="text-2xl font-bold text-gray-900 mb-6">
                  {area.title}
                </h3>
                
                <button className="bg-[#b347ff] hover:bg-[#a236ee] text-white font-bold px-8 py-3 rounded-xl transition-colors">
                  Ver roles
                </button>
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

      <style dangerouslySetInnerHTML={{ __html: `
        .no-scrollbar::-webkit-scrollbar { display: none; }
      `}} />
    </section>
  );
}