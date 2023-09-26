import { createContext } from "react";
import { PagoBaseInterface } from "../components/util/interfaces";



interface IContextProps {
    user: PagoBaseInterface;

}


export const AppContext = createContext({} as IContextProps);
