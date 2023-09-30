import { useEffect, useContext } from 'react'
import { AppContext } from '../context/config';
import { Navigate } from 'react-router-dom';


const userDataStr = localStorage.getItem('userData');
export const ValidacionPago = () => {

    const { validatePaymentSession, cardPaymentUser } = useContext(AppContext);

    useEffect(() => {

        validatePaymentSession();


    }, [cardPaymentUser.valid])


    // * Validar si el usuario existe y es valido
    if(cardPaymentUser.valid && userDataStr) {
        return <Navigate to="/pago-exitoso" />
    }else {
        return <Navigate to="/pago-error" />
    }



}
