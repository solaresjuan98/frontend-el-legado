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
    img: "https://scontent.fgua3-3.fna.fbcdn.net/v/t39.30808-6/335069050_8886639494711461_2048694704273185419_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=dd63ad&_nc_ohc=tEmLzX4kUtcAX-Xnf9l&_nc_ht=scontent.fgua3-3.fna&oh=00_AfC5f41RLjCYyT38To622Q0K9YIXtK1PHlCo3dDlDw01RQ&oe=64DF0760",
    ruta :"/Expositores"
  },
  {
    Titulo: "Talleres",
    descp: "Conoce a nuestros talleres,  que fueron seleccionados cuidadosamente para brindarte una experiencia enriquecedora y educativa. ",
    img: "https://scontent.fgua3-5.fna.fbcdn.net/v/t39.30808-6/335163875_172719628882600_4754736672555758795_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=dd63ad&_nc_ohc=oa1iUMMZYAsAX__ww42&_nc_ht=scontent.fgua3-5.fna&oh=00_AfDimzqSxV6FYWMw7V_EUFL6O_TpWZCuWVoRj1HN7gS3sA&oe=64D9F14B",
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
  
