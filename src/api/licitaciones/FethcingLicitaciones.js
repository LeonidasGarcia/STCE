export const agregarLicitacion = async (nuevaLicitacion) => {
    const res = await fetch("https://hackaton-backend-lake.vercel.app/api/register_licitacion", {
        method: "POST",
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(nuevaLicitacion)
    })

    if (!res.ok) throw new Error("No se puede registrar la licitación");

    return res.json();

}

