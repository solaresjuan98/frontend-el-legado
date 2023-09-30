import { useForm } from "../../hooks/useForm";
import { useState } from "react";
// mui
import { Checkbox, Radio, RadioGroup } from "@mui/joy";
import { Grid } from "@mui/material"; // Importa el componente Grid
import BusinessIcon from "@mui/icons-material/Business";
import Button from "@mui/joy/Button";
import Card from "@mui/joy/Card";
import CardActions from "@mui/joy/CardActions";
import CardContent from "@mui/joy/CardContent";

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

export const PagoTarjeta = () => {
  // const inputRef = useRef<HTMLInputElement | null>(null);

  const [errorData, setErrorData] = useState<ErrorMessage[]>([]);
  const [detallesTransaccion, setDetallesTransaccion] = useState<any[]>([])

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
      nombre: "Josue Lopez",
      telefono: 59099770,
      correo: "josue99@correo.com",
      congregacion: "centro historico",
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

  const onSendPayment = () => {
    formData.detalle_transaccion = detallesTransaccion;
    console.log(formData);


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


    const paymentInfo: any = {
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


    createCheckoutSession(paymentInfo);
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


  return (
    <Grid container>
      <Grid item xs={12} md={110}>
        <Card
          variant="outlined"
          sx={{
            maxHeight: "max-content",
            maxWidth: "100%",
            mx: "auto",
            overflow: "auto",
            resize: "horizontal",
          }}
        >
          <Typography
            level="title-lg"
            textColor={"#C3FCEF"}
            startDecorator={<InfoOutlined />}
          >
            Información Personal
          </Typography>
          <Divider inset="none" />
          <CardContent
            sx={{
              display: "grid",
              gap: 1.5,
              gridTemplateColumns: {
                xs: "1fr",
                sm: "repeat(2, 1fr)",
                md: "repeat(2, 1fr)",
              },
              "@media (max-width: 350px)": {
                padding: "0.5rem", // O cualquier otro valor que se adapte
                margin: 0,
              },
            }}
          >
            <FormControl sx={{ gridColumn: "1/-1" }}>
              <FormLabel sx={{ color: "#E3FEF8" }}>Nombre </FormLabel>
              <Input
                endDecorator={<PersonIcon />}
                name="nombre"
                autoComplete="off"
                onChange={onChangeForm}
                value={formData.nombre}
              />
            </FormControl>

            <FormControl sx={{ gridColumn: "1/-1" }}>
              <FormLabel sx={{ color: "#E3FEF8" }}>Télefono </FormLabel>
              <Input
                endDecorator={<PhoneIcon />}
                name="telefono"
                autoComplete="off"
                onChange={onChangeForm}
                value={formData.telefono}
              />
            </FormControl>

            <FormControl sx={{ gridColumn: "1/-1" }}>
              <FormLabel sx={{ color: "#E3FEF8" }}>Correo </FormLabel>
              <Input
                endDecorator={<EmailIcon />}
                name="correo"
                autoComplete="off"
                onChange={onChangeForm}
                value={formData.correo}
              />
            </FormControl>
            <FormControl>
              <FormLabel sx={{ color: "#E3FEF8" }}>Congregación</FormLabel>
              <Input
                endDecorator={<BusinessIcon />}
                name="congregacion"
                autoComplete="off"
                onChange={onChangeForm}
                value={formData.congregacion}
              />
            </FormControl>
            <FormControl>
              <FormLabel sx={{ color: "#E3FEF8" }}>
                Número de Entradas
              </FormLabel>
              <Input
                type="number"
                endDecorator={<LocalActivityIcon />}
                name="numero_entradas"
                onChange={onChangeForm}
                onBlur={handleInputBlur}
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

            {numberInputIsTouched &&
              numberMap.map((item, index) => (
                <>
                  <Grid
                    sx={{
                      display: "grid",
                      gap: "1em", // Espacio entre los elementos del grid
                      gridColumn: "1/-1", // Esto hace que el `FormControl` ocupe todo el ancho disponible.
                    }}
                  >
                    <Card variant={"soft"} sx={{ width: "100%" }} key={index}>
                      <Typography level="h4" sx={{ color: "#C3FCEF" }}>
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
                      </RadioGroup>

                      <Checkbox label=" Bautizado"
                        onChange={(e) => handleCheckboxChange(index, e.target.checked)}
                      />
                    </Card>
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
                      color: "#FFFFFF",
                      background: "#3E00B9",
                      width: "80%",
                      height: "100%",
                    }}
                    onClick={onSendPayment}
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
