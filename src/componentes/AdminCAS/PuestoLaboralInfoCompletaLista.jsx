import React, { useState } from 'react';
import PuestoLaboralInfoCompletaCard from "./PuestoLaboralInfoCompletaCard";
import { usePuestosLaboralesStore } from "../../estados/CAS/PuestosLaboralesStore";

const PuestoLaboralInfoCompletaLista = () => {

    const { puestosLaborales } = usePuestosLaboralesStore();
    const [searchTerm, setSearchTerm] = useState(''); // Estado para el término de búsqueda

    // Filtrar los puestos laborales según el término de búsqueda
    const filteredPuestos = puestosLaborales.filter(puesto =>
        puesto.title.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="min-h-screen bg-gray-100 py-10">
            <div className="max-w-6xl mx-auto">
                <h1 className="text-3xl font-semibold text-center text-indigo-700 mb-8">Puestos Laborales Disponibles</h1>

                {/* Buscador */}
                <div className="mb-6">
                    <input
                        type="text"
                        placeholder="Buscar por nombre de puesto"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)} // Actualiza el término de búsqueda
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                    />
                </div>

                {/* Lista de cartas filtradas */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {filteredPuestos.length > 0 ? (
                        filteredPuestos.map((puesto, index) => (
                            <PuestoLaboralInfoCompletaCard key={index} puestoLaboral={puesto} />
                        ))
                    ) : (
                        <p className="text-gray-500 text-center">No se encontraron puestos laborales.</p>
                    )}
                </div>
            </div>
        </div>
    );
};

export default PuestoLaboralInfoCompletaLista;
