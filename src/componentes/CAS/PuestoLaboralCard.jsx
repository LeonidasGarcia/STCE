import React from 'react';
import { usePuestoSeleccionadoStore } from '../../estados/CAS/PuestosLaboralesStore';

const PuestoLaboralCard = ({ puestoLaboral }) => {

    const { puestoLaboralSel, cambiarPuestoLaboral } = usePuestoSeleccionadoStore();

    const cambiar = () => {
        cambiarPuestoLaboral(puestoLaboral);
        console.log(puestoLaboralSel);
    }

    return (
        <div onClick={() => cambiar()} className="max-w-md mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
            <div className="p-6">
                {/* Título del puesto */}
                <h2 className="text-2xl font-semibold text-indigo-700">{puestoLaboral.title}</h2>

                {/* Ubicación */}
                <p className="mt-2 text-gray-600">{puestoLaboral.location}</p>

                {/* Habilidades */}
                <div className="mt-4">
                    <h3 className="text-lg font-medium text-gray-800">Habilidades Requeridas:</h3>
                    <ul className="list-disc pl-6 space-y-2 mt-2">
                        {puestoLaboral.skills.map((skill, index) => (
                            <li key={index} className="text-gray-700">{skill}</li>
                        ))}
                    </ul>
                </div>

                {/* Descripción */}
                <div className="mt-4">
                    <h3 className="text-lg font-medium text-gray-800">Descripción del Puesto:</h3>
                    <p className="text-gray-600 mt-2">{puestoLaboral.description}</p>
                </div>
            </div>
        </div>
    );
};

export default PuestoLaboralCard;
