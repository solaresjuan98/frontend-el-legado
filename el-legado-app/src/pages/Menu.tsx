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
    img: "https://scontent.fgua3-3.fna.fbcdn.net/v/t39.30808-6/335069050_8886639494711461_2048694704273185419_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=sjQlkR8GwloAX92zz4i&_nc_ht=scontent.fgua3-3.fna&oh=00_AfCBe83x68p9eyKmUfj8QDJb7bkygEZbcUmD1EC65cjxwQ&oe=64D329E0",
    ruta :"/Expositores"
  },
  {
    Titulo: "Talleres",
    descp: "Conoce a nuestros talleres,  que fueron seleccionados cuidadosamente para brindarte una experiencia enriquecedora y educativa. ",
    img: "https://scontent.fgua3-3.fna.fbcdn.net/v/t39.30808-6/335161566_182552831168523_3991014698227586479_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=Hs0kKf7cyUUAX8keW2B&_nc_ht=scontent.fgua3-3.fna&oh=00_AfBLdZQsIAA-LcW6qD84qu20Ymx90ZDSjyn7WTdqm_sPIw&oe=64D404F3",
    ruta :"/Talleres"
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
            <Grid item xs={12} sm={6} md={5 } key={index} style={{ display: 'flex', justifyContent: 'center',    height: '100%'  }}>
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
  
