import React from 'react';

const BienvenidaAdminCAS = () => {
    return (
        <div className="bg-blue-100 p-6">
            <div className="w-full bg-white shadow-xl p-4">
                <h1 className="text-3xl font-semibold text-blue-600 mb-4">
                    Bienvenido, Leonidas!
                </h1>
                <p className="text-lg text-gray-700 mb-6">
                    Como administrador, tienes la responsabilidad de gestionar los puestos laborales bajo la modalidad CAS. Aquí podrás registrar, modificar y gestionar las vacantes disponibles para los candidatos.
                </p>

                <h2 className="text-xl font-medium text-gray-800 mb-3">Acciones disponibles:</h2>
                <ul className="list-disc pl-6 text-gray-600">
                    <li className="mb-2">Registrar nuevos puestos laborales CAS</li>
                    <li className="mb-2">Revisar las vacantes disponibles y las aplicaciones recibidas</li>
                </ul>

                <p className="mt-6 text-gray-500">
                    Si necesitas asistencia para registrar un puesto o tienes alguna consulta, no dudes en contactar con nuestro equipo de soporte.
                </p>
            </div>
        </div>
    );
};

export default BienvenidaAdminCAS;
