import { Grid } from "@mui/material";

import AspectRatio from "@mui/joy/AspectRatio";
import Button from "@mui/joy/Button";
import Card from "@mui/joy/Card";
import CardActions from "@mui/joy/CardActions";
import CardContent from "@mui/joy/CardContent";
import CardOverflow from "@mui/joy/CardOverflow";
import Typography from "@mui/joy/Typography";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import LinearProgress from "@mui/joy/LinearProgress";
import { NavLink } from "react-router-dom";
import { useState, useEffect } from "react";
import Stack from '@mui/joy/Stack';
export const PagoExitoso = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Cada 1/10 de los 7 segundos es 700ms
    const interval = setInterval(() => {
      setProgress((prevProgress) => {
        if (prevProgress >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prevProgress + 10; // Incrementamos el progreso en 10% cada 700ms
      });
    }, 700);

    return () => {
      clearInterval(interval);
    };
  }, []);

  useEffect(() => {
    if (progress >= 100) {
      window.location.href = "/registro"; // Redirigimos cuando el progreso es 100%
    }
  }, [progress]);

  return (
    <Grid
      container
      justifyContent="center"
      marginTop={2}
      spacing={2}
      sx={{ flexGrow: 1, p: 2 }}
      className="animate__animated animate__fadeInUp"
    >
      <Card
        data-resizable
        sx={{
          textAlign: "center",
          alignItems: "center",
          maxWidth: { xs: "90%", sm: "400px" },
          overflow: "auto",
          resize: "horizontal",
          "--icon-size": "100px",
        }}
      >
        <CardOverflow variant="solid" sx={{ bgcolor: "#1A1142" }}>
          <AspectRatio
            variant="outlined"
            ratio="1"
            sx={{
              m: "auto",
              transform: "translateY(50%)",
              borderRadius: "50%",
              width: "var(--icon-size)",
              boxShadow: "sm",
              bgcolor: "#1A1142",
              position: "relative",
              color: "#98FF98",
            }}
          >
            <div>
              <CheckCircleIcon sx={{ fontSize: "8rem", color: "#98FF98" }} />
            </div>
          </AspectRatio>
        </CardOverflow>
        <Typography
          level="h2"
          textColor={"#9AF9E2"}
          sx={{ mt: "calc(var(--icon-size) / 2)" }}
        >
          Pago realizado con éxito
        </Typography>
        <CardContent sx={{ maxWidth: "40ch" }}>
          <Typography
            level="h3"
            textColor={"#E3FEF8"}
            style={{ textAlign: "center" }}
          >
            ¡Querido hermano(a)! Tu pago con tarjeta ha sido todo un éxito. Muy
            pronto recibirás un correo con tus entradas. ¡Gracias por tu compra
            😄!
          </Typography>
        </CardContent>
        <CardActions
          orientation="vertical"
          buttonFlex={1}
          sx={{
            "--Button-radius": "40px",
            width: "clamp(min(100%, 160px), 50%, min(100%, 200px))",
          }}
        >   <NavLink
        to="/registro"
    

      >
          <Button variant="solid" sx={{ background: "#1A1142" }}>
            <Typography level="title-lg" textColor={"#9AF9E2"}>
              Continuar
            </Typography>
          </Button>
          </NavLink>
          <Stack spacing={2} sx={{ flex: 1 }}>
          <LinearProgress
      determinate
      variant="outlined"
      color="neutral"
      size="sm"
      thickness={24}
      value={Number(progress!)}
      sx={{
        '--LinearProgress-radius': '20px',
        '--LinearProgress-thickness': '40px',
      }}
    >
      <Typography
        level="body-xs"
        fontWeight="xl"
        textColor="common.white"
        sx={{ mixBlendMode: 'difference' }}
      >
         {progress/10}s
      </Typography>
    </LinearProgress>
    </Stack>
        </CardActions>
       
      </Card>
    </Grid>
  );
};
