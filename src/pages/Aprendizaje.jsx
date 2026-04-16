import React from "react";
import Card from "../components/Card";
import { motion } from "framer-motion";
import { BookOpen, Wallet, PiggyBank, Smartphone, PlayCircle, CheckCircle2 } from 'lucide-react';

export default function Aprendizaje() {
  return (
    // SECCIÓN CORREGIDA: pt-32 para el espacio del Navbar y fondo refinado
    <div className="min-h-screen bg-[#F9FAFB] px-6 md:px-20 pt-32 pb-20 font-sans">

      {/* HEADER / HERO */}
      <div className="max-w-4xl mb-16">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="inline-flex items-center gap-2 bg-purple-100 text-[#7422c4] px-4 py-2 rounded-full text-sm font-bold mb-6"
        >
          <BookOpen size={16} /> <span>Educación Financiera</span>
        </motion.div>
        
        <motion.h1 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-6xl font-black text-gray-900 leading-tight tracking-tight"
        >
          Aprende con <span className="text-[#7422c4]">Yape</span>
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mt-6 text-gray-500 text-lg md:text-xl font-light max-w-2xl leading-relaxed"
        >
          No solo te ayudamos a conseguir trabajo, también te enseñamos a
          manejar tu dinero y tomar mejores decisiones para tu futuro. 🚀
        </motion.p>
      </div>

      {/* CARDS PRINCIPALES */}
      <div className="grid md:grid-cols-3 gap-8 mt-10">
        <motion.div whileHover={{ y: -10 }} transition={{ type: "spring", stiffness: 300 }}>
          <Card icon={<Wallet className="text-[#7422c4]" size={32} />} title="Gestión de dinero">
            Organiza tus ingresos, controla tus gastos y crea tu primer presupuesto de forma sencilla.
          </Card>
        </motion.div>

        <motion.div whileHover={{ y: -10 }} transition={{ type: "spring", stiffness: 300 }}>
          <Card icon={<PiggyBank className="text-[#7422c4]" size={32} />} title="Ahorro inteligente">
            Aprende a ahorrar sin dejar de disfrutar, con tips prácticos que puedes aplicar hoy mismo.
          </Card>
        </motion.div>

        <motion.div whileHover={{ y: -10 }} transition={{ type: "spring", stiffness: 300 }}>
          <Card icon={<Smartphone className="text-[#7422c4]" size={32} />} title="Herramientas digitales">
            Domina Yape para pagar, recargar y simplificar tu día a día con total seguridad.
          </Card>
        </motion.div>
      </div>

      {/* SECCIÓN DIFERENCIAL (BANNER) */}
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mt-20 bg-[#7422c4] text-white p-10 md:p-16 rounded-[3rem] shadow-2xl relative overflow-hidden"
      >
        <div className="absolute -bottom-20 -right-20 w-80 h-80 bg-white/10 rounded-full blur-3xl"></div>
        
        <div className="relative z-10 flex flex-col md:flex-row items-center gap-8 text-center md:text-left">
          <div className="flex-1">
            <h2 className="text-3xl md:text-4xl font-black mb-4 italic">
              🚀 Más que empleabilidad
            </h2>
            <p className="text-purple-100 text-lg font-light leading-relaxed">
              Queremos que construyas tu <strong>independencia financiera</strong>. Conseguir el empleo es el primer paso; saber qué hacer con tu primer sueldo es el que cambia tu vida.
            </p>
          </div>
          <button className="bg-white text-[#7422c4] px-8 py-4 rounded-2xl font-black shadow-xl hover:bg-purple-50 transition-all active:scale-95">
            Empezar curso gratis
          </button>
        </div>
      </motion.div>

      {/* SECCIÓN DE VIDEOS */}
      <div className="mt-24">
        <div className="flex items-center gap-3 mb-10">
          <div className="p-3 bg-purple-50 text-[#7422c4] rounded-2xl">
            <PlayCircle size={24} />
          </div>
          <h2 className="text-3xl font-black text-gray-900">Aprende viendo</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-10 mt-6">
          {/* VIDEO 1 */}
          <motion.div 
            whileHover={{ scale: 1.02 }}
            className="bg-white rounded-[2.5rem] shadow-sm border border-gray-100 overflow-hidden group hover:shadow-xl transition-all"
          >
            <div className="relative">
              <video controls className="w-full h-64 object-cover">
                <source src="/videos/presupuesto.mp4" type="video/mp4" />
              </video>
            </div>
            <div className="p-8">
              <p className="font-black text-xl text-gray-900 mb-2">💰 Cómo hacer tu presupuesto</p>
              <p className="text-gray-500 font-light">Aprende a organizar tu dinero desde cero con plantillas reales.</p>
            </div>
          </motion.div>

          {/* VIDEO 2 */}
          <motion.div 
            whileHover={{ scale: 1.02 }}
            className="bg-white rounded-[2.5rem] shadow-sm border border-gray-100 overflow-hidden group hover:shadow-xl transition-all"
          >
            <div className="relative">
              <video controls className="w-full h-64 object-cover">
                <source src="/videos/ahorro.mp4" type="video/mp4" />
              </video>
            </div>
            <div className="p-8">
              <p className="font-black text-xl text-gray-900 mb-2">🐷 Tips para ahorrar</p>
              <p className="text-gray-500 font-light">Pequeños cambios en tus hábitos que harán crecer tu cuenta de Yape.</p>
            </div>
          </motion.div>
        </div>
      </div>

      {/* RECOMENDACIONES FINALES */}
      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        className="mt-24 max-w-3xl"
      >
        <h2 className="text-2xl font-black text-gray-900 mb-8 ml-2">💡 Recomendaciones para ti</h2>
        <div className="space-y-4">
          {[
            "Registra todos tus gastos diarios en un app o nota.",
            "Separa al menos el 10% de tus ingresos apenas los recibas.",
            "Usa las 'Metas' de Yape para controlar tus ahorros."
          ].map((tip, i) => (
            <div key={i} className="flex items-center gap-4 bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
              <CheckCircle2 className="text-emerald-500" size={24} />
              <p className="font-bold text-gray-700">{tip}</p>
            </div>
          ))}
        </div>
      </motion.div>

    </div>
  );
}