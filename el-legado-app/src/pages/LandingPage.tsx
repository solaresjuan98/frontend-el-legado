
import { Carrousel } from "../components/Carrousel/Carrousel"
import { Menu } from "./Menu"
import { Programa } from "../components/Programa/Programa"
import { Ubicacion } from "../components/Ubicacion/Ubicacion"
import Button from '@mui/joy/Button';

export const LandingPage = () => {
    return (
      <div>
        <Carrousel />
        <br/>
        <div style={{ textAlign: 'center' }}> {/* Agrega un div para centrar el botón */}
          <Button
            variant="plain"
            style={{
              color: '#CEFFFB',
              background: '#1A1142',
              fontSize: '25px', // Aumenta el tamaño del texto
              padding: '25px 50px', // Aumenta el espaciado interno (superior/inferior izquierdo/derecho)
              display: 'inline-block', // Asegura que el botón se muestre en línea
            }}
          >
            Registrate
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
  
