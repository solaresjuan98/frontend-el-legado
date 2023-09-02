import React, { useState, useEffect } from "react";
import axios from "axios";

 

 

import "react-toastify/dist/ReactToastify.css";
export const UseUsuario = () => {
  // * Obtener token
  const token = localStorage.getItem("token") || "";
  


  

  const cargarBoleta = async (
     
    fileExt: string,
    imagen: string
  ) => {
    await axios
      .post(
        `${process.env.API_URL}/subirArchivo`,
        {
          imagen,
          fileExt,
           
        },
         
      )
      .then((response) => {
         
         console.log(response.data.message);
         return response.data.imageUrl
      })
      .catch((err) => {
         console.log(err);
      });
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
    cargarBoleta
  };
};

