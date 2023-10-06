import { useForm } from "../../hooks/useForm";
import { useState } from "react";
import  { ChangeEvent } from "react";
// mui
import { Checkbox, Radio, RadioGroup } from "@mui/joy";
import { Grid } from "@mui/material"; // Importa el componente Grid
import BusinessIcon from "@mui/icons-material/Business";
import Button from "@mui/joy/Button";
import Card from "@mui/joy/Card";
import CardActions from "@mui/joy/CardActions";
import CardContent from "@mui/joy/CardContent";
import ModalResumen from "./ModalResumen";
import Divider from "@mui/joy/Divider";
import EmailIcon from "@mui/icons-material/Email";
import FormControl from "@mui/joy/FormControl";
import FormLabel from "@mui/joy/FormLabel";
import InfoOutlined from "@mui/icons-material/InfoOutlined";
import Input from "@mui/joy/Input";
import LocalActivityIcon from "@mui/icons-material/LocalActivity";
import PersonIcon from "@mui/icons-material/Person";
import PhoneIcon from "@mui/icons-material/Phone";
import Typography from "@mui/joy/Typography";
import { ErrorMessage } from "../util/interfaces";
import TarjetaPago from "./TarjetaPago";
import { usePayment } from "../../hooks/usePayment";
import { OrderData } from "../../hooks/interfaces";
import { PagoDataType } from "../util/interfaces";
import Select from "@mui/joy/Select";
import Option from "@mui/joy/Option";
export const PagoTarjeta = () => {
  // const inputRef = useRef<HTMLInputElement | null>(null);

  const [errorData, setErrorData] = useState<ErrorMessage[]>([]);
  const [detallesTransaccion, setDetallesTransaccion] = useState<any[]>([])
  const [paymentInfo, setpaymentinfo] = useState<any>(null)
  const [pagoData, setPagoData] = useState<PagoDataType | null>(null);
  const [openModal, setOpenModal] = useState(false);
 
  // * Hook payment
  const { createCheckoutSession } = usePayment();

  const agregarNuevoError = (campo: string, mensaje: string) => {
    setErrorData((prevErrors) => [...prevErrors, { campo, mensaje }]);
  };
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const removeErrorByCampo = (campo: any) => {
    setErrorData((prevErrorData) =>
      prevErrorData.filter((error) => error.campo !== campo)
    );
  };

  const {
    formData,
    handleInputBlur,
    numberInputIsTouched,
    onChangeForm,
  } = useForm(
    {
      nombre: "",
      telefono: 0,
      correo: " ",
      congregacion: " ",
      numero_entradas: 0,
      numeroBoleta: "",
      detalle_transaccion: detallesTransaccion,
      numero_autorizacion: 0,
    },
    agregarNuevoError, // pasando la función de error callback aquí
    removeErrorByCampo // pasando la función de remover error callback aquí
  );

  const numberMap = Array.from(
    { length: formData.numero_entradas },
    (_, index) => index + 1
  );
  const totalAmount = numberMap.length * 150;
  const formattedTotal = `Q${totalAmount.toFixed(2)}`;
  const esRangoEdadValido = () => {
    const esvalido =Number(formData.numero_entradas)===detallesTransaccion.length
    /*if (detallesTransaccion.length>0){
      
      if (Number(formData.numero_entradas)===detallesTransaccion.length){
        esvalido=true
        console.log("valido")
      } else {
        agregarNuevoError("rango", "Se tiene un ingresar un rango de edad para todas las entradas que desea comprar");
        console.log("no valido")
      }  

    }*/
    
    return esvalido
  };
  const onSendPayment = () => {
    setOpenModal(true);

    
    formData.detalle_transaccion = detallesTransaccion;
       const datosEntradas: OrderData[] = [];
    detallesTransaccion.map((item) => {
      datosEntradas.push(
        {
          price_data: {
            product_data: {
              name: `Entrada de rango de edad ${item.rango_edad}`,
              description: 'Entrada para congreso'
            },
            currency: 'gtq',
            unit_amount: 150 * 100
          },
          quantity: formData.numero_entradas
        }
      )
    })


    const paymentdata: any = {
      nombre: formData.nombre,
      telefono: formData.telefono,
      correo: formData.correo,
      congregacion: formData.congregacion,
      transaccion: {
          enlace: "_",
          estado: "en_proceso",
          total_pagar: totalAmount,
          numero_entradas: formData.numero_entradas,
          numero_transaccion: "0",
          detalle_transaccion: detallesTransaccion,
      },
      line_items: datosEntradas,
      mode: 'payment'
    };

    // console.log(datosEntradas);
    setpaymentinfo(paymentdata)
    setPagoData(paymentdata)
  
  }


  /*handle para las edades */
  const handleRadioChange = (index: number, value: string) => {
    setDetallesTransaccion((prev) => {
      const updated = [...prev];
      if (!updated[index]) {
        updated[index] = { rango_edad: value, esta_bautizado: false };
      } else {
        updated[index].rango_edad = value;
      }
      return updated;
    });
  };

  const handleCheckboxChange = (index: number, checked: boolean) => {
    setDetallesTransaccion((prev) => {
      const updated = [...prev];
      if (!updated[index]) {
        updated[index] = { rango_edad: "", esta_bautizado: checked };
      } else {
        updated[index].esta_bautizado = checked;
      }
      return updated;
    });
  };

  const validateTelefono = (value: string) => {
    const telefonoRegExp = /^\+\d+(\s+)?\d+\s*$/;

    return telefonoRegExp.test(value);
  };

  const [countryCode, setCountryCode] = useState("+502");
  const countryAndStates = [
    { label: "Argentina", value: "+54" },
    { label: "Bolivia", value: "+591" },
    { label: "Brasil", value: "+55" },
    { label: "Chile", value: "+56" },
    { label: "Colombia", value: "+57" },
    { label: "Costa Rica", value: "+506" },
    { label: "Cuba", value: "+53" },
    { label: "República Dominicana +1-809 ", value: "+1-809" },
    { label: "República Dominicana 1-829 ", value: "+1-829" },
    { label: "República Dominicana 1-849", value: "+1-849" },
    { label: "Ecuador", value: "+593" },
    { label: "El Salvador", value: "+503" },
    { label: "Guatemala", value: "+502" },
    { label: "Honduras", value: "+504" },
    { label: "México", value: "+52" },
    { label: "Nicaragua", value: "+505" },
    { label: "Panamá", value: "+507" },
    { label: "Paraguay", value: "+595" },
    { label: "Perú", value: "+51" },
    { label: "Puerto Rico", value: "+1-787" },
    { label: "Puerto Rico", value: "+1-939" },
    { label: "Uruguay", value: "+598" },
    { label: "Venezuela", value: "+58" },
    { label: "Belice", value: "+501" },
    { label: "Guyana", value: "+592" },
    { label: "Surinam", value: "+597" },
    { label: "Guyana Francesa", value: "+594" },
    { label: "Estados Unidos", value: "+1" },
    { label: "Canadá", value: "+1" },
    // ... (puedes seguir agregando más países si es necesario)
  ];
  const handleSelectChange = (event: any, value: any) => {
    const newCountryCode = value;
    setCountryCode(newCountryCode);

    console.log(event);
    const newEvent = {
      target: {
        name: "telefono",
        value:
          newCountryCode +
          (formData.telefono.toString().slice(countryCode.length) === "0"
            ? ""
            : formData.telefono.toString().slice(countryCode.length)) +
          " ",
      },
    } as unknown as ChangeEvent<HTMLInputElement>;

    onChangeForm(newEvent);
  };

  const handleModalConfirm = (confirm: boolean) => {
    if (confirm) {
      if (paymentInfo !== null) {
        createCheckoutSession(paymentInfo);
      } else {
        console.error("pagoData es null");
      }
    } else {
      console.log("La información no es correcta");
    }
  };
  const validateCorreo = (value: string) => {
    const correoRegExp =
      /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.(com|net|org|edu|gov|gt)){1}$/;

    return correoRegExp.test(value);
  };

  const validateNumeroEntradas = (value: string) => {
    return parseInt(value, 10) > 0;
  };
  const validateNombre = (value: string) => {
    return value && value.trim() !== "";
  };
  const onBlur = (e: any) => {
    const { name, value } = e.target;

    setErrorData((prevErrors) => {
      let newErrors = prevErrors.filter((error) => error.campo !== name);

      if (name === "telefono" && !validateTelefono(value)) {
        newErrors.push({
          campo: name,
          mensaje: "Número de teléfono no válido",
        });
      } else if (name === "correo" && !validateCorreo(value)) {
        newErrors.push({
          campo: name,
          mensaje: "Correo electrónico no válido",
        });
      } else if (name === "numero_entradas" && !validateNumeroEntradas(value)) {
        newErrors.push({
          campo: name,
          mensaje: "El número de entradas debe ser mayor a 0",
        });
      } else if (name === "nombre" && !validateNombre(value)) {
        newErrors.push({
          campo: name,
          mensaje: "Debe ingresar un nombre para poder realizar su transacción",
        });
      } else if (name === "numero_autorizacion" && !validateNombre(value)) {
        newErrors.push({
          campo: name,
          mensaje:
            "Debe ingresar un numero de autorizacion para poder realizar su transacción",
        });
      }

      return newErrors;
    });
  };

  return (
    <Grid container>
        {openModal && (
        <ModalResumen
          pago={pagoData}
          onConfirm={handleModalConfirm}
          openModal={openModal}
          setOpenModal={setOpenModal}
        />
      )}
        <Grid item xs={12} md={12}>
      <Card
          variant="outlined"
          sx={{
            maxHeight: "max-content",
            maxWidth: "100%",
            mx: "auto",
            display: "flex", // Añadido esto
            flexDirection: "column", // Añadido esto
            justifyContent: "center", // Añadido esto
            alignItems: "center", // Añadido esto
            overflow: "auto",
            resize: "horizontal",
          }}
        >
          <Typography
            level="title-lg"
            textColor={"#B5D534"}
            startDecorator={<InfoOutlined />}
          >
            Información Personal
          </Typography>
          <Divider inset="none" />
          <CardContent
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
            <FormControl        sx={{ width: "100%" }}>
              <FormLabel sx={{ color: "#E3FEF8" }}>Nombre </FormLabel>
              <Input
                endDecorator={<PersonIcon />}
                name="nombre"
                autoComplete="off"
                onBlur={onBlur}
                onChange={onChangeForm}
                value={formData.nombre}
                sx={{ width: "100%" }}
              />
              {errorData
                .filter((error) => error.campo === "nombre")
                .map((error, index) => (
                  <div key={index} style={{ color: "red" }}>
                    {error.mensaje}
                  </div>
                ))}
       
            </FormControl>

              <br/>
              <FormControl        sx={{ width: "100%" }}>
              <FormLabel sx={{ color: "#F8F0FD" }}>
                Selecciona el país de donde nos visitas
              </FormLabel>
              <Select
                placeholder="Seleccione un país..."
                onChange={handleSelectChange}
                value={countryCode}
              >
                {countryAndStates.map((item, index) => (
                  <Option key={index} value={item.value}>
                    {item.label}
                  </Option>
                ))}
              </Select>
            </FormControl>
            <br/>
            <FormControl        sx={{ width: "100%" }}>
              <FormLabel sx={{ color: "#F8F0FD" }}>Teléfono</FormLabel>
              <Input
                endDecorator={<PhoneIcon />}
                name="telefono"
                onChange={onChangeForm}
                onBlur={onBlur}
                sx={{ width: "100%" }}
                value={formData.telefono ? formData.telefono : "+502 "}
              />

              {errorData
                .filter((error) => error.campo === "telefono")
                .map((error, index) => (
                  <div key={index} style={{ color: "red" }}>
                    {error.mensaje}
                  </div>
                ))}
            </FormControl>
            <br/>
            <FormControl        sx={{ width: "100%" }}>
              <FormLabel sx={{ color: "#F8F0FD" }}>Correo </FormLabel>
              <Input
                endDecorator={<EmailIcon />}
                name="correo"
                onChange={onChangeForm}
                onBlur={onBlur}
                sx={{ width: "100%" }}
                value={formData.correo}
              />
              {errorData
                .filter((error) => error.campo === "correo")
                .map((error, index) => (
                  <div key={index} style={{ color: "red" }}>
                    {error.mensaje}
                  </div>
                ))}
            </FormControl>
            <br/>
            <FormControl        sx={{ width: "100%" }}>
              <FormLabel sx={{ color: "#E3FEF8" }}>Congregación</FormLabel>
              <Input
                endDecorator={<BusinessIcon />}
                name="congregacion"
                autoComplete="off"
                onChange={onChangeForm}
                value={formData.congregacion}
         
              />
            </FormControl>
            <br/>
            <FormControl        sx={{ width: "100%" }}>
              <FormLabel sx={{ color: "#E3FEF8" }}>
                Número de Entradas
              </FormLabel>
              <Input
                type="number"
                endDecorator={<LocalActivityIcon />}
                name="numero_entradas"
                onChange={onChangeForm}
                onBlur={handleInputBlur}
                sx={{ width: "100%" }}
                value={formData.numero_entradas}
                slotProps={{
                  input: {
                    min: 1,
                    max: 10,
                    step: 1,
                  },
                }}
              />
              {errorData
                .filter((error) => error.campo === "numero_entradas")
                .map((error, index) => (
                  <div key={index} style={{ color: "red" }}>
                    {error.mensaje}
                  </div>
                ))}
            </FormControl>

            {/* validar cantidad de entradas aca */}
   
              <br/>
              {numberInputIsTouched &&
              numberMap.map((item, index) => (
                <>
                  <Grid
                     key={index}
                   sx={{ 
                    display: "grid",
                    gap: "1em",
                    gridColumn: "1/-1",
                    maxWidth: "1200px", // Ajusta según necesidad
                    width: "100%"
                 }}
                  >
                    <Card variant={"soft"} sx={{ width: "100%" }}>
                      <Typography level="h4" sx={{ color: "#B5D534" }}>
                        Entrada {item}
                      </Typography>
                      <RadioGroup
                        value={detallesTransaccion[index]?.rango_edad ?? ""}
                        onChange={(e) =>
                          handleRadioChange(index, e.target.value)
                        }
                
                      >
                        <Radio
                          value="menor de 12 años"
                          label="menor de 12 años"
                        />
                        <Radio value="12-16" label="12-16 años" />
                        <Radio value="16-20" label="16-20 años" />
                        <Radio value="20-24" label="20-24 años" />
                        <Radio value="mayor a 25 años" label="mayor a 25 años" />
                      </RadioGroup>
                      <Checkbox
                        label=" Bautizado"
                        onChange={(e) =>
                          handleCheckboxChange(index, e.target.checked)
                        }
                      />
                    </Card>
                    {errorData
                  .filter((error) => error.campo === "rango")
                  .map((error, index) => (
                    <div key={index} style={{ color: "red" }}>
                      {error.mensaje}
                    </div>
                  ))}
                  </Grid>
                  <br />
                </>
              ))}

            <CardActions
              sx={{
                gridColumn: "1/-1",
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <Grid container direction="row" spacing={2}>
                <Grid
                  item
                  xs={6}
                  sm={6}
                  md={6}
                  style={{ display: "flex", justifyContent: "center" }}
                >
                  <TarjetaPago total={formattedTotal} />
                </Grid>
                <Grid
                  item
                  xs={6}
                  sm={6}
                  md={6}
                  container
                  alignItems="center"
                  justifyContent="center"
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    height: "100%",
                    marginTop: "30px",
                  }}
                >
                  <Button
                    variant="plain"
                    style={{
                      color:
                        totalAmount > 0 &&
                        errorData.length === 0 &&
                        formData.nombre &&
                        formData.telefono &&
                        formData.numero_autorizacion &&
                        formData.correo  
                          ? "#FFFFFF"
                          : "#FFFFFF",
                      background:
                      totalAmount <= 0 ||
                      errorData.length > 0   ||
                      !formData.nombre ||
                      !formData.telefono ||
                      !formData.correo ||!esRangoEdadValido() 
                          ? "#19004B"
                          : "#3E00B9",
                      width: "80%",
                      height: "100%",
                    }}
                    onClick={onSendPayment}
                    disabled={
                      totalAmount <= 0 ||
                      errorData.length > 0 ||
                      !formData.nombre ||
                      !formData.telefono ||
                      !formData.correo ||!esRangoEdadValido() 
                    }
                  >
                    Pagar con tarjeta
                  </Button>
                </Grid>
              </Grid>
            </CardActions>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
};
