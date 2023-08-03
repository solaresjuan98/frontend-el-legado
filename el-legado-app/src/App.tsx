import { BrowserRouter, Routes, Route } from "react-router-dom"
import { LandingPage } from "./pages/LandingPage"
import { RegistroPage } from "./pages/RegistroPage"
import { Navbar } from "./components/navbar/Navbar"

function App() {

  return (
    <BrowserRouter>
    <Navbar/>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/registro" element={<RegistroPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;
