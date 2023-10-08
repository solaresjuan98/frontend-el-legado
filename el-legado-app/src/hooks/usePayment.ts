import axios from "axios";
// import { PaymentData } from "./interfaces";
import { useState, useEffect } from "react";
// import { AppContext } from "../context/config";

export const usePayment = () => {
  const [validPayment, setValidPayment] = useState(false);

  const createCheckoutSession = async (userData: any) => {
    //CREAR UN TOKEN , DECODIFICAR UN TOKEN SI?
    await axios
      .post(
        "https://uuj7unf2r3.execute-api.us-east-2.amazonaws.com/create-checkout-session",
        {
          line_items: userData.line_items,
          mode: "payment",
          success_url: "https://www.conjoveneslegado.com/validacion", //"https://www.conjoveneslegado.com/validacion",
          cancel_url: "https://www.conjoveneslegado.com/pago-error", //"https://www.conjoveneslegado.com/pago-error",
        }
      )
      .then((res) => {
        // ! aqui no se ha validado el pago (no generás nada)
        console.log(res.data);
        // console.log(userData);

        localStorage.setItem("userData", JSON.stringify(userData));
        localStorage.setItem("idSession", res.data.id);
        // storePayment(userData);

        // Reemplazar la entrada actual en el historial
        // Agregar una nueva entrada en el historial
        // window.history.pushState(null, '', window.location.href);

        // // Luego, puedes redirigir a la nueva página
        window.location.href = res.data.url;
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const validatePayment = async (sessionId: string) => {
    // console.log(sessionId);
    let validacion=false
    await axios
      .post(
        `https://uuj7unf2r3.execute-api.us-east-2.amazonaws.com/validate-payment`,
        {
          sessionId: sessionId,
        }
      )
      .then((response) => {
        const isValidPayment = response.data.status; // Obtener el valor de la respuesta
        //console.log("peticion: ", isValidPayment);
        setValidPayment(isValidPayment);

        if(response.data.status) {
 
          validacion=isValidPayment
     
        }
    

                
        
        
      })
      .catch((err) => {
        console.log(err);
        setValidPayment(false);
      });

      return validacion

  };
 

  useEffect(() => {
    // const idSession = localStorage.getItem("idSession");
    // if (idSession) {
    //   validatePayment(idSession);
    // }
  }, []);

  return {
    createCheckoutSession,
    validatePayment,
    validPayment
  };
};
