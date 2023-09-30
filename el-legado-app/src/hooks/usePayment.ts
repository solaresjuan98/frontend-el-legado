import axios from "axios";
// import { PaymentData } from "./interfaces";
import { useState } from "react";
// import { AppContext } from "../context/config";

export const usePayment = () => {
  // const { storePayment } = useContext(AppContext);
  const [validPayment, setValidPayment] = useState(false);

  const createCheckoutSession = async (userData: any) => {
    //CREAR UN TOKEN , DECODIFICAR UN TOKEN SI?
    await axios
      .post(
        "https://uuj7unf2r3.execute-api.us-east-2.amazonaws.com/create-checkout-session",
        {
          line_items: userData.line_items,
          mode: "payment",
          success_url: "https://www.conjoveneslegado.com/validacion", //"https://www.conjoveneslegado.com/validacion", // * Redigir a frontend, y enviar correo (ver flujo después)
          cancel_url: "https://www.conjoveneslegado.com/pago-error", // * Redirigr a frontend, pero con una vista que diga que no se pudo
        }
      )
      .then((res) => {
        // ! aqui no se ha validado el pago (no generás nada)
        console.log(res.data);
        // console.log(userData);

        localStorage.setItem("userData", JSON.stringify(userData));
        localStorage.setItem("idSession", JSON.stringify(res.data.id));
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
    await axios
      .post(
        `https://uuj7unf2r3.execute-api.us-east-2.amazonaws.com/validate-payment`,
        {
          sessionId,
        }
      )
      .then((response) => {
        console.log(response.data.status);

        if (response.data.status === true) {
          setValidPayment(true);
        }
      })
      .catch((err) => {
        console.log(err);
        setValidPayment(false);
      });
  };

  return {
    createCheckoutSession,
    validatePayment,
    validPayment,
  };
};
