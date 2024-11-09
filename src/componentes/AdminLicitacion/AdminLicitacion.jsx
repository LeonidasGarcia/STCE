import AdminLicitacionMain from "./AdminLicitacionMain";
import RegistrarLicitacion from "./RegistrarLicitacion";
import LoginLicitacion from "./LoginLicitacion";
import { Routes, Route } from "react-router-dom";

const AdminLicitacion = () => {
    return (
        <Routes>
            <Route exact path="/" element={<LoginLicitacion />} />
            <Route exact path="/AdminLicitacionMain" element={<AdminLicitacionMain />} />
            <Route path="/registrarLicitacion" element={<RegistrarLicitacion />} />
        </Routes>
    );
}

export default AdminLicitacion;