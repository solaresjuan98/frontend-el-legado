import { Grid, Container } from '@mui/material'; // No olvides importar Container


import { TarjetaTalleristas } from '../components/Menu/TarjetaTalleristas';
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
    img: "https://fondos-legado.s3.us-east-2.amazonaws.com/tallerista.jpg",
    ruta :"/Expositores"
  },
  {
    Titulo: "Talleres",
    descp: "Conoce a nuestros talleres,  que fueron seleccionados cuidadosamente para brindarte una experiencia enriquecedora y educativa. ",
    img: "https://fondos-legado.s3.us-east-2.amazonaws.com/taller.jpg",
    ruta :"/Talleres"
  } ,
  {
    Titulo: "Hospedaje",
    descp: "Conoce a nuestros hoteles,  que fueron seleccionados cuidadosamente para poder hospedarte con tu familia y amigos. ",
    img: "https://www.eltiempo.com/files/image_640_428/uploads/2022/10/14/6349de4783bd5.jpeg",
    ruta :"/hospedaje"
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
  
