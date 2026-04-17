import React from "react";
import { useEffect, useState } from "react";
import { auth } from "../firebaseConfig";
import { onAuthStateChanged } from "firebase/auth";
import { useNavigate } from "react-router-dom";


export default function Perfil() {

  const [user, setUser] = useState(null);
  const [editando, setEditando] = useState(false);

  const [perfil, setPerfil] = useState({
    nombre: "",
    ubicacion: "",
    telefono: "",
    profesion: "",
    estudios: "",
    sobreMi: "",
    habilidades: ""
  });

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);

      if (currentUser) {
        setPerfil((prev) => ({
          ...prev,
          nombre: currentUser.displayName || "",
        }));
      }
    });

    return () => unsubscribe();
  }, []);

  const handleChange = (e) => {
    setPerfil({
      ...perfil,
      [e.target.name]: e.target.value,
    });
  };

  const cerrarSesion = async () => {
    await signOut(auth);
  };

  const guardarCambios = () => {
    setEditando(false);
    alert("Perfil actualizado ✅");
  };

  return (
    <div className="min-h-screen pt-32 px-6 bg-gradient-to-b from-purple-50 to-white">

      <h1 className="text-4xl font-black text-center text-purple-700 mb-10">
        Mi Perfil 👤
      </h1>

      <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-xl p-8">

        {/* FOTO Y DATOS */}
        <div className="flex flex-col md:flex-row gap-8 items-center">

          <div className="text-center">
            <div className="w-32 h-32 bg-purple-200 rounded-full flex items-center justify-center text-4xl">
              👤
            </div>

            {editando && (
              <button className="mt-3 text-sm text-purple-600">
                Cambiar foto
              </button>
            )}
          </div>

          <div className="w-full space-y-3">

            <input
              name="nombre"
              value={perfil.nombre}
              onChange={handleChange}
              disabled={!editando}
              placeholder="Nombre"
              className="w-full border rounded-lg p-2"
            />

            <input
              value={user?.email || ""}
              disabled
              className="w-full border rounded-lg p-2 bg-gray-100"
            />

            <input
              name="ubicacion"
              value={perfil.ubicacion}
              onChange={handleChange}
              disabled={!editando}
              placeholder="Ubicación"
              className="w-full border rounded-lg p-2"
            />

            <input
              name="telefono"
              value={perfil.telefono}
              onChange={handleChange}
              disabled={!editando}
              placeholder="Teléfono"
              className="w-full border rounded-lg p-2"
            />

          </div>
        </div>

        {/* PERFIL PROFESIONAL */}
        <div className="mt-10 space-y-4">

          <h2 className="text-xl font-bold text-purple-700">
            Información Profesional 💼
          </h2>

          <input
            name="profesion"
            value={perfil.profesion}
            onChange={handleChange}
            disabled={!editando}
            placeholder="Profesión"
            className="w-full border rounded-lg p-2"
          />

          <input
            name="estudios"
            value={perfil.estudios}
            onChange={handleChange}
            disabled={!editando}
            placeholder="Nivel de estudios"
            className="w-full border rounded-lg p-2"
          />

          <input
            name="habilidades"
            value={perfil.habilidades}
            onChange={handleChange}
            disabled={!editando}
            placeholder="Habilidades (React, Comunicación, Diseño...)"
            className="w-full border rounded-lg p-2"
          />

          <textarea
            name="sobreMi"
            value={perfil.sobreMi}
            onChange={handleChange}
            disabled={!editando}
            placeholder="Sobre mí..."
            className="w-full border rounded-lg p-2 h-28"
          />

        </div>

        {/* BOTONES */}
        <div className="flex flex-wrap gap-4 mt-8 justify-center">

          {!editando ? (
            <button
              onClick={() => setEditando(true)}
              className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-2 rounded-full"
            >
              Editar Perfil
            </button>
          ) : (
            <button
              onClick={guardarCambios}
              className="bg-green-500 hover:bg-green-600 text-white px-6 py-2 rounded-full"
            >
              Guardar Cambios
            </button>
          )}

          <button
            onClick={cerrarSesion}
            className="bg-red-500 hover:bg-red-600 text-white px-6 py-2 rounded-full"
          >
            Cerrar sesión
          </button>

        </div>

      </div>
    </div>
  );
}