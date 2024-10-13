import { Grid, Container } from '@mui/material'; // No olvides importar Container


import { TarjetaTalleristas } from '../components/Menu/TarjetaTalleristas';
import { S3_BUCKET_URL } from '../constants/constants';
interface ContenidoItem {
  Titulo: string;
  descp: string;
  img: string;
  ruta: string;
}

const Contenido: ContenidoItem[] = [
  {
    Titulo: "Expositores",
    descp: "Conoce a nuestros expertos Expositores, seleccionados cuidadosamente para brindarte una experiencia enriquecedora y educativa. ",
    img: `${S3_BUCKET_URL}/principal/EXPOSITORES.jpg`,
    ruta :"/expositores"
  },
  {
    Titulo: "Talleres",
    descp: "Conoce a nuestros talleristas,  que fueron seleccionados cuidadosamente para brindarte una experiencia enriquecedora y educativa. ",
    img: `${S3_BUCKET_URL}/principal/TALLERES.jpg`,
    ruta :"/talleres"
  } 
];
export const Menu = () => {
    return (
      <Container maxWidth="md" style={{ marginTop: '20px' }}>
        <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="center" // Alinea los elementos verticalmente en el centro
          spacing={3} 
          // Puedes ajustar este valor para cambiar la distancia entre las tarjetas
        >
          {Contenido.map((item, index) => (
            <Grid item xs={12} sm={6} md={4 } key={index} style={{ display: 'flex', justifyContent: 'center',    height: '100%'  }}>
              <TarjetaTalleristas
                titulo={item.Titulo}
                descripcion={item.descp}
                ruta={item.ruta}
                imagen={item.img}
              />
            </Grid>
          ))}
        </Grid>
      </Container>
    );
  };
  
