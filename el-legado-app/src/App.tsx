import { BrowserRouter, Routes, Route } from "react-router-dom"
import { RegistroPage } from "./pages/RegistroPage"

import { CssVarsProvider } from "@mui/joy"
import { ToastContainer } from 'react-toastify';
 
import { AppProvider } from "./context/AppProvider"
function App() {

  return (
    <AppProvider>
      <CssVarsProvider defaultMode="dark">

        <BrowserRouter>
          <ToastContainer />
          <Routes>
            <Route path="/" element={<RegistroPage />} />
          {  /* <Route path="/registro" element={<RegistroPage />} />
          <Navbar />
         
            <Route path="/talleres" element={<Talleres />} />
            <Route path="/acerca-de" element={<AcercaDe />} />
            <Route path="/expositores" element={<Expositores />} />
            <Route path="/hospedaje" element={<Hospedaje />} />

           
            <Route path="/validacion" element={<ValidacionPago />} />
      
            <Route path="/pago-error" element={<PagoError />} />
            <Route path="*" element={<LandingPage />} />
          </Routes>

          <br /> <br /> <br /> <br /> <br /> <br />
          <Footer /> */}
           </Routes>
        </BrowserRouter>
      </CssVarsProvider>
      
    </AppProvider>


  )
}

export default App;
