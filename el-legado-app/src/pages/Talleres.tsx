import Typography from "@mui/joy/Typography";
import { Grid, Container } from "@mui/material";
 
const arreglo_imagenes = [
 

  {
    imagen:
      "https://fondos-legado.s3.us-east-2.amazonaws.com/RUTH+VASQUEZ.jpg",
  },
  {
    imagen:
      "https://fondos-legado.s3.us-east-2.amazonaws.com/ANDREA+DE+LEON.jpg",
  },

  {
    imagen:
      "https://fondos-legado.s3.us-east-2.amazonaws.com/MARIBEL+DE+SAPON.jpg",
  },
  {
    imagen:
      "https://fondos-legado.s3.us-east-2.amazonaws.com/GISELA+TERCERO.jpg",
  },
  {
    imagen:
      "https://fondos-legado.s3.us-east-2.amazonaws.com/ARACELY+DE+MENDEZ.jpg",
  },
  {
    imagen:
      "https://fondos-legado.s3.us-east-2.amazonaws.com/VANESSA+ESPINOZA.jpg",
  },
  {
    imagen:
      "https://fondos-legado.s3.us-east-2.amazonaws.com/ABIGAIL+OCHOA.jpg",
  },
  {
    imagen:
      "https://fondos-legado.s3.us-east-2.amazonaws.com/NINETH+PINEDA.jpg",
  },
  
  {
    imagen:
      "https://fondos-legado.s3.us-east-2.amazonaws.com/DANIELA+DE+LEON.jpg",
  },{
    imagen:
      "https://fondos-legado.s3.us-east-2.amazonaws.com/GLENDA+SERRANO.jpg",
  },{
    imagen:
      "https://fondos-legado.s3.us-east-2.amazonaws.com/ALONDRA+GONZALEZ.jpg",
  },{
    imagen:
      "https://fondos-legado.s3.us-east-2.amazonaws.com/ANY+CHAJON.jpg",
  }, {
    imagen:
      "https://fondos-legado.s3.us-east-2.amazonaws.com/ABIGAIL+NAVARRETE.jpg",
  },
]; 
const arreglo_imagenes_hombres = [
 

  {
    imagen:
      "https://fondos-legado.s3.us-east-2.amazonaws.com/OBED+CHIQUIVAL.png",
  },
  {
    imagen:
      "https://fondos-legado.s3.us-east-2.amazonaws.com/JUAN+CARLOS+BATZ.png",
  },

  {
    imagen:
      "https://fondos-legado.s3.us-east-2.amazonaws.com/FERNANDO+MONTERROSO.png",
  },
  {
    imagen:
      "https://fondos-legado.s3.us-east-2.amazonaws.com/ELIAS+HERNANDEZ.png",
  },
  {
    imagen:
      "https://fondos-legado.s3.us-east-2.amazonaws.com/JOSUE+CHANN.png",
  },
  {
    imagen:
      "https://fondos-legado.s3.us-east-2.amazonaws.com/JUAN+AVILA.png",
  },
  {
    imagen:
      "https://fondos-legado.s3.us-east-2.amazonaws.com/JONAS+CHAVEZV1.png",
  },
  {
    imagen:
      "https://fondos-legado.s3.us-east-2.amazonaws.com/LUIS+NAVARRETE.png",
  },
  
  {
    imagen:
      "https://fondos-legado.s3.us-east-2.amazonaws.com/ARMANDO+LOPEZ.png",
  },{
    imagen:
      "https://fondos-legado.s3.us-east-2.amazonaws.com/JUAN+ANTONIO+MURCIA.png",
  },{
    imagen:
      "https://fondos-legado.s3.us-east-2.amazonaws.com/WILDER+LOPEZ.png",
  },{
    imagen:
      "https://fondos-legado.s3.us-east-2.amazonaws.com/DAVID+LUIS.png",
  } ,{
    imagen:
      "https://fondos-legado.s3.us-east-2.amazonaws.com/JOEL+SOC.png",
  } ,{
    imagen:
      "https://fondos-legado.s3.us-east-2.amazonaws.com/WALTER+MENDEZ.png",
  } ,{
    imagen:
      "https://fondos-legado.s3.us-east-2.amazonaws.com/MARVIN+TERCERO.png",
  } 
];
export const Talleres = () => {
  return (
    <>
 




      <Grid item xs={12} marginTop={6} container justifyContent="center">
        <Typography level="h1" sx={{ color: "#B5D534" }}>
          Nuestras Talleristas 
        </Typography>
      </Grid>
      <Container maxWidth="lg" style={{ marginTop: "20px" }}>
        {" "}
        {/* Cambiado a 'lg' para más espacio */}
        <Grid container spacing={3} justifyContent="center">
          {arreglo_imagenes.map((item, index) => (
            <Grid
              key={index}
              item
              xs={12}
              sm={6}
              md={4}
              
              style={{
                display: "flex",
                justifyContent: "center",
                height: "100%",
              }}
            >
              <img
                src={item.imagen}
                srcSet={item.imagen + " 2x"} // Suponiendo que quieres usar la misma URL para 2x
                loading="lazy"
                alt=""
                style={{
                  maxWidth: "100%",
                  maxHeight: "100%",
                  objectFit: "cover",
                  borderRadius: "15px"
                }}
              />
              {/* <Card sx={{ width: "112%", height: "800px", flexGrow: 1 }}>
                <CardCover>
                 
                </CardCover>
              </Card> */}
            </Grid>
          ))}
        </Grid>
      </Container>

      <Grid item xs={12} marginTop={6} container justifyContent="center">
        <Typography level="h1" sx={{ color: "#B5D534" }}>
          Nuestros Talleristas 
        </Typography>
      </Grid>
      <Container maxWidth="lg" style={{ marginTop: "20px" }}>
        {" "}
        {/* Cambiado a 'lg' para más espacio */}
        <Grid container spacing={3} justifyContent="center">
          {arreglo_imagenes_hombres.map((item, index) => (
            <Grid
              key={index}
              item
              xs={12}
              sm={6}
              md={4}
              
              style={{
                display: "flex",
                justifyContent: "center",
                height: "100%",
              }}
            >
              <img
                src={item.imagen}
                srcSet={item.imagen + " 2x"} // Suponiendo que quieres usar la misma URL para 2x
                loading="lazy"
                alt=""
                style={{
                  maxWidth: "100%",
                  maxHeight: "100%",
                  objectFit: "cover",
                  borderRadius: "15px"
                }}
              />
              {/* <Card sx={{ width: "112%", height: "800px", flexGrow: 1 }}>
                <CardCover>
                 
                </CardCover>
              </Card> */}
            </Grid>
          ))}
        </Grid>
      </Container>
    </>
  );
};
