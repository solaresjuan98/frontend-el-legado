import axios from "axios"


export const usePayment = () => {


    const createCheckoutSession = async () => {

        await axios.post('https://uuj7unf2r3.execute-api.us-east-2.amazonaws.com/create-checkout-session', {
            
        })
    }

    return {

    }
}
