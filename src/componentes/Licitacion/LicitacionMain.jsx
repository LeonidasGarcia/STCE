import LicitacionLista from './LicitacionLista';
import LicitacionInformacion from './LicitacionInformacion';
import { useLicitacionesStore } from '../../estados/Licitaciones/LicitacionesStore';
import { Link } from 'react-router-dom';

const LicitacionMain = () => {
    const { licitaciones, agregarLicitacion } = useLicitacionesStore();

    return (
        <div>
            <Cabecera />
            <BotonRegresar />
            <div className='flex h-screen overflow-y-scroll'>
                <LicitacionLista licitaciones={licitaciones} />
                <LicitacionInformacion />
            </div>
        </div>
    );
}

import React from 'react';

const Cabecera = () => {
    return (
        <header className="bg-indigo-700 text-white py-6 shadow-md">
            <div className="container mx-auto text-center">
                <h1 className="text-4xl font-bold tracking-wide">
                    LICITACIONES DISPONIBLES
                </h1>
            </div>
        </header>
    );
};

const BotonRegresar = () => {
    return (
        <Link
            to={"/Inicio"} className="text-indigo-600 hover:text-indigo-800 font-medium transition duration-200 flex items-center m-5"
        >
            <span className="mr-2">&larr;</span>
            Regresar
        </Link>
    );
};

export default LicitacionMain;
