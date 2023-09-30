import { createContext } from "react";
import { PaymentData } from "../hooks/interfaces";
import { Payment } from "./AppProvider";

interface IContextProps {
  cardPaymentUser: Payment;
  storePayment: (updatedData: PaymentData) => void;
  validatePaymentSession: () => Promise<void>;
}

export const AppContext = createContext({} as IContextProps);
