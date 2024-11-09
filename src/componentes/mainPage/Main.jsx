import NavBar from "./NavBar";
import CAS from "./CAS";
import Licitacion from "./Licitacion";
import Informacion from "./Informacion";
import { useEffect } from "react"
import { useLicitacionesStore } from "../../estados/Licitaciones/LicitacionesStore";

const Main = () => {

    const { licitaciones, setLicitaciones } = useLicitacionesStore();

    useEffect(() => {
        (async () => {
            fetch("https://hackaton-backend-lake.vercel.app/api/get_licitations").then(res => res.json()).then(res => {
                console.log(res);
                setLicitaciones(res);
            });
        })();
    }, []);

    return (
        <div>
            <div className="relative">
                <NavBar />
                <Bienvenida />
            </div>
            <div className="flex flex-row justify-center px-20 py-10" id="2">
                <CAS />
                <Licitacion />
            </div>
            <Informacion />
            <div className="text-white bg-gray-900 text-1xl font-bold text-center"><h6>{`High in Volt make this with love <3`}</h6></div>
        </div>
    );
};

// src/components/Welcome.js
import React from 'react';

const Bienvenida = () => {
    return (
        <section className="bg-gray-900 text-white py-20 px-4" id="1">
            <div className="max-w-3xl mx-auto text-center">
                <h1 className="text-4xl md:text-5xl font-bold mb-4">
                    Bienvenido/a al Sistema de Transparencia de Contratación Estatal
                </h1>
                <p className="text-lg md:text-xl mb-8">
                    Estamos encantados de tenerte aquí. Explora las convocatorias laborales que tenemos para ti y descubre todo lo que tenemos para ofrecerte.
                </p>
            </div>
        </section>
    );
};

export default Main;