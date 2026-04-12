import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import CommentSection from './components/CommentSection';

// ------------------------------------------
// Función que simula la página de productos (Similar a tu createPageWithProducts)
// ------------------------------------------
const TestPage = () => {
    // ID único para los comentarios de esta página
    const productId = "seccion-prueba-productos"; 
    
    return (
        <div className="min-h-screen bg-gray-100 font-sans">
            
            {/* Cabecera de Navegación */}
            <header className="bg-white shadow-md p-4">
                <nav className="max-w-4xl mx-auto flex justify-between items-center">
                    <span className="text-xl font-bold text-indigo-600">Mini Tienda React</span>
                    <Link to="/" className="text-gray-600 hover:text-indigo-600">Inicio</Link>
                </nav>
            </header>
            
            {/* Contenido Principal */}
            <main className="p-8">
                <div className="max-w-4xl mx-auto bg-white p-6 rounded-lg shadow-lg mb-8">
                    <h2 className="text-3xl font-extrabold text-gray-800 mb-2">
                        Página de Productos de Prueba
                    </h2>
                    <p className="text-gray-600">
                        Aquí iría la cuadrícula de productos (como en tu código original).
                        <br/>
                        El ID que usa esta página para Firebase es: <span className="font-mono bg-yellow-100 p-1 rounded">{productId}</span>
                    </p>
                </div>

                {/* ⬅️ Llama al componente de comentarios */}
                <CommentSection productId={productId} />

            </main>

            {/* Pie de página */}
            <footer className="bg-gray-800 text-white text-center p-4 mt-12">
                Proyecto de Prueba 2025
            </footer>
        </div>
    );
};

// ------------------------------------------
// Componente principal App (Este es el que se renderiza)
// ------------------------------------------
const App = () => {
    return (
        <Router>
            <Routes>
                {/* Asigna el componente TestPage a la ruta de inicio "/" */}
                <Route path="/" element={<TestPage />} />
            </Routes>
        </Router>
    );
};

export default App;