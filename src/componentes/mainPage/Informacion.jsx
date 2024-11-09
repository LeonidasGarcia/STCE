import React from "react";

const Informacion = () => {
    return (
        <div className="mx-auto p-14 bg-gray-900 shadow-lg" id="3">
            <h2 className="text-white text-2xl font-bold mb-4">Sobre el STCE</h2>
            <p className="text-white leading-relaxed m-4">En el marco de los procesos de selección para puestos públicos
                y licitaciones en el Perú, nuestra solución redefine los Contratos Administrativos de Servicios (CAS) y otros
                mecanismos de contratación estatal, abordando los problemas de falta de transparencia, manipulación de resultados
                y validación de documentación. Diseñada específicamente para reducir el riesgo de corrupción y asegurar que
                cada etapa sea justa, objetiva y confiable, nuestra plataforma automatizada brinda una experiencia segura y
                transparente tanto para candidatos como para empresas licitadoras.
            </p>
            <p className="text-white leading-relaxed m-4">Para candidatos de procesos CAS: Ofrecemos un sistema en el que los
                postulantes pueden cargar de forma segura sus documentos de respaldo, desde certificados de estudios hasta pruebas
                de experiencia. Estos documentos son validados automáticamente usando bases de datos oficiales, con cruces de
                información provenientes de RENIEC para verificar grados de consanguinidad, eliminando sesgos y conflictos de
                interés en el proceso de selección. Además, la evaluación se realiza mediante un modelo basado en Google
                Studio, que asegura la verificación de cada documento sin errores humanos. Solo aquellos que cumplen todos los
                requisitos avanzan, y los resultados se publican de forma automática, garantizando una transparencia total.
            </p>
            <p className="text-white leading-relaxed m-4">Para licitaciones públicas: Nuestro sistema permite a las empresas cifrar
                sus propuestas con una clave pública única y segura antes de enviarlas, protegiendo la confidencialidad de sus
                contenidos hasta el cierre de la convocatoria. Al desencriptar las propuestas automáticamente después del cierre,
                registramos cada acción en un log de auditoría inalterable, que asegura la integridad del proceso. Esto permite
                a los evaluadores acceder a propuestas recién desencriptadas en un entorno seguro y confiable, desde la
                postulación hasta la adjudicación.
            </p>
            <p className="text-white leading-relaxed m-4">Con esta plataforma, los procesos de selección y licitación en Perú
                no solo se modernizan, sino que establecen un nuevo estándar de integridad, agilidad y transparencia,
                asegurando que cada paso se lleve a cabo con los más altos niveles de profesionalismo y confiabilidad.
            </p>
        </div>
    );
};

export default Informacion;
