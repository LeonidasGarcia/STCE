import React from 'react';

const LicitacionCompletaCard = ({ licitacion }) => {

    return (
        <div className="mx-auto bg-white p-6 rounded-lg shadow-lg space-y-4">
            <h2 className="text-2xl font-bold text-indigo-600">{licitacion.nombre}</h2>
            <p className="text-gray-700">{licitacion.descripcion}</p>

            <div className="space-y-2">
                <div className="flex justify-between">
                    <span className="font-medium text-gray-600">Presupuesto:</span>
                    <span className="text-gray-500">{licitacion.presupuesto || 'No especificado'}</span>
                </div>
                <div className="flex justify-between">
                    <span className="font-medium text-gray-600">Fecha de Inicio:</span>
                    <span className="text-gray-500">{new Date(licitacion.fechaInicio).toLocaleString()}</span>
                </div>
                <div className="flex justify-between">
                    <span className="font-medium text-gray-600">Fecha de Fin:</span>
                    <span className="text-gray-500">{new Date(licitacion.fechaFin).toLocaleString()}</span>
                </div>
                <div className="flex justify-between">
                    <span className="font-medium text-gray-600">Periodo de Desbloqueo:</span>
                    <span className="text-gray-500">{new Date(licitacion.periodoDesbloqueo).toLocaleString()}</span>
                </div>
            </div>
        </div>
    );
};

export default LicitacionCompletaCard;
