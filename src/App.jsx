import AdminCAS from "./componentes/AdminCAS/AdminCAS"
import AdminLicitacion from "./componentes/AdminLicitacion/AdminLicitacion"
import Main from "./componentes/mainPage/Main"
import CASMain from "./componentes/CAS/CASMain"
import LicitacionesMain from "./componentes/Licitacion/LicitacionMain"
import { QueryClientProvider } from '@tanstack/react-query';
import { QueryClient } from '@tanstack/react-query';
import { Route, Routes } from "react-router-dom"


function App() {



  const queryClient = new QueryClient();

  return (

    <QueryClientProvider client={queryClient}>
      <Routes>
        <Route exact path="/Inicio" element={<Main />} />
        <Route path="/CAS/*" element={<CASMain />} />
        <Route path="/Licitacion" element={<LicitacionesMain />}></Route>
        <Route path="/AdminCAS/*" element={<AdminCAS />} />
        <Route path="/AdminLicitacion/*" element={<AdminLicitacion />} />
      </Routes>
    </ QueryClientProvider>

  )
}

export default App
