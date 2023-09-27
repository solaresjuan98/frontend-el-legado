
export interface OrderData {
    price_data: PriceData;
    quantity:   number;
}

export interface PriceData {
    product_data: ProductData;
    currency:     "gtq";
    unit_amount:  number;
}

export interface ProductData {
    name:        string;
    description: string;
}

export interface UserData {
    nombre: string;
    telefono: number;
    correo: string;
    congregacion: string;
    numero_entradas: number;
}

export interface PaymentData {
    // * Datos para guardar en context 
    user: UserData;
    // * Datos minimos Obligatorios para stripe
    line_items: OrderData[];
    mode: "payment";
    success_url: string;
    cancel_url: string;

}