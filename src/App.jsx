import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Hero from "./components/Hero";
import Areas from "./components/Areas";
import Testimonios from "./components/Testimonios";
import Postula from "./components/Postula";
import Estadisticas from "./components/Estadisticas";
import ChatBotYape from "./components/ChatBotYape";
import ConfianzaLaboral from "./components/ConfianzaLaboral";

import ExploraYape from "./pages/ExploraYape";
import DetalleArea from "./pages/DetalleArea";
import Inspiracion from "./pages/Inspiracion";
import Aprendizaje from "./pages/Aprendizaje";
import Orientacion from "./pages/Orientacion";
import FormularioPostulacion from "./pages/FormularioPostulacion";
import Login from "./pages/Login";
import Registro from "./pages/Registro";
import Perfil from "./pages/Perfil";
import Curso from "./pages/Curso";

function App() {
  return (
    <Router>
     

      {/* ✅ NAVBAR SIEMPRE VISIBLE */}
      <Navbar />

      <Routes>
 <Route path="/curso" element={<Curso />} />
        {/* 🏠 HOME */}
        <Route
          path="/"
          element={
            <>
              <Hero />
              <Areas />
              <Testimonios />
              <Estadisticas />
              <Postula />
            </>
          }
        />

        {/* 🚀 PÁGINAS */}
        <Route path="/explora" element={<ExploraYape />} />
        <Route path="/inspiracion" element={<Inspiracion />} />
        <Route path="/aprendizaje" element={<Aprendizaje />} />
        <Route path="/orientacion" element={<Orientacion />} />
        <Route path="/confianzalaboral" element={<ConfianzaLaboral />} />

        {/* 📄 FUNCIONALIDADES */}
        <Route path="/postular/:area" element={<FormularioPostulacion />} />
        <Route path="/area/:id" element={<DetalleArea />} />
    

        {/* 🔐 AUTH */}
        <Route path="/login" element={<Login />} />
        <Route path="/registro" element={<Registro />} />

        {/* 👤 PERFIL */}
        <Route path="/perfil" element={<Perfil />} />

      </Routes>

      {/* ✅ SIEMPRE VISIBLES */}
      <Footer />
      <ChatBotYape />

    </Router>
  );
}

export default App;
