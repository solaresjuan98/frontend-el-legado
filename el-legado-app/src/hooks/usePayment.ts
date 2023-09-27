import axios from "axios";
import { OrderData } from "./interfaces";

export const usePayment = () => {
  const createCheckoutSession = async (paymentData: OrderData[]) => {


    await axios
      .post(
        "https://uuj7unf2r3.execute-api.us-east-2.amazonaws.com/create-checkout-session",
        {
          line_items: paymentData,
          mode: "payment",
          success_url: `https://www.conjoveneslegado.com/pago-exitoso`, // * Redigir a frontend, y enviar correo (ver flujo después)
          cancel_url: 'https://uuj7unf2r3.execute-api.us-east-2.amazonaws.com/cancel' // * Redirigr a frontend, pero con una vista que diga que no se pudo
  
        }
      )
      .then((res) => {
        console.log(res.data);
        window.open(res.data.url, '_blank');
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return {
    createCheckoutSession,
  };
};
