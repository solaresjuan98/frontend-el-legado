export interface Expositor {
  nombre: string;
  bio: string;
  img?: string;
}

export interface PagoBaseInterface {
  nombre: string;
  telefono: number;
  correo: string;
  congregacion: string;
  numero_entradas: number;
  numero_autorizacion:number;
  // datos entrada
  detalle_transaccion:  any[];
}
export interface PagoDataType {
  nombre: string;
  telefono: number;
  correo: string;
  congregacion: string;
  transaccion: {
    estado: string | null;
    enlace: string | null;
    total_pagar: number;
    numero_entradas: number;

    numero_transaccion: number;
    detalle_transaccion: any[];
  };
}
export interface ModalResumenProps {
  pago: PagoDataType | null;
  onConfirm: (confirm: boolean) => void;
  openModal: boolean;
  setOpenModal: React.Dispatch<React.SetStateAction<boolean>>;
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
export interface ErrorMessage {
  campo: string;
  mensaje: string;
}
/** 
interface DetalleEntrada {
  tipo1: boolean; // * 12-16 años
  tipo2: boolean; // * 16-20 años
  tipo3: boolean; // * 20-24 años
  estaBautizado: boolean; // * Está bautizado?
}
*/