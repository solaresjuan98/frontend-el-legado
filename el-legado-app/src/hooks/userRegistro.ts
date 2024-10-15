 
import axios from "axios";

import "react-toastify/dist/ReactToastify.css";
import {  toast } from "react-toastify";


 

export const UseRegistro =  () => {
    const cargarBoleta = async (fileExt: string, image: string): Promise<string> => {
        try {
            const response = await axios.post(`https://uuj7unf2r3.execute-api.us-east-2.amazonaws.com/subirArchivo`, {
                image,
                fileExt
            });
     
            return response.data.imageUrl;
        } catch (err) {
         
            return "error"
            throw new Error("Error al cargar la boleta");
          
        }
    };
    const envioCorreo = async (objetocorreo: any): Promise<string> => {
      const correo = objetocorreo.correo;
  
      const numero_entradas = objetocorreo.numero_entradas;
  
      const id_transaccion = objetocorreo.id_transaccion;
  
      const nombre = objetocorreo.nombre;
  
      const aceptado = objetocorreo.aceptado;
      const mensaje = objetocorreo.mensaje;
  
      try {
        const response = await axios.post(
          `https://uuj7unf2r3.execute-api.us-east-2.amazonaws.com/enviarCorreo`,
          {
            correo,numero_entradas,id_transaccion,nombre,aceptado,mensaje
          }
        );
  
        return response.data;
      } catch (err) {
        return "error";
        throw new Error("Error al cargar la boleta");
      }
    };
    const registro = async (registro:any)   => {
        const nombre= registro.nombre
        const telefono = registro.telefono
        const correo= registro.correo
        const congregacion=registro.congregacion
        const transaccion=registro.transaccion
        try {
            const response = await axios.post(`https://uuj7unf2r3.execute-api.us-east-2.amazonaws.com/transacciones`, {
               nombre,telefono,correo,congregacion,transaccion
               
            });
     
            toast.success("Su registro se ha realizado correctamente, recibira un correo de confirmación ", {
              position: "top-center",
              autoClose: 5000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "dark",
            });
    
            return response.data 
        } catch (err) {
            console.log(err);
            
            toast.error("ocurrio un error", {
              position: "top-center",
              autoClose: 5000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "dark",
            });
    
            return "error"
          
        }
    };
    const registro_tarjeta = async (registro:any)   => {
      console.log(registro)
      const nombre= registro.nombre
      const telefono = registro.telefono
      const correo= registro.correo
      const congregacion=registro.congregacion
      const transaccion=registro.transaccion
      try {
          const response = await axios.post(`https://uuj7unf2r3.execute-api.us-east-2.amazonaws.com/transacciones`, {
             nombre,telefono,correo,congregacion,transaccion
             
          });
    
          return response.data 
      } catch (err) {
          console.log(err);
       
          return "error"
        
      }
  };

  /*
  useEffect(() => {
    const timeout = setTimeout(() => {
      ObtenerUsuarios();
      ObtenerUsuariosAdmin();
    }, 3000);

    return () => clearTimeout(timeout);
  }, [usuarios]);
*/
  return {
    cargarBoleta,registro,envioCorreo,registro_tarjeta
  };
};

