import { Link } from "react-router-dom";

const Licitacion = () => {
    return (
        <div className="max-w-sm m-10 bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="p-6">
                <h2 className="text-2xl font-bold text-gray-800 mb-2">Postulaciones para concursos de licitaciones</h2>
                <p className="text-gray-600 mb-4">
                    Haz que tu organización u empresa colabore con las obras públicas de nuestro país. Presenta la documentación adecuada y postula aquí.
                </p>
                <Link to={"/Licitacion"} className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition duration-300">
                    Ir a los concursos de licitaciones
                </Link>
            </div>
        </div>
    );
};

export default Licitacion