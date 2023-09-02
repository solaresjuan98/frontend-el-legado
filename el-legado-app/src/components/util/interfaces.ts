export interface Expositor {
  nombre: string;
  bio: string;
  img?: string;
}

interface PagoBaseInterface {
  nombre: string;
  telefono: number;
  correo: string;
  congregacion: string;
  numeroEntradas: number;
  // datos entrada
  datosEntrada: DetalleEntrada[] | [];
}

// Interface de Pago Tarjeta
export interface PagoTarjetaInterface extends PagoBaseInterface {
  // datos tarjeta
  numeroTarjeta: number;
  fechaVencimiento: string;
  codigoCVC: number;
  nombreTarjeta: string;
}

export interface PagoBoletaInterface extends PagoBaseInterface {
  // No additional properties needed for PagoBoletaInterface
  numeroBoleta: string;
}

interface DetalleEntrada {
  tipo1: boolean; // * 12-16 años
  tipo2: boolean; // * 16-20 años
  tipo3: boolean; // * 20-24 años
  estaBautizado: boolean; // * Está bautizado?
}
