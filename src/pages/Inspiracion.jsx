import { VideoTestimonio } from "../components/Testimonios";
import React from "react";
import { motion } from "framer-motion";
import { Sparkles, PlayCircle } from 'lucide-react';

export default function Inspiracion() {
  const videos = [
    {
      src: "/src/assets/videos/testimonio1.mp4",
      nombre: "María - Emprendedora",
      foto: "https://randomuser.me/api/portraits/women/44.jpg",
    },
    {
      src: "/src/assets/videos/testimonio1.mp4",
      nombre: "Luis - Freelance",
      foto: "https://randomuser.me/api/portraits/men/32.jpg",
    },
  ];

  return (
    // SECCIÓN CORREGIDA: pt-32 para dar espacio al Navbar fijo
    <div className="min-h-screen bg-[#F9FAFB] px-6 md:px-20 pt-32 pb-20 font-sans">

      {/* HERO SECTION */}
      <section className="text-center mb-16">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="inline-flex items-center gap-2 bg-purple-100 text-[#7422c4] px-4 py-2 rounded-full text-sm font-bold mb-6"
        >
          <Sparkles size={16} /> <span>Casos de éxito</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-6xl font-black text-gray-900 tracking-tight"
        >
          Inspírate con <span className="text-[#7422c4]">Yape Go</span> 💜
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mt-6 text-gray-500 text-lg max-w-2xl mx-auto font-light leading-relaxed"
        >
          Descubre cómo jóvenes como tú transformaron su futuro trabajando con nosotros. 
          En Yape creemos en el talento, la innovación y las ganas de crecer. 🚀
        </motion.p>
      </section>

      {/* BLOQUE MOTIVACIONAL (BANNER) */}
      <section className="max-w-6xl mx-auto mb-20">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="relative bg-[#7422c4] text-white rounded-[3rem] p-10 md:p-16 shadow-2xl overflow-hidden text-center"
        >
          {/* Círculo decorativo de fondo */}
          <div className="absolute -top-24 -right-24 w-80 h-80 bg-white/10 rounded-full blur-3xl"></div>
          
          <h2 className="text-3xl md:text-4xl font-black mb-4">
            💼 Trabaja con nosotros
          </h2>
          <p className="mt-4 text-purple-100 text-lg max-w-3xl mx-auto font-light leading-relaxed">
            Sé parte de un equipo que está cambiando la forma en que millones de personas
            manejan su dinero. Tu talento puede marcar la diferencia en la vida de muchos peruanos.
          </p>
          
          <div className="mt-8 flex justify-center gap-4">
            <div className="bg-white/20 backdrop-blur-md px-6 py-2 rounded-full text-sm font-bold border border-white/10">
              #TalentoDigital
            </div>
            <div className="bg-white/20 backdrop-blur-md px-6 py-2 rounded-full text-sm font-bold border border-white/10">
              #Innovación
            </div>
          </div>
        </motion.div>
      </section>

      {/* SECCIÓN DE VIDEOS */}
      <section className="max-w-6xl mx-auto">
        <div className="flex items-center gap-3 mb-10 ml-4">
          <div className="p-3 bg-purple-50 text-[#7422c4] rounded-2xl">
            <PlayCircle size={24} />
          </div>
          <h2 className="text-3xl font-black text-gray-900">
            Historias reales
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-10">
          {videos.map((video, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2 }}
              className="bg-white p-4 rounded-[2.5rem] shadow-[0_20px_50px_rgba(0,0,0,0.03)] border border-gray-100 hover:shadow-[0_30px_60px_rgba(116,34,196,0.1)] transition-all group"
            >
              <VideoTestimonio
                src={video.src}
                nombre={video.nombre}
                foto={video.foto}
              />
            </motion.div>
          ))}
        </div>
      </section>

    </div>
  );
}