import React from "react";
import { motion } from "framer-motion";

// 🎬 Card de video
function VideoCard({ video, nombre }) {
  return (
    <div className="min-w-[280px] md:min-w-[320px] bg-white rounded-2xl shadow-lg overflow-hidden hover:scale-105 transition">
      <video controls className="w-full h-48 object-cover">
        <source src={video} type="video/mp4" />
      </video>
      <div className="p-4">
        <p className="font-semibold text-gray-800">{nombre}</p>
      </div>
    </div>
  );
}

// 🌟 Card grande tipo Netflix
function StoryCard({ image, titulo, descripcion }) {
  return (
    <div className="relative min-w-[300px] md:min-w-[400px] h-[220px] rounded-3xl overflow-hidden shadow-xl group">
      <img
        src={image}
        className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
      />

      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />

      <div className="absolute bottom-4 left-4 right-4 text-white">
        <h3 className="text-lg font-bold">{titulo}</h3>
        <p className="text-sm opacity-80">{descripcion}</p>
      </div>
    </div>
  );
}

export default function Inspiracion() {
  const historias = [
    {
      image: "https://images.unsplash.com/photo-1529333166437-7750a6dd5a70",
      titulo: "De provincia a fintech",
      descripcion: "Cómo Luis encontró su oportunidad en Yape",
    },
    {
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330",
      titulo: "Rompiendo barreras",
      descripcion: "Valeria y su camino en tecnología",
    },
    {
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e",
      titulo: "Confianza y crecimiento",
      descripcion: "Diego y su evolución profesional",
    },
  ];

  const videos = [
    {
      video: "https://www.w3schools.com/html/mov_bbb.mp4",
      nombre: "Historia de Camila",
    },
    {
      video: "https://www.w3schools.com/html/movie.mp4",
      nombre: "Historia de Luis",
    },
    {
      video: "https://www.w3schools.com/html/mov_bbb.mp4",
      nombre: "Historia de Valeria",
    },
  ];

  return (
    <div className="bg-white min-h-screen px-6 md:px-16 py-16">
      {/* HERO */}
      <section className="mb-16">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-6xl font-extrabold text-gray-900"
        >
          Inspírate con historias reales
        </motion.h1>

        <p className="mt-4 text-gray-600 text-lg max-w-2xl">
          Descubre cómo jóvenes como tú están cambiando su futuro con oportunidades reales.
        </p>
      </section>

      {/* 🎥 VIDEOS */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold mb-6 text-gray-900">
          Historias en video
        </h2>

        <div className="flex gap-6 overflow-x-auto pb-4 scrollbar-hide">
          {videos.map((v, i) => (
            <VideoCard key={i} {...v} />
          ))}
        </div>
      </section>

      {/* 🌟 HISTORIAS TIPO NETFLIX */}
      <section>
        <h2 className="text-2xl font-bold mb-6 text-gray-900">
          Historias destacadas
        </h2>

        <div className="flex gap-6 overflow-x-auto pb-4 scrollbar-hide">
          {historias.map((h, i) => (
            <StoryCard key={i} {...h} />
          ))}
        </div>
      </section>
    </div>
  );
}

