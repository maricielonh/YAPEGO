import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
// Importación de Firebase
import { auth } from "../firebaseConfig"; 
import { onAuthStateChanged, signOut } from "firebase/auth";

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [user, setUser] = useState(null); // Estado para el usuario
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    
    // Escucha en tiempo real si el usuario entra o sale
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
      unsubscribe();
    };
  }, []);

  const navLinks = [
    { name: "Inicio", path: "/" },
    { name: "Inspiración", path: "/inspiracion" },
    { name: "Aprendizaje", path: "/aprendizaje" },
    { name: "Orientación", path: "/orientacion" },
    { name: "Confianza laboral", path: "/confianzalaboral" },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 px-6 pt-6 pb-2 transition-all duration-300">
      <div className={`max-w-7xl mx-auto flex justify-between items-center px-8 h-16 transition-all duration-500 rounded-[2rem] relative ${
        scrolled 
          ? "bg-white/80 backdrop-blur-xl shadow-lg border border-white/20" 
          : "bg-[#7422c4]/90 backdrop-blur-md text-white shadow-2xl"
      }`}>
        
        {/* LOGO */}
        <div className="flex items-center">
          <Link to="/" className="flex items-center gap-2 group">
             <img 
               src="/logo.png" 
               alt="Yape Go Logo" 
               className="h-28 w-auto object-contain absolute -top-10 left-6 drop-shadow-lg group-hover:scale-105 transition-transform"
             />
          </Link>
        </div>

        {/* MENÚ */}
        <ul className="hidden md:flex gap-2 items-center pl-40">
          {navLinks.map((link) => {
            const isActive = location.pathname === link.path;
            return (
              <li key={link.path}>
                <Link 
                  to={link.path} 
                  className={`px-4 py-2 rounded-full text-sm font-bold transition-all relative group ${
                    isActive 
                      ? (scrolled ? "text-[#7422c4]" : "text-white") 
                      : (scrolled ? "text-gray-600 hover:text-gray-900" : "text-white/80 hover:text-white")
                  }`}
                >
                  {link.name}
                  <span className={`absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-current transition-all group-hover:w-1/2 ${
                    isActive ? "w-1/2" : ""
                  }`} />
                </Link>
              </li>
            );
          })}
        </ul>

        {/* BOTONES DINÁMICOS */}
        <div className="flex items-center gap-4">
          {user ? (
            <div className="flex items-center gap-3">
              <Link 
                to="/perfil"
                className={`px-6 py-2.5 rounded-xl font-black text-sm transition-all active:scale-95 shadow-md ${
                  scrolled ? "bg-[#7422c4] text-white" : "bg-white text-[#7422c4]"
                }`}
              >
                Mi perfil
              </Link>
              <button 
                onClick={() => signOut(auth)}
                className={`text-[10px] uppercase font-bold opacity-50 hover:opacity-100 ${scrolled ? "text-gray-900" : "text-white"}`}
              >
                Salir
              </button>
            </div>
          ) : (
            <Link 
              to="/login"
              className={`px-6 py-2.5 rounded-xl font-black text-sm transition-all active:scale-95 shadow-md ${
                scrolled 
                  ? "bg-[#7422c4] text-white hover:bg-[#5d1ba1]" 
                  : "bg-white text-[#7422c4] hover:bg-purple-50"
              }`}
            >
              Iniciar sesión
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;