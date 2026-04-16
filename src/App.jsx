import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Areas from "./components/Areas";
import Testimonios from "./components/Testimonios";
import Postula from "./components/Postula";
import Footer from "./components/Footer";

// ✅ IMPORTS COMBINADOS
import DetalleArea from "./pages/DetalleArea";
import ExploraYape from "./pages/ExploraYape";
import Inspiracion from "./pages/Inspiracion";
import Aprendizaje from "./pages/Aprendizaje";
import Orientacion from "./pages/Orientacion";

function App() {
  return (
    <Router>
      <Navbar />

      <Routes>

        {/* 🏠 HOME */}
        <Route path="/" element={
          <>
            <Hero />
            <Areas />
            <Testimonios />
            <Postula />
          </>
        } />

        {/* ✅ TU RUTA */}
        <Route path="/explora" element={<ExploraYape />} />

        {/* ✅ RUTAS DE TUS AMIGAS */}
        <Route path="/inspiracion" element={<Inspiracion />} />
        <Route path="/aprendizaje" element={<Aprendizaje />} />
        <Route path="/orientacion" element={<Orientacion />} />

        {/* 🔍 DETALLE */}
        <Route path="/areas/:id" element={<DetalleArea />} />

      </Routes>

      <Footer />
    </Router>
  );
}

export default App;
