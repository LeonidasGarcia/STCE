import LoginCAS from "./LoginCAS";
import AdminCASMain from "./AdminCASMain";
import RegistrarPuestoLaboral from "./RegistrarPuestoLaboral";
import { Link, Routes, Route } from "react-router-dom";

const AdminCAS = () => {
    return (
        <Routes>
            <Route exact path="/" element={<LoginCAS />} />
            <Route path="/AdminCASMain" element={<AdminCASMain />} />
            <Route path="/registrarPuestoLaboral" element={<RegistrarPuestoLaboral />}></Route>
        </Routes>
    );
}

export default AdminCAS;