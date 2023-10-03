import { AppContext } from "./config";
import { useState } from "react";
 

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

interface AppProviderProps {
    children: React.ReactNode;
}

export const AppProvider: React.FC<AppProviderProps> = ({ children }) => {
    const [paymentState, setPaymentState] = useState(userPayment);
  

    const storePayment = () => {
        // Esta función parece estar incompleta. Actualiza el estado con la información que necesites.
        setPaymentState({
            ...paymentState,
            // user: updatedData.user,
            // line_items: updatedData.line_items,
        });
    }

    const validatePaymentSession = async () => {
        // ... aquí tu código para validar la sesión de pago ...

        // Si la validación es exitosa, puedes actualizar el estado "valid" a true
        setPaymentState(prevState => ({
            ...prevState,
            valid: true
        }));
        console.log("validate",paymentState)
    }

    return (
        <AppContext.Provider value={{
            cardPaymentUser: paymentState, // Cambiado a paymentState
            storePayment,
            validatePaymentSession
        }}>
            {children}
        </AppContext.Provider>
    );
}
