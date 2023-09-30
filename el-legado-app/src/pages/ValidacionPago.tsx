import { useEffect,  useState } from 'react'
// import { AppContext } from '../context/config';
import { Navigate } from 'react-router-dom';
import { usePayment } from "../hooks/usePayment";
const idSessionStr = localStorage.getItem('idSession');
const userDataStr = localStorage.getItem('userData');
export const ValidacionPago = () => {
    const { cargardata } = usePayment();
    const [validador, setValidador] = useState(false);
    const [cargando, setCargando] = useState(true);

    useEffect(() => {

        verificarInfo();

    }, [validador]);


    const verificarInfo = async () => {
        if (idSessionStr) {

            const variable = await cargardata(idSessionStr)||false;
 
            setValidador(variable)
            setCargando(false); //
        }
    }

    if (cargando) { // Si está cargando, mostramos un mensaje de espera
        return <div>Cargando...</div>;
    }
    // * Validar si el usuario existe y es valido
    if (validador && userDataStr) {

        return <Navigate to="/pago-exitoso" />
        // return (
        //     <h1>
        //         exito!

        //         <pre>
        //             {
        //                 JSON.stringify(validador)
        //             }
        //         </pre>
        //     </h1>


        // )
    } else {
        // return (
        //     <div>
        //         Error
        //         <pre>
        //             {
        //                 JSON.stringify(validador)
        //             }
        //         </pre>
        //     </div>
        // )

        return <Navigate to="/pago-error" />
    }



}
