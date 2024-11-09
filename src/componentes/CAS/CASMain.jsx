import PuestoLaboralLista from './PuestoLaboralLista';
import PuestoLaboralInformacion from './PuestoLaboralInformacion';
import { usePuestosLaboralesStore } from '../../estados/CAS/PuestosLaboralesStore';
import { Link, Routes, Route } from 'react-router-dom';
import RegistroCAS from '../mainPage/RegistroCAS';

const CASMain = () => {



    return (
        <div>
            <Routes>
                <Route exact path='/' element={<RegistroCAS />} />
                <Route path='/CASMain' element={<Main />} />
            </Routes>

        </div>
    );
}

import React from 'react';

const Main = () => {

    const { puestosLaborales, agregarPuestoLaboral } = usePuestosLaboralesStore();

    return (
        <>
            <Cabecera />
            <BotonRegresar />
            <div className='flex h-screen overflow-y-scroll'>
                <PuestoLaboralLista puestoLaborals={puestosLaborales} />
                <PuestoLaboralInformacion />
            </div>

        </>
    );
}

const Cabecera = () => {
    return (
        <header className="bg-indigo-700 text-white py-6 shadow-md">
            <div className="container mx-auto text-center">
                <h1 className="text-4xl font-bold tracking-wide">
                    CONVOCATORIAS DE TRABAJO BAJO MODALIDAD CAS
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

export default CASMain