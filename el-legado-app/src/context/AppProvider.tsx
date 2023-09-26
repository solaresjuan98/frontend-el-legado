import { PagoBaseInterface } from "../components/util/interfaces"
import { AppContext } from "./config"


const user: PagoBaseInterface = {
    nombre: '',
    congregacion: '',
    correo: '',
    detalle_transaccion: [],
    numero_autorizacion: 0,
    numero_entradas: 0,
    telefono: 0

}

export const AppProvider = ({ children }: any) => {

    return (
        <AppContext.Provider value={{
            user
        }}>
            {children}
        </AppContext.Provider>
    )

}
