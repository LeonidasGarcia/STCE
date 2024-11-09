import React, { useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const RegistroCAS = () => {

    const inputDNI = useRef(null);

    const handleSubmit = (e) => {
        e.preventDefault();
        const dni = document.getElementById("dni").value;

        if (dni.length === 8 && /^\d+$/.test(dni)) {
            alert(`DNI ${dni} registrado exitosamente!`);
        } else {
            alert("Por favor, ingresa un DNI válido (8 dígitos numéricos).");
        }
    };

    const registrarse = () => {
        let dniUser = inputDNI.current.value;

        (async () => {
            fetch("https://hackaton-backend-lake.vercel.app/api/register_user", {
                method: "POST",
                body: {
                    dni: dniUser
                }
            }).then(res => res.json()).then(res => console.log(res));
        })();

    }

    useNavigate("/CAS/CASAdmin");

    return (
        <div className="flex justify-center items-center min-h-screen bg-gray-100">
            <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
                <h2 className="text-2xl font-semibold text-center text-gray-800 mb-6">Registro de Usuario</h2>

                <form onSubmit={handleSubmit}>
                    <div className="mb-6">
                        <label htmlFor="dni" className="block text-gray-700 text-sm font-medium mb-2">DNI</label>
                        <input ref={inputDNI}
                            type="text"
                            id="dni"
                            name="dni"
                            placeholder="Ingresa tu DNI"
                            required
                            pattern="\d{8}"
                            title="El DNI debe tener 8 dígitos numéricos"
                            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>

                    <button onClick={() => { registrarse() }}
                        type="submit"
                        className="w-full bg-green-500 text-white p-3 rounded-md hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-400"
                    >
                        Registrarse
                    </button>

                </form>
            </div>
        </div>
    );
};

export default RegistroCAS;
