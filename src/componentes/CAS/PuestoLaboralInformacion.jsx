import React from 'react';
import { usePuestoSeleccionadoStore } from '../../estados/CAS/PuestosLaboralesStore';

const PuestoLaboralInformacion = () => {

    const { puestoLaboralSel, cambiarPuestoLaboral } = usePuestoSeleccionadoStore();

    return (
        ((Object.keys(puestoLaboralSel).length === 0) ? <SeleccionMensaje /> : <Informacion puestoLaboral={puestoLaboralSel} />)
    );
};

const SeleccionMensaje = () => {
    return (
        <div className="flex items-center justify-center h-full p-4 bg-blue-100 rounded-md shadow-md w-full">
            <p className="text-center text-lg font-semibold text-blue-700">
                Por favor, selecciona una de las cartas de puestos laborales para ver más detalles.
            </p>
        </div>
    );
};


const Informacion = ({ puestoLaboral }) => {
    return (

        <div className="p-8 bg-white rounded-lg w-full space-y-6 m-5 overflow-y-scroll">
            {/* Título del puesto */}
            <div className="text-center">
                <h2 className="text-3xl font-semibold text-indigo-700">{puestoLaboral.title}</h2>
                <p className="text-xl text-gray-600 mt-2">{puestoLaboral.location}</p>
            </div>

            {/* Descripción */}
            <div>
                <h3 className="text-2xl font-medium text-gray-800">Descripción del Puesto</h3>
                <p className="mt-2 text-gray-600">{puestoLaboral.description}</p>
            </div>

            {/* Especialidades */}
            <div>
                <h3 className="text-2xl font-medium text-gray-800">Especialidades Requeridas</h3>
                <ul className="list-disc pl-6 mt-2 text-gray-600">
                    {puestoLaboral.specialties.map((specialty, index) => (
                        <li key={index}>{specialty}</li>
                    ))}
                </ul>
            </div>

            {/* Habilidades */}
            <div>
                <h3 className="text-2xl font-medium text-gray-800">Habilidades Requeridas</h3>
                <ul className="list-disc pl-6 mt-2 text-gray-600">
                    {puestoLaboral.skills.map((skill, index) => (
                        <li key={index}>{skill}</li>
                    ))}
                </ul>
            </div>

            {/* Bases */}
            <div>
                <h3 className="text-2xl font-medium text-gray-800">Bases de la Convocatoria</h3>
                <p className="mt-2 text-gray-600">
                    Para más información, puede consultar las bases completas en el siguiente enlace:
                    <a
                        href={puestoLaboral.bases}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-indigo-600 hover:underline"
                    >
                        Descargar bases
                    </a>
                </p>
            </div>

            {/* Plazas disponibles */}
            <div>
                <h3 className="text-2xl font-medium text-gray-800">Plazas Disponibles</h3>
                <p className="mt-2 text-gray-600">{puestoLaboral.availableSeats} plazas disponibles</p>
            </div>

            {/* Sueldo */}
            <div>
                <h3 className="text-2xl font-medium text-gray-800">Sueldo</h3>
                <p className="mt-2 text-gray-600">{puestoLaboral.salary}</p>
            </div>

            {/* Botón para postularse */}
            <div className="text-center mt-6">
                <button className="px-6 py-3 bg-indigo-600 text-white font-semibold rounded-lg shadow-md hover:bg-indigo-700 transition duration-300">
                    Postúlate Ahora
                </button>
            </div>
        </div>

    );
}

export default PuestoLaboralInformacion;
