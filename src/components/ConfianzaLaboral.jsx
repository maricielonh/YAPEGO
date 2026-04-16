import React from 'react';
// Usamos iconos estándar de Lucide que NO darán error
import { ShieldCheck, AlertTriangle, CheckCircle, Flag, Lock, Zap, Users, Building2, ExternalLink } from 'lucide-react';

const ConfianzaLaboral = () => {
  // Datos para el Checklist con iconos propios
  const checklistItems = [
    { text: "RUC de empresa validado", icon: <Building2 size={16} /> },
    { text: "Contacto de reclutador real", icon: <Users size={16} /> },
    { text: "Oferta sin cobros ocultos", icon: <Zap size={16} /> },
    { text: "Sin solicitud de claves", icon: <Lock size={16} /> }
  ];

  return (
    <section className="py-24 px-6 bg-white relative overflow-hidden font-sans">
      {/* Fondo Decorativo Sutil (Estilo Moderno) */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
        <svg width="100%" height="100%"><defs><pattern id="dotted-pattern" width="32" height="32" patternUnits="userSpaceOnUse"><circle cx="2" cy="2" r="2" fill="#7422c4"/></pattern></defs><rect width="100%" height="100%" fill="url(#dotted-pattern)"/></svg>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Encabezado con Tipografía Audaz */}
        <div className="text-center mb-20 space-y-3">
          <span className="text-[#7422c4] font-semibold text-sm uppercase tracking-[0.2em]">Seguridad ante todo</span>
          <h2 className="text-5xl md:text-6xl font-extrabold text-gray-950 tracking-tighter leading-tight">
            Tu Futuro Profesional, <span className="text-[#7422c4]">Protegido</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto font-light leading-relaxed pt-2">
            En Yape Go construimos un ecosistema de confianza. Aquí te enseñamos a identificar oportunidades reales y seguras.
          </p>
        </div>

        {/* Grid Principal Rediseñado */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Bloque Izquierdo: Verificación y Alertas (Glassmorphism) */}
          <div className="lg:col-span-8 space-y-10">
            
            {/* 1. Tarjeta de Verificación Premium */}
            <div className="bg-white p-10 rounded-[2.5rem] shadow-[0_15px_60px_-15px_rgba(116,34,196,0.08)] border border-gray-100 flex flex-col md:flex-row gap-10 items-center transform transition-all hover:scale-[1.01]">
              <div className="bg-emerald-50 p-7 rounded-3xl text-emerald-600 border border-emerald-100 shadow-inner">
                <ShieldCheck size={56} strokeWidth={1.5} />
              </div>
              <div className="space-y-3 text-center md:text-left flex-1">
                <div className="flex items-center gap-3 justify-center md:justify-start">
                  <h3 className="text-2xl font-bold text-gray-950">✅ Empresa 100% Verificada</h3>
                </div>
                <p className="text-sm text-gray-600 leading-relaxed font-light">
                  Validamos el **RUC y el contacto real** de cada reclutador. Busca el sello verde para postular con total tranquilidad.
                </p>
                <div className="pt-3 border-t border-gray-100 flex flex-col sm:flex-row gap-4 items-center justify-center md:justify-start">
                  <span className="text-xs text-emerald-700 bg-emerald-50 px-3 py-1 rounded-full font-medium">Confianza Inmediata</span>
                  <button className="text-[#7422c4] text-xs font-semibold hover:text-[#8a33e0] flex items-center gap-1.5 transition-colors group">
                    <Flag size={14} className="group-hover:animate-pulse" /> Reportar oferta sospechosa
                  </button>
                </div>
              </div>
            </div>

            {/* 2. Tarjeta de Alertas con Diseño de Impacto */}
            <div className="bg-gray-950 p-10 rounded-[2.5rem] border border-gray-800 shadow-2xl relative overflow-hidden group">
              {/* Icono de fondo decorativo */}
              <AlertTriangle className="absolute -right-6 -bottom-6 text-gray-800 opacity-30 group-hover:scale-110 transition-transform duration-500" size={160} strokeWidth={1} />
              
              <div className="relative z-10 space-y-6">
                <h4 className="text-red-400 font-extrabold text-xl flex items-center gap-3">
                   <AlertTriangle size={24} /> ¡Atención a las Señales de Alerta!
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div className="bg-white/5 p-5 rounded-2xl border border-white/10 text-sm text-red-100 font-medium flex items-center gap-3 hover:bg-white/10 transition-colors">
                    ❌ "Paga por tu examen o capacitación"
                  </div>
                  <div className="bg-white/5 p-5 rounded-2xl border border-white/10 text-sm text-red-100 font-medium flex items-center gap-3 hover:bg-white/10 transition-colors">
                    ❌ "Gana mucho dinero sin experiencia"
                  </div>
                </div>
                <p className="text-xs text-gray-400 italic font-light pt-2">Recuerda: Si te piden dinero para trabajar, es una estafa. ¡No caigas!</p>
              </div>
            </div>
          </div>

          {/* Bloque Derecho: Checklist Unique (Estilo Glassmorphism) */}
          <div className="lg:col-span-4 bg-[#7422c4]/5 backdrop-blur-sm p-10 rounded-[2.5rem] border border-[#7422c4]/10 shadow-[0_10px_40px_rgba(116,34,196,0.05)] space-y-10 relative overflow-hidden">
             {/* Círculo decorativo de fondo */}
             <div className="absolute -top-10 -right-10 w-40 h-40 bg-[#7422c4]/10 rounded-full blur-3xl"></div>
             
             <div className="relative z-10 space-y-3 text-center">
                <CheckCircle size={40} className="text-[#7422c4] mx-auto" strokeWidth={1.5} />
                <h4 className="font-extrabold text-2xl text-gray-950 tracking-tight">Checklist de Seguridad</h4>
                <p className="text-xs text-gray-500 font-light">Verifica estos puntos antes de postular</p>
             </div>

             <div className="space-y-6 relative z-10">
              {checklistItems.map((item, i) => (
                <div key={i} className="flex items-center gap-4 group">
                  <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center text-[#7422c4] shadow-sm border border-gray-100 group-hover:scale-110 group-hover:bg-[#7422c4] group-hover:text-white transition-all duration-300">
                    {item.icon}
                  </div>
                  <span className="text-sm font-medium text-gray-800 group-hover:text-[#7422c4] transition-colors">{item.text}</span>
                </div>
              ))}
            </div>
            
            <div className="pt-8 border-t border-[#7422c4]/10 space-y-4 relative z-10">
              <div className="flex items-center gap-3 bg-white p-4 rounded-xl shadow-inner border border-gray-100 text-gray-600 hover:text-gray-950 transition-colors">
                <Lock size={20} className="text-[#7422c4]" />
                <p className="text-[11px] leading-relaxed font-light">Nunca compartas tus claves o fotos de documentos sensibles.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Sección de Comunidad y Testimonios Modernos */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8 pt-12 border-t border-gray-100">
          <a href="#" className="bg-white border border-gray-100 p-8 rounded-3xl flex items-center gap-6 hover:border-[#7422c4]/20 hover:shadow-lg transition-all group">
            <div className="bg-purple-50 p-5 rounded-2xl text-[#7422c4] border border-purple-100">
              <Building2 size={36} strokeWidth={1.5}/>
            </div>
            <div className="flex-1">
              <h5 className="font-bold text-lg text-gray-950">Empresas TOP</h5>
              <p className="text-xs text-gray-500 font-light">Marcas que contratan constantemente con nosotros.</p>
            </div>
            <ExternalLink size={16} className="text-gray-300 group-hover:text-[#7422c4] transition-colors" />
          </a>
          <a href="#" className="bg-white border border-gray-100 p-8 rounded-3xl flex items-center gap-6 hover:border-[#7422c4]/20 hover:shadow-lg transition-all group">
            <div className="bg-blue-50 p-5 rounded-2xl text-blue-500 border border-blue-100">
              <Users size={36} strokeWidth={1.5} />
            </div>
            <div className="flex-1">
              <h5 className="font-bold text-lg text-gray-950">Voz de la Comunidad</h5>
              <p className="text-xs text-gray-500 font-light">Lee experiencias reales de otros yapeadores.</p>
            </div>
            <ExternalLink size={16} className="text-gray-300 group-hover:text-[#7422c4] transition-colors" />
          </a>
        </div>

      </div>
    </section>
  );
};

export default ConfianzaLaboral;