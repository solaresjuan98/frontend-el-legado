import { BrowserRouter, Routes, Route } from "react-router-dom"
import { LandingPage } from "./pages/LandingPage"
import { RegistroPage } from "./pages/RegistroPage"
import { Navbar } from "./components/navbar/Navbar"
import { Talleres } from "./pages/Talleres"
import { AcercaDe } from "./pages/AcercaDe"
import { Expositores } from "./pages/Expositores"

function App() {

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/registro" element={<RegistroPage />} />
        {/* ====== LANDING PAGE ====== */}
        <Route path="/talleres" element={<Talleres />} />
        <Route path="/acerca-de" element={<AcercaDe />} />
        <Route path="/expositores" element={<Expositores />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;
