export interface Expositor {
  nombre: string;
  bio: string;
  img?: string;
}

// Interface de Pago Tarjeta
export interface PagoTarjetaInterface 
{
  nombre: string;
  telefono: number;
  correo: string;
  congregacion: string;
  numeroEntradas: number;
  // datos entrada
  datosEntrada: DetalleEntrada[];
  // datos tarjeta
  numeroTarjeta: number;
  fechaVencimiento: string;
  codigoCVC: number;
  nombreTarjeta: string;
}

interface DetalleEntrada {
  tipo1: boolean; // * 12-16 años
  tipo2: boolean; // * 16-20 años
  tipo3: boolean; // * 20-24 años
  estaBautizado: boolean; // * Está bautizado?
}  