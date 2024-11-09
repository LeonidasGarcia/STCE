import React from 'react';
import { useLicitacionSeleccionadaStore } from '../../estados/Licitaciones/LicitacionesStore';

const LicitacionCard = ({ licitacion }) => {

    const { licitacionSel, cambiarLicitacion } = useLicitacionSeleccionadaStore();

    const cambiar = () => {
        cambiarLicitacion(licitacion);
        console.log(licitacionSel);
    }

    return (
        <div onClick={() => cambiar()} className="max-w-md mx-auto bg-white shadow-lg rounded-lg overflow-hidden cursor-pointer">
            <div className="p-6">
                {/* Nombre de la licitación */}
                <h2 className="text-2xl font-semibold text-indigo-700">{licitacion.Nombre_licitacion}</h2>

                {/* Descripción */}
                <div className="mt-4">
                    <h3 className="text-lg font-medium text-gray-800">Descripción:</h3>
                    <p className="text-gray-600 mt-2">{licitacion.Descripcion}</p>
                </div>

                {/* Presupuesto */}
                <div className="mt-4">
                    <h3 className="text-lg font-medium text-gray-800">Presupuesto:</h3>
                    <p className="text-gray-600 mt-2">{licitacion.Presupuesto}</p>
                </div>

                {/* Fechas */}
                <div className="mt-4">
                    <h3 className="text-lg font-medium text-gray-800">Fechas:</h3>
                    <p className="text-gray-600 mt-2"><strong>Inicio:</strong> {new Date(licitacion.Fecha_inicio).toLocaleString()}</p>
                    <p className="text-gray-600 mt-2"><strong>Fin:</strong> {new Date(licitacion.Fecha_fin).toLocaleString()}</p>
                    <p className="text-gray-600 mt-2"><strong>Desbloqueo:</strong> {new Date(licitacion.Periodo_desbloqueo).toLocaleString()}</p>
                </div>
            </div>
        </div>
    );
};

export default LicitacionCard;
