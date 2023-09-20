import { BrowserRouter, Routes, Route } from "react-router-dom"
import { LandingPage } from "./pages/LandingPage"
import { RegistroPage } from "./pages/RegistroPage"
import { Navbar } from "./components/navbar/Navbar"
import { Talleres } from "./pages/Talleres"
import { AcercaDe } from "./pages/AcercaDe"
import { Expositores } from "./pages/Expositores"
import Footer from "./components/Footer"
import { Hospedaje } from "./pages/Hospedaje"
import { CssVarsProvider } from "@mui/joy"
import { ToastContainer } from 'react-toastify';
import { PagoExitoso } from "./pages/PagoExitoso"
import { PagoError } from "./pages/PagoError"
function App() {

  return (
    <CssVarsProvider defaultMode="dark">

      <BrowserRouter>
      <ToastContainer />
        <Navbar />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/registro" element={<RegistroPage />} />
          {/* ====== LANDING PAGE ====== */}
          <Route path="/talleres" element={<Talleres />} />
          <Route path="/acerca-de" element={<AcercaDe />} />
          <Route path="/expositores" element={<Expositores />} />
          <Route path="/hospedaje" element={<Hospedaje />} />

          {/* ====== PANTALLAS DE AVISO DE PAGO ====== */}
          <Route path="/pago-exitoso" element={<PagoExitoso />} />
          <Route path="/pago-error" element={<PagoError />} />

        </Routes>
        <br /> <br /> <br /> <br /> <br /> <br />
        <Footer />
      </BrowserRouter>
    </CssVarsProvider>

  )
}

export default App;
