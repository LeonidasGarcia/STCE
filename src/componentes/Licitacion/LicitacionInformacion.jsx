import React from 'react';
import { useLicitacionSeleccionadaStore } from '../../estados/Licitaciones/LicitacionesStore';

const LicitacionInformacion = () => {

    const { licitacionSel, cambiarLicitacion } = useLicitacionSeleccionadaStore();

    return (
        (Object.keys(licitacionSel).length === 0) ? <SeleccionMensaje /> : <Informacion licitacion={licitacionSel} />
    );
};

const SeleccionMensaje = () => {
    return (
        <div className="flex items-center justify-center h-full p-4 bg-blue-100 rounded-md shadow-md w-full">
            <p className="text-center text-lg font-semibold text-blue-700">
                Por favor, selecciona una de las cartas de licitaciones para ver más detalles.
            </p>
        </div>
    );
};

const Informacion = ({ licitacion }) => {
    return (
        <div className="p-8 bg-white rounded-lg w-full space-y-6 m-5 overflow-y-scroll">
            {/* Nombre de la licitación */}
            <div className="text-center">
                <h2 className="text-3xl font-semibold text-indigo-700">{licitacion.nombre}</h2>
                <p className="text-xl text-gray-600 mt-2">{licitacion.descripcion}</p>
            </div>

            {/* Fechas */}
            <div>
                <h3 className="text-2xl font-medium text-gray-800">Fechas Importantes</h3>
                <p className="mt-2 text-gray-600"><strong>Fecha de Inicio:</strong> {new Date(licitacion.fechaInicio).toLocaleString()}</p>
                <p className="mt-2 text-gray-600"><strong>Fecha de Fin:</strong> {new Date(licitacion.fechaFin).toLocaleString()}</p>
                <p className="mt-2 text-gray-600"><strong>Periodo de Desbloqueo:</strong> {new Date(licitacion.periodoDesbloqueo).toLocaleString()}</p>
            </div>

            {/* Presupuesto */}
            <div>
                <h3 className="text-2xl font-medium text-gray-800">Presupuesto</h3>
                <p className="mt-2 text-gray-600">{licitacion.presupuesto}</p>
            </div>

            {/* Enlace a las bases */}
            <div>
                <h3 className="text-2xl font-medium text-gray-800">Bases de la Licitación</h3>
                <p className="mt-2 text-gray-600">
                    Para más información, puede consultar las bases completas en el siguiente enlace:
                    <a
                        href={licitacion.Bases}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-indigo-600 hover:underline"
                    >
                        Descargar bases
                    </a>
                </p>
            </div>

            {/* Botón para postularse */}
            <div className="text-center mt-6">
                <button className="px-6 py-3 bg-indigo-600 text-white font-semibold rounded-lg shadow-md hover:bg-indigo-700 transition duration-300">
                    Postúlate Ahora
                </button>
            </div>
        </div>
    );
};

export default LicitacionInformacion;
