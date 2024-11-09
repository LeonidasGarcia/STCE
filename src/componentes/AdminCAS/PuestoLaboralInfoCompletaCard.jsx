import React from 'react';

const PuestoLaboralInfoCompletaCard = ({ puestoLaboral }) => {
    return (
        <div className="max-w-md mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
            <div className="p-6">
                {/* Título del puesto */}
                <h2 className="text-2xl font-semibold text-indigo-700">{puestoLaboral.title}</h2>

                {/* Ubicación */}
                <p className="mt-2 text-gray-600">{puestoLaboral.location}</p>

                {/* Especialidades */}
                <div className="mt-4">
                    <h3 className="text-lg font-medium text-gray-800">Especialidades:</h3>
                    <ul className="list-disc pl-6 space-y-2 mt-2">
                        {puestoLaboral.specialties.map((specialty, index) => (
                            <li key={index} className="text-gray-700">{specialty}</li>
                        ))}
                    </ul>
                </div>

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

                {/* Bases */}
                <div className="mt-4">
                    <h3 className="text-lg font-medium text-gray-800">Bases:</h3>
                    <a href={puestoLaboral.bases} target="_blank" rel="noopener noreferrer" className="text-indigo-600 hover:text-indigo-800 mt-2 block">
                        Leer bases del puesto
                    </a>
                </div>

                {/* Plazas disponibles */}
                <div className="mt-4">
                    <h3 className="text-lg font-medium text-gray-800">Plazas Disponibles:</h3>
                    <p className="text-gray-600 mt-2">{puestoLaboral.availableSeats}</p>
                </div>

                {/* Sueldo */}
                <div className="mt-4">
                    <h3 className="text-lg font-medium text-gray-800">Sueldo:</h3>
                    <p className="text-gray-600 mt-2">{puestoLaboral.salary}</p>
                </div>
            </div>
        </div>
    );
};

export default PuestoLaboralInfoCompletaCard;
