import React from 'react';
import { Link } from 'react-router-dom';

const BienvenidaAdministradorLicitacion = () => {
    return (
        <div className="bg-gray-100 flex items-center">
            <div className="bg-white p-8 rounded-lg shadow-lg w-full">
                <h1 className="text-3xl font-semibold text-center text-indigo-600 mb-4">
                    Bienvenido, Administrador de Licitaciones
                </h1>
                <p className="text-lg text-gray-700 mb-6">
                    Estás accediendo al sistema de licitaciones de la empresa. Aquí podrás gestionar y controlar las licitaciones activas y el seguimiento de cada proceso.
                </p>
                <div className="flex flex-col gap-4">
                    <Link
                        to="/AdminLicitacion/registrarLicitacion"
                        className="bg-indigo-600 text-white py-2 px-6 rounded-lg hover:bg-indigo-700 transition duration-300 text-center"
                    >
                        Crear Nueva Licitación
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default BienvenidaAdministradorLicitacion;
