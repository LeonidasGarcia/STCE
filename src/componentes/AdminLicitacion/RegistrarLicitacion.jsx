import { Link } from "react-router-dom";
import { useMutation } from '@tanstack/react-query';
import { agregarLicitacion } from "../../api/licitaciones/FethcingLicitaciones";
import { useRef } from "react";

const RegistrarLicitacion = () => {
    return (
        <>
            <Cabecera />
            <BotonRegresar />
            <FormularioLicitacion />

        </>

    );
}

const FormularioLicitacion = () => {

    const { mutate, isLoading, isError, error, isSuccess } = useMutation(agregarLicitacion);

    const inputNombreLicitacion = useRef(null);
    const inputDescripcion = useRef(null);
    const inputPresupuesto = useRef(null);
    const inputFechaInicio = useRef(null);
    const inputFechaFin = useRef(null);
    const inputPeriodo = useRef(null);

    const registrarLicitacion = (e) => {
        e.preventDefault();

        const nombreLicitacion = inputNombreLicitacion.current.value;
        const descripcion = inputDescripcion.current.value;
        const presupuesto = inputPresupuesto.current.value;
        const fechaInicio = new Date(inputFechaInicio.current.value).toISOString();
        const fechaFin = new Date(inputFechaFin.current.value).toISOString();
        const fechaPeriodo = new Date(inputPeriodo.current.value).toISOString();

        const nuevaLicitacion = {
            Nombre_licitacion: nombreLicitacion,
            Descripcion: descripcion,
            Presupuesto: presupuesto,
            Fecha_inicio: fechaInicio,
            Fecha_fin: fechaFin,
            Periodo_desbloqueo: fechaPeriodo
        };

        (async () => {
            fetch("https://hackaton-backend-lake.vercel.app/api/register_licitacion", {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(nuevaLicitacion)
            }).then(res => res.json()).then(res => {
                console.log(res);
            })


        })()


        /*
        const nuevaLicitacion = {
            nombre: nombreLicitacion,
            descripcion: descripcion,
            presupuesto: presupuesto,
            fechaInicio: fechaInicio,
            fechaFin: fechaFin,
            periodoDesbloqueo: fechaPeriodo
        }

        console.log(nuevaLicitacion)

        mutate(nuevaLicitacion);
        */
    }

    return (
        <div className="max-w-4xl mx-auto p-8 bg-white rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold text-center text-indigo-700 mb-6">Formulario de Licitación</h2>
            <form className="space-y-6">
                <div>
                    <label htmlFor="nombreLicitacion" className="block text-lg font-medium text-gray-700">Nombre de la Licitación</label>
                    <input ref={inputNombreLicitacion}
                        type="text"
                        id="nombreLicitacion"
                        name="nombreLicitacion"
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                        required
                    />
                </div>

                <div>
                    <label htmlFor="descripcion" className="block text-lg font-medium text-gray-700">Descripción</label>
                    <textarea ref={inputDescripcion}
                        id="descripcion"
                        name="descripcion"
                        rows="4"
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                        required
                    />
                </div>

                <div>
                    <label htmlFor="presupuesto" className="block text-lg font-medium text-gray-700">Presupuesto</label>
                    <input ref={inputPresupuesto}
                        type="text"
                        id="presupuesto"
                        name="presupuesto"
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                        required
                    />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                        <label htmlFor="fechaInicio" className="block text-lg font-medium text-gray-700">Fecha de Inicio</label>
                        <input ref={inputFechaInicio}
                            type="datetime-local"
                            id="fechaInicio"
                            name="fechaInicio"
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                            required
                        />
                    </div>

                    <div>
                        <label htmlFor="fechaFin" className="block text-lg font-medium text-gray-700">Fecha de Fin</label>
                        <input ref={inputFechaFin}
                            type="datetime-local"
                            id="fechaFin"
                            name="fechaFin"
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                            required
                        />
                    </div>
                </div>

                <div>
                    <label htmlFor="periodoDesbloqueo" className="block text-lg font-medium text-gray-700">Periodo de Desbloqueo</label>
                    <input ref={inputPeriodo}
                        type="datetime-local"
                        id="periodoDesbloqueo"
                        name="periodoDesbloqueo"
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                        required
                    />
                </div>

                <div className="text-center">
                    <button onClick={(e) => registrarLicitacion(e)}
                        type="submit"
                        className="px-6 py-3 mt-4 bg-indigo-600 text-white font-semibold rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-opacity-50"
                    >
                        {isLoading ? 'Agregando...' : 'Agregar Usuario'}
                    </button>
                </div>

                {isSuccess && (
                    <p>Usuario agregado con éxito: {JSON.stringify(isSuccess)}</p>
                )}
                {isError && <p>Error: {error.message}</p>}

            </form>



        </div>
    );
};

const Cabecera = () => {
    return (
        <div className="mb-8 border-b p-4">
            <h2 className="text-3xl font-bold text-indigo-700 text-center">Registrar una licitación para STCE</h2>
        </div>
    );
};

const BotonRegresar = () => {
    return (
        <Link
            to={"/AdminLicitacion/AdminLicitacionMain"} className="text-indigo-600 hover:text-indigo-800 font-medium transition duration-200 flex items-center m-5"
        >
            <span className="mr-2">&larr;</span>
            Regresar
        </Link>
    );
};

export default RegistrarLicitacion;