import {  useEffect,  useState } from 'react'
import CircularProgress from '@mui/joy/CircularProgress';
import { Navigate } from 'react-router-dom';
import { PagoExitoso } from './PagoExitoso';

import Typography from "@mui/joy/Typography";

import { usePayment } from "../hooks/usePayment";
const idSessionStr = localStorage.getItem('idSession');
const userDataStr = localStorage.getItem('userData');
export const ValidacionPago = () => {
    const { validatePayment} = usePayment();
    const [validador, setValidador] = useState(false);
    const [cargando, setCargando] = useState(true);
  
    useEffect(() => {

        verificarInfo();

    }, [validador]);


    const verificarInfo = async () => {
        if (idSessionStr) {

            const variable = await validatePayment(idSessionStr)||false;
          
            setValidador(variable)
   
            setCargando(false); //
        }
    }

    if (cargando) { // Si está cargando, mostramos un mensaje de espera
        return (
            <div style={{ 
                display: 'flex', 
                flexDirection: 'column',
                justifyContent: 'center', 
                alignItems: 'center', 
                width: '100%',
                marginTop: '200px',
                marginBottom: '300px'
            }}>
      
              <Typography
                  level="h1"
                  textColor={"#E3FEF8"}
                  style={{ textAlign: "center", marginTop: '20px' }}  // Added margin-top for spacing
              >
                  Estamos validando tu pago apreciable hermano(a)!
              </Typography>
              <br/>
              <CircularProgress size="lg" />
            </div>
          );
    }
    // * Validar si el usuario existe y es valido
    if (validador && userDataStr) {

        return <PagoExitoso validador={validador} />

         return (
             <h1>
                 exito!

                 <pre>
                     {
                         JSON.stringify(validador)
                     }
                 </pre>
             </h1>


         )
    } else {
        // return (
        //     <div>
        //         Error
        //         <pre>
        //             {
        //                 JSON.stringify(validador)
        //             }
        //         </pre>
        //     </div>
        // )

        return <Navigate to="/pago-error" />
    }



}
