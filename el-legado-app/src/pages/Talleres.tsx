import Typography from "@mui/joy/Typography";
import { Grid, Container } from "@mui/material";
import { useEffect, useState } from "react";
import CircularProgress from "@mui/joy/CircularProgress";
import { talleristas_hombres, talleristas_mujeres } from "../constants/filesArray";

export const Talleres = () => {

  const [loading, setLoading] = useState(true);

  useEffect(() => {

    const timeout = setTimeout(() => {
      setLoading(false);
    }, 2500);

    return () => clearTimeout(timeout);
  }, [])

  return (
    <>
      {
        loading ?
          (
            <div className="loadingContainer" style={{ marginTop: '100px'}}>
              <CircularProgress />
            </div>
          ) :
          (
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
                  {talleristas_mujeres.map((item, index) => (
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
                  {talleristas_hombres.map((item, index) => (
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

                    </Grid>
                  ))}
                </Grid>
              </Container>
            </>

          )
      }

    </>
  );
};
