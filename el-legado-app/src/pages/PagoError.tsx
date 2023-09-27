import { Grid } from "@mui/material";


import Button from "@mui/joy/Button";
import Card from "@mui/joy/Card";
import CardActions from "@mui/joy/CardActions";
import CardContent from "@mui/joy/CardContent";

import Typography from "@mui/joy/Typography";
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';



import LinearProgress from "@mui/joy/LinearProgress";
import { NavLink } from "react-router-dom";
import { useState, useEffect } from "react";
import Stack from '@mui/joy/Stack';
export const PagoError = () => {
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
          maxWidth: { xs: "90%", sm: "450px" },
          overflow: "auto",
          resize: "horizontal",
          "--icon-size": "100px",
        }}
      >       
   
     
            
            <ErrorOutlineIcon sx={{ fontSize: "8rem", color: "#F44336" }} />
 
 
            <Typography
  level="h2"
  textColor={"#F44336"}
  sx={{ mt: "calc(var(--icon-size) / 2)" ,marginTop:'-10'}}
>
  Pago No Completado
</Typography>
      
    
        <CardContent sx={{ maxWidth: "40ch" }}>
          <Typography
            level="h3"
            textColor={"#E3FEF8"}
            style={{ textAlign: "center" }}
          >
         ¡Querido hermano(a)! Lamentamos informarte que tu pago con tarjeta no se pudo procesar correctamente. Por favor, verifica tus detalles e intenta de nuevo. Si el problema persiste, contacta a nuestro equipo de soporte. ¡Gracias por tu paciencia! 😓

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
          <Button variant="solid" sx={{ background: "#F44336" }}>
            <Typography level="title-lg" textColor={"#E3FEF8"}>
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
