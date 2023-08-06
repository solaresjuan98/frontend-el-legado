
import { Carrousel } from "../components/Carrousel/Carrousel"
import { Menu } from "./Menu"
import { Programa } from "../components/Programa/Programa"
import { Ubicacion } from "../components/Ubicacion/Ubicacion"
import Button from '@mui/joy/Button';
import { NavLink } from 'react-router-dom';
export const LandingPage = () => {
    return (
      <div>
        <Carrousel />
        <br/>
        <div style={{ textAlign: 'center' }}> {/* Agrega un div para centrar el botón */}
          <Button
            variant="plain"
            style={{
              color: '#FFFFFF',
              background: '#3E00B9',
              fontSize: '25px', // Aumenta el tamaño del texto
              padding: '25px 50px', // Aumenta el espaciado interno (superior/inferior izquierdo/derecho)
              display: 'inline-block', // Asegura que el botón se muestre en línea
            }}
          >
            Registrarse
          </Button>
        </div>
  
        <br/> <br/> <br/>
        <Menu/>
        <Programa/>
        <br/> <br/> <br/>
        <Ubicacion/>
      </div>
    );
  }
  
