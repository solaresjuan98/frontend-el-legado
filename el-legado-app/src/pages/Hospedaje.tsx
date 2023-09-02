import { Grid, Container } from '@mui/material'; // No olvides importar Container
import Typography from '@mui/joy/Typography';

import { TarjetaHospedaje } from '../components/Hospedaje/TarjetaHospedaje';
interface ContenidoItem {
  Titulo: string;
  descp: string;
  img: string;
  ruta: string;
}

const Contenido: ContenidoItem[] = [
    {
      Titulo: "Hotel Antigua",
      descp: "Un espacio de lujo y confort en el corazón de la Ciudad de Guatemala...",
      img: "https://picsum.photos/id/100/500/300",
      ruta: "https://hotelantiguagt.com"
    },
    {
      Titulo: "Casa Maya",
      descp: "Experimenta la cultura guatemalteca en este hotel...",
      img: "https://picsum.photos/id/101/500/300",
      ruta: "https://casamayagt.com"
    },
    {
      Titulo: "Torres del Lago",
      descp: "Ubicado junto al Lago de la Ciudad...",
      img: "https://picsum.photos/id/102/500/300",
      ruta: "https://torresdellagohotel.com"
    },
    {
      Titulo: "Hotel Panorama",
      descp: "Con vistas a la ciudad y montañas cercanas...",
      img: "https://picsum.photos/id/103/500/300",
      ruta: "https://hotelpanoramagt.com"
    },
    {
      Titulo: "Villa Real",
      descp: "Combina modernidad con tradición...",
      img: "https://picsum.photos/id/104/500/300",
      ruta: "https://villarealhotel.com"
    },
     
  ];
  
export const Hospedaje = () => {
    return (
      <Container maxWidth="lg"   style={{ marginTop: '20px' }}>
        <Grid
          container
          direction="row"
          justifyContent="flex-start"
          alignItems="center" // Alinea los elementos verticalmente en el centro
          spacing={3} 
          // Puedes ajustar este valor para cambiar la distancia entre las tarjetas
        >
                <Grid item xs={12} marginTop={6} container justifyContent="center">
          <Typography level="h1" sx={{ color: "#9AF9E2" }}>
            Hospedaje
          </Typography>
        </Grid>
          {Contenido.map((item, index) => (
            <Grid item xs={12} sm={6} md={6} key={index} style={{ display: 'flex', justifyContent: 'center', height: '100%' }}>
 
              <TarjetaHospedaje
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
  
