import { ChangeEvent, useRef, useState } from "react";

export const useForm = <T>(initialState: T, errorCallback: (campo: string, mensaje: string) => void, removeErrorCallback: (campo: string) => void) => {
 

  const [formData, setFormData] = useState<T>(initialState);
  const numberInputRef = useRef<HTMLInputElement | null>(null);
  const [numberInputIsTouched, setNumberInpuIsTouched] = useState(false);
 

  const onChangeForm = (ev: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = ev.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    if (name === 'numero_entradas' && parseInt(value, 10) > 10) {
      errorCallback('numero_entradas', 'El número de entradas no puede ser mayor a 10');
    }else {
      removeErrorCallback('numero_entradas');
    }
  };
 

  const isNotEmpty = (field: string): boolean => { 
    return field.trim().length > 0 ? true : false;
  };

  const handleInputBlur = () => {
    setNumberInpuIsTouched(true);
 
  };
  const resetForm = () => {
    setFormData(prevState => ({
      ...prevState,
      nombre: "",
      telefono: 0,
      correo: "",
      congregacion: "",
      numero_entradas: 0,
      numeroBoleta: "",
      detalle_transaccion: [],
    }));
  };
  const hasEmailFormat = (field: string) => {
    const emailRegex = /\S+@\S+\.\S+/;

    return emailRegex.test(field) ? true : false;
  };

  return {
    onChangeForm,
    isNotEmpty,
    hasEmailFormat,
    formData,
    resetForm,
    handleInputBlur,
    numberInputIsTouched,
    numberInputRef,
  };
};
