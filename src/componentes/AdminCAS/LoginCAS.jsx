import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

const LoginCAS = () => {
    return (
        <div className="flex justify-center items-center min-h-screen bg-gray-100">
            <div className="bg-white p-8 rounded-lg shadow-lg w-96">
                <h2 className="text-2xl font-bold text-center mb-4">Iniciar Sesión en STCE CAS</h2>

                {/* Campo para el nombre de usuario */}
                <div className="mb-4">
                    <label htmlFor="username" className="block text-sm font-medium text-gray-700">Usuario</label>
                    <input
                        type="text"
                        id="username"
                        name="username"
                        placeholder="Ingrese su usuario"
                        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    />
                </div>

                {/* Campo para la contraseña */}
                <div className="mb-6">
                    <label htmlFor="password" className="block text-sm font-medium text-gray-700">Contraseña</label>
                    <input
                        type="password"
                        id="password"
                        name="password"
                        placeholder="Ingrese su contraseña"
                        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    />
                </div>

                {/* Botón de inicio de sesión */}
                <Link to={"/AdminCAS/AdminCASMain"}
                    type="submit"
                    className="w-full bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                >
                    Iniciar sesión
                </Link>

            </div>
        </div>
    );
};

export default LoginCAS;
