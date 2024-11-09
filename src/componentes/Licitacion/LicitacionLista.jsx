import React, { useState } from 'react';
import LicitacionCard from './LicitacionCard';

const LicitacionLista = ({ licitaciones }) => {
    // Estado para manejar el término de búsqueda
    const [searchTerm, setSearchTerm] = useState('');

    // Filtrar las licitaciones según el término de búsqueda
    const filteredLicitaciones = licitaciones.filter(licitacion =>
        licitacion.Nombre_licitacion.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="p-8 w-96 overflow-y-scroll m-5">
            {/* Buscador */}
            <div className="mb-6">
                <input
                    type="text"
                    placeholder="Buscar por nombre de licitación"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                />
            </div>

            {/* Lista de cartas filtradas */}
            <div className="space-y-6">
                {filteredLicitaciones.length > 0 ? (
                    filteredLicitaciones.map((licitacion, index) => (
                        <LicitacionCard key={index} licitacion={licitacion} />
                    ))
                ) : (
                    <p className="text-gray-500 text-center">No se encontraron licitaciones.</p>
                )}
            </div>
        </div>
    );
};

export default LicitacionLista;
