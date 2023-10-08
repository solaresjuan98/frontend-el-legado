import { Grid } from "@mui/material";

import AspectRatio from "@mui/joy/AspectRatio";
 
import Card from "@mui/joy/Card";
import CardActions from "@mui/joy/CardActions";
import CardContent from "@mui/joy/CardContent";
import CardOverflow from "@mui/joy/CardOverflow";
import Typography from "@mui/joy/Typography";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import LinearProgress from "@mui/joy/LinearProgress";
 
import { useState, useEffect } from "react";
import Stack from '@mui/joy/Stack';
import { UseRegistro } from "../hooks/userRegistro";
 

// import { useContext } from 'react'
// import { AppContext } from "../context/config";
const userDataStr = localStorage.getItem('userData');
const idSessionStr = localStorage.getItem('idSession');
interface PagoExitosoProps {
  validador: boolean;
}
export const PagoExitoso: React.FC<PagoExitosoProps> = ({ validador }) => {
   
  if (userDataStr && validador&&idSessionStr) {
    // const { cardPaymentUser } = useContext(AppContext);
    const [progress, setProgress] = useState(0);

    const { registro_tarjeta,envioCorreo } = UseRegistro();

    // ! Validar
    useEffect(() => {

      const interval = setInterval(() => {
        setProgress((prevProgress) => {
          if (prevProgress >= 100) {
            clearInterval(interval);
            return 100;
          }
          return prevProgress + 10;
        });
      }, 700);

      return () => {
        sendData()
        clearInterval(interval);
      };
    }, []);


    useEffect(() => {
      if (progress >= 100) {

        window.location.href = "/registro"; // Redirigimos cuando el progreso es 100%
      }
    }, [progress]);


    const sendData = async () => {


      const userData = JSON.parse(userDataStr);
    
      const dataToSent = {
        nombre: userData.nombre,
        telefono: userData.telefono,
        correo: userData.correo,
        congregacion: userData.congregacion,
        transaccion: userData.transaccion,

      }
      const response=await registro_tarjeta(dataToSent);
      const objetocorreo={
        nombre: userData.nombre,
        telefono: userData.telefono,
        correo: userData.correo,
        id_transaccion:response.id,
        numero_entradas: userData.transaccion.numero_entradas,
        aceptado:true,
        mensaje:""

      }

     
      const responseEnvio=  await envioCorreo(objetocorreo)
      console.log(responseEnvio)
      // * Eliminar el objecto del local storage
      localStorage.removeItem('userData');
      localStorage.removeItem('idSession');
  

    }

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
                <CheckCircleIcon sx={{ fontSize: "8rem", color: "#B5D534" }} />
              </div>
            </AspectRatio>
          </CardOverflow>
          <Typography
            level="h2"
            textColor={"#B5D534"}
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
              pronto recibirás un correo la  confirmación de tu compra. ¡Gracias por tu compra
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
          > 
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
                  {progress / 10}s
                </Typography>
              </LinearProgress>
            </Stack>
          </CardActions>

        </Card>
      </Grid>
    );
  } else {
    window.location.href = "/";
  }


};
