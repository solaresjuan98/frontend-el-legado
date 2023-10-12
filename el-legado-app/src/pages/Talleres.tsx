import Card from "@mui/joy/Card";
import CardCover from "@mui/joy/CardCover";
import Typography from "@mui/joy/Typography";
import { Grid, Container } from "@mui/material";
const arreglo_imagenes = [
  {
    imagen:
      "https://fondos-legado.s3.us-east-2.amazonaws.com/talleristas/1.png",
  },

  {
    imagen:
      "https://fondos-legado.s3.us-east-2.amazonaws.com/talleristas/2.png",
  },
  {
    imagen:
      "https://fondos-legado.s3.us-east-2.amazonaws.com/talleristas/3.png",
  },

  {
    imagen:
      "https://fondos-legado.s3.us-east-2.amazonaws.com/talleristas/4.png",
  },
  {
    imagen:
      "https://fondos-legado.s3.us-east-2.amazonaws.com/talleristas/5.png",
  },
  {
    imagen:
      "https://fondos-legado.s3.us-east-2.amazonaws.com/talleristas/6.png",
  },
  {
    imagen:
      "https://fondos-legado.s3.us-east-2.amazonaws.com/talleristas/7.png",
  },
  {
    imagen:
      "https://fondos-legado.s3.us-east-2.amazonaws.com/talleristas/8.png",
  },
  {
    imagen:
      "https://fondos-legado.s3.us-east-2.amazonaws.com/talleristas/9.png",
  },
  {
    imagen:
      "https://fondos-legado.s3.us-east-2.amazonaws.com/talleristas/10.png",
  },
];
export const Talleres = () => {
  return (
    <>
      <Grid item xs={12} marginTop={6} container justifyContent="center">
        <Typography level="h1" sx={{ color: "#B5D534" }}>
          Talleres
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
    </>
  );
};
