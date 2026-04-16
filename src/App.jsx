import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Areas from "./components/Areas";
import Testimonios from "./components/Testimonios";
import Postula from "./components/Postula";
import Footer from "./components/Footer";
import ExploraYape from "./pages/ExploraYape";
import DetalleArea from "./pages/DetalleArea";
import Inspiracion from "./pages/Inspiracion";
import Aprendizaje from "./pages/Aprendizaje";
import Orientacion from "./pages/Orientacion";
import Estadisticas from "./components/Estadisticas";
import ChatBotYape from "./components/ChatBotYape";
import ConfianzaLaboral from "./components/ConfianzaLaboral";
import FormularioPostulacion from "./pages/FormularioPostulacion";
import Login from "./pages/Login";
import Registro from "./pages/Registro";


function App() {
  return (
    <Router>
      <Navbar />

      <Routes>
        {/* 🏠 HOME (Landing completa) */}
        <Route path="/" element={
          <>
            <Hero />
            <Areas />
            <Testimonios />
            <Estadisticas />
            <Postula />
          </>
        } />

        {/* 🚀 TUS RUTAS FUSIONADAS */}
        <Route path="/explora" element={<ExploraYape />} />
        <Route path="/inspiracion" element={<Inspiracion />} />
        <Route path="/aprendizaje" element={<Aprendizaje />} />
        <Route path="/orientacion" element={<Orientacion />} />
        <Route path="/confianzalaboral" element={<ConfianzaLaboral />} />
        <Route path="/postular/:area" element={<FormularioPostulacion />} />
        <Route path="/login" element={<Login />} />

        {/* 🔍 DETALLE DINÁMICO */}
        <Route path="/areas/:id" element={<DetalleArea />} />
        <Route path="/registro" element={<Registro />} />
      </Routes>

      <Footer />
      <ChatBotYape />
    </Router>
  );
}

export default App;