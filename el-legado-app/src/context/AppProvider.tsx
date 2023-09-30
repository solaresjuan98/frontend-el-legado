
import { AppContext } from "./config";
// import { PaymentData } from "../hooks/interfaces";
import { useState } from "react";
import { usePayment } from "../hooks/usePayment";
import axios from "axios";
export interface Payment {
    success_url?: string;
    cancel_url?: string;
    line_items?: never[];
    mode: string;
    valid: boolean;
}

const userPayment: Payment = {
    mode: 'payment',
    valid: false

}

export const AppProvider = ({ children }: any) => {

    //const { validatePayment, validPayment } = usePayment();
    const [paymentState, setPaymentState] = useState(userPayment);
    const idSessionStr = localStorage.getItem('idSession');

    const storePayment = () => {

        setPaymentState({
            ...paymentState,
            // user: updatedData.user,
            // line_items: updatedData.line_items,
        })

    }


const validatePaymentSession = async () => {
    if (idSessionStr) {
        try {
            const response = await axios.post(
                `https://uuj7unf2r3.execute-api.us-east-2.amazonaws.com/validate-payment`,
                {
                    sessionId: idSessionStr,
                }
            );

            const isValidPayment = response.data.status;

            setPaymentState(prevState => ({
                ...prevState,
                valid: isValidPayment
            }));

        } catch (error) {
            console.log(error);
        }
    }
}

 

    return (
        <AppContext.Provider value={{
            cardPaymentUser: userPayment,
            storePayment,
            validatePaymentSession
        }}>
            {children}
        </AppContext.Provider>
    )

}
