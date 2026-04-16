import React from "react";
import { auth } from "../firebaseConfig";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();

  const handleGoogleLogin = async () => {
    const provider = new GoogleAuthProvider();
    try {
      await signInWithPopup(auth, provider);
      navigate("/"); // Redirige al inicio tras el éxito
    } catch (error) {
      console.error("Error al iniciar sesión:", error.message);
    }
  };

  return (
    <div className="pt-48 pb-20 flex flex-col items-center min-h-screen bg-[#F9FAFB]">
      <div className="bg-white p-12 rounded-[3rem] shadow-2xl text-center max-w-md border border-gray-100">
        <div className="bg-purple-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
          <span className="text-4xl">💜</span>
        </div>
        <h1 className="text-3xl font-black text-gray-900 mb-4">¡Bienvenido!</h1>
        <p className="text-gray-500 mb-8 font-light italic">
          Inicia sesión en Yape Go para gestionar tus postulaciones y ver tu perfil profesional.
        </p>
        
        <button 
          onClick={handleGoogleLogin}
          className="w-full bg-[#7422c4] text-white py-4 rounded-2xl font-black shadow-xl hover:bg-[#5d1ba1] transition-all flex items-center justify-center gap-3 active:scale-95"
        >
          <img 
            src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg" 
            alt="Google" 
            className="w-6 h-6 bg-white rounded-full p-1" 
          />
          Continuar con Google
        </button>
      </div>
    </div>
  );
}