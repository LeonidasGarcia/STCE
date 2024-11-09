import React from 'react';
import PuestoLaboral from './RegistrarPuestoLaboral';
import { Link } from 'react-router-dom';

const RegistrarPuestoLaboral = () => {
    return (
        <div>
            <Cabecera />
            <BotonRegresar />
            <FormularioPuestoLaboral />
        </div>
    );
}

const FormularioPuestoLaboral = () => {

    return (
        <form className="max-w-lg mx-auto my-10 p-6 bg-white shadow-md rounded-lg">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Registro de Puesto de Trabajo</h2>

            <label className="block mb-2">
                <span className="text-gray-700">Nombre del puesto de trabajo</span>
                <input
                    type="text"
                    className="mt-1 block w-full px-3 py-2 border rounded-md focus:border-indigo-500 focus:ring-indigo-500"
                    placeholder="Ej. Desarrollador de Software"
                    required
                />
            </label>

            <label className="block mb-2">
                <span className="text-gray-700">Ubicación del puesto trabajo</span>
                <input
                    type="text"
                    className="mt-1 block w-full px-3 py-2 border rounded-md focus:border-indigo-500 focus:ring-indigo-500"
                    placeholder="Ej. Ciudad de México"
                    required
                />
            </label>

            <label className="block mb-2">
                <span className="text-gray-700">Especialidades</span>
                <input
                    type="text"
                    className="mt-1 block w-full px-3 py-2 border rounded-md focus:border-indigo-500 focus:ring-indigo-500"
                    placeholder="Ej. Frontend, Backend"
                />
            </label>

            <label className="block mb-2">
                <span className="text-gray-700">Habilidades</span>
                <input
                    type="text"
                    className="mt-1 block w-full px-3 py-2 border rounded-md focus:border-indigo-500 focus:ring-indigo-500"
                    placeholder="Ej. JavaScript, React"
                />
            </label>

            <label className="block mb-2">
                <span className="text-gray-700">Descripción</span>
                <textarea
                    className="mt-1 block w-full px-3 py-2 border rounded-md focus:border-indigo-500 focus:ring-indigo-500"
                    rows="3"
                    placeholder="Descripción del puesto"
                ></textarea>
            </label>

            <label className="block mb-2">
                <span className="text-gray-700">Bases</span>
                <input
                    type="file"
                    className="mt-1 block w-full text-gray-700 px-3 py-2 border rounded-md cursor-pointer focus:border-indigo-500 focus:ring-indigo-500"
                    accept=".pdf,.doc,.docx"
                />
                <span className="text-xs text-gray-500">Formatos aceptados: PDF, DOC, DOCX</span>
            </label>

            <label className="block mb-2">
                <span className="text-gray-700">Plazas disponibles</span>
                <input
                    type="number"
                    className="mt-1 block w-full px-3 py-2 border rounded-md focus:border-indigo-500 focus:ring-indigo-500"
                    placeholder="Ej. 5"
                    required
                />
            </label>

            <label className="block mb-2">
                <span className="text-gray-700">Sueldo</span>
                <input
                    type="number"
                    className="mt-1 block w-full px-3 py-2 border rounded-md focus:border-indigo-500 focus:ring-indigo-500"
                    placeholder="Ej. 50000"
                />
            </label>

            <label className="block mb-4">
                <span className="text-gray-700">Años de experiencia</span>
                <input
                    type="number"
                    className="mt-1 block w-full px-3 py-2 border rounded-md focus:border-indigo-500 focus:ring-indigo-500"
                    placeholder="Ej. 3"
                    required
                />
            </label>

            <button
                type="submit"
                className="w-full py-2 px-4 bg-indigo-600 text-white font-semibold rounded-md hover:bg-indigo-700 focus:outline-none"
            >
                Enviar
            </button>
        </form>
    );
};


const Cabecera = () => {
    return (
        <div className="mb-8 border-b p-4">
            <h2 className="text-3xl font-bold text-indigo-700 text-center">Registrar un puesto de trabajo para STCE</h2>
        </div>
    );
};

const BotonRegresar = () => {
    return (
        <Link
            to={"/AdminCAS/AdminCASMain"} className="text-indigo-600 hover:text-indigo-800 font-medium transition duration-200 flex items-center m-5"
        >
            <span className="mr-2">&larr;</span>
            Regresar
        </Link>
    );
};


export default RegistrarPuestoLaboral;
