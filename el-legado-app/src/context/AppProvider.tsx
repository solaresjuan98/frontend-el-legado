
import { AppContext } from "./config";
// import { PaymentData } from "../hooks/interfaces";
import { useState } from "react";
import { usePayment } from "../hooks/usePayment";

export interface Payment {
    success_url: string;
    cancel_url: string;
    line_items: never[];
    mode: string;
    valid: boolean;
}

const userPayment: Payment = {

    success_url: '',
    cancel_url: '',
    line_items: [],
    mode: 'payment',
    valid: false

}

export const AppProvider = ({ children }: any) => {

    const { validatePayment, validPayment } = usePayment();
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
            await validatePayment(idSessionStr);
            setPaymentState({
                ...paymentState,
                valid: validPayment
            })
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
