import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Areas from "./components/Areas";
import Testimonios from "./components/Testimonios";
import Postula from "./components/Postula";
import Footer from "./components/Footer";
import DetalleArea from "./pages/DetalleArea"; // <--- Crearemos este archivo ahora

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        {/* RUTA DE INICIO: Muestra todo lo que ya tenías */}
        <Route path="/" element={
          <>
            <Hero />
            <Areas />
            <Testimonios />
            <Postula />
          </>
        } />

        {/* RUTA DINÁMICA: Se activa al entrar a /areas/marketing, etc. */}
        <Route path="/areas/:id" element={<DetalleArea />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;