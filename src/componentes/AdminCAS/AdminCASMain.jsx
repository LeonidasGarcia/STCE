import BienvenidaAdminCAS from "./BienvenidaAdminCas";
import PuestoLaboralInfoCompletaLista from "./PuestoLaboralInfoCompletaLista";
import { Link, Routes, Route } from "react-router-dom";

const AdminCASMain = () => {
    return (
        <>
            <BienvenidaAdminCAS />
            <BotonRegistrarPuestoLaboral />
            <PuestoLaboralInfoCompletaLista />
        </>
    );
}


const BotonRegistrarPuestoLaboral = () => {
    return (
        <div className="bg-blue-100 p-6">
            <div className="max-w-4xl mx-auto bg-white shadow-xl rounded-lg p-8">
                <h1 className="text-3xl font-semibold text-blue-600 mb-4">
                    Administrador, ¿Listo para registrar un nuevo puesto laboral?
                </h1>
                <p className="text-lg text-gray-700 mb-6">
                    Si deseas registrar un nuevo puesto laboral en modalidad CAS, simplemente haz clic en el siguiente botón para comenzar el proceso.
                </p>

                <Link to="/AdminCAS/registrarPuestoLaboral" className="inline-block bg-blue-600 text-white py-2 px-4 rounded-lg shadow-md hover:bg-blue-700 transition duration-300">
                    Registrar Nuevo Puesto
                </Link>
            </div>
        </div>
    );
};


export default AdminCASMain;