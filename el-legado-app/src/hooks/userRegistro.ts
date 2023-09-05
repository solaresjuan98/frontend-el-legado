import React, { useState, useEffect } from "react";
import axios from "axios";

 

 

export const UseRegistro =  () => {
    const cargarBoleta = async (fileExt: string, image: string): Promise<string> => {
        try {
            const response = await axios.post(`https://uuj7unf2r3.execute-api.us-east-2.amazonaws.com/subirArchivo`, {
                image,
                fileExt
            });
     
            return response.data.imageUrl;
        } catch (err) {
            console.log(err);
            return "error"
            throw new Error("Error al cargar la boleta");
          
        }
    };
    
    const registro = async (registro:any)   => {
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
            console.log(response.data)
            return response.data 
        } catch (err) {
            console.log(err);
            return "error"
            throw new Error("Error al cargar la boleta");
          
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
    cargarBoleta,registro
  };
};

