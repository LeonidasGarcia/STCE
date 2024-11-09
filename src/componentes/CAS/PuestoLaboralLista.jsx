import React, { useState } from 'react';
import PuestoLaboralCard from './PuestoLaboralCard';

const PuestoLaboralLista = ({ puestoLaborals }) => {
    // Estado para manejar el término de búsqueda
    const [searchTerm, setSearchTerm] = useState('');

    // Filtrar los trabajos según el término de búsqueda
    const filteredpuestoLaborals = puestoLaborals.filter(puestoLaboral =>
        puestoLaboral.title.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="p-8 w-96 overflow-y-scroll m-5">
            {/* Buscador */}
            <div className="mb-6">
                <input
                    type="text"
                    placeholder="Buscar por nombre de puesto"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                />
            </div>

            {/* Lista de cartas filtradas */}
            <div className="space-y-6">
                {filteredpuestoLaborals.length > 0 ? (
                    filteredpuestoLaborals.map((puestoLaboral, index) => (
                        <PuestoLaboralCard key={index} puestoLaboral={puestoLaboral} />
                    ))
                ) : (
                    <p className="text-gray-500 text-center">No se encontraron puestos laborales.</p>
                )}
            </div>
        </div>
    );
};

export default PuestoLaboralLista;
