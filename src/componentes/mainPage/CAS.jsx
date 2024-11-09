import { Link } from "react-router-dom";

const CAS = () => {
    return (
        <div className="max-w-sm m-10 bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="p-6">
                <h2 className="text-2xl font-bold text-gray-800 mb-2">Postulaciones para CAS</h2>
                <p className="text-gray-600 mb-4">
                    Descubre las diversas convocatorios y postula. Registrate, ingresa y deja tu marca laboral en el estado Peruano.
                </p>
                <Link to={"/CAS"} className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition duration-300">
                    Ir a las convocatorias públicas
                </Link>
            </div>
        </div>
    );
};

export default CAS;
