import { useForm } from "../../hooks/useForm";
import { useState, useRef } from "react";
import TarjetaPago from "./TarjetaPago";
import "./Formulario.css";
import React, { ChangeEvent } from "react";
import ModalResumen from "./ModalResumen";
// mui
import CircularProgress from "@mui/joy/CircularProgress";
import Alert from "@mui/joy/Alert";

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
import InsertDriveFileIcon from "@mui/icons-material/InsertDriveFile";
import LocalActivityIcon from "@mui/icons-material/LocalActivity";
import PersonIcon from "@mui/icons-material/Person";
import ConfirmationNumberIcon from "@mui/icons-material/ConfirmationNumber";

import PhoneIcon from "@mui/icons-material/Phone";
import Typography from "@mui/joy/Typography";
import Select from "@mui/joy/Select";
import Option from "@mui/joy/Option";
//interfaces
import { ErrorMessage } from "../util/interfaces";
import { PagoBoletaInterface } from "../util/interfaces";
import { PagoDataType } from "../util/interfaces";
//hooks
import { UseRegistro } from "../../hooks/userRegistro";

export const PagoBoleta = () => {
  const { registro } = UseRegistro();
  const [detallesTransaccion, setDetallesTransaccion] = useState<any[]>([]);
  const [openModal, setOpenModal] = useState(false);
  const [pagoData, setPagoData] = useState<PagoDataType | null>(null);

  const [errorData, setErrorData] = useState<ErrorMessage[]>([]);

  const handlePago = () => {
    const pago: PagoDataType = {
      nombre: formData.nombre,
      telefono: formData.telefono,
      correo: formData.correo,
      congregacion: formData.congregacion,
      transaccion: {
        enlace: linkImagen,
        estado: "en_proceso",
        total_pagar: totalAmount,
        numero_entradas: formData.numero_entradas,
        tipo_pago: "boleta",
        numero_autorizacion: formData.numero_autorizacion,
        detalle_transaccion: detallesTransaccion,
      },
    };
 

      setOpenModal(true);
   setPagoData(pago);
  };
  const handleSubmit = async (pagoData: PagoDataType) => {
    // Llama a la función de registro con los datos de pago

    await registro(pagoData);

    resetForm();
    setCountryCode("");
    formData.numero_entradas = 0;
    setLinkImagen(null);
    setPreviewImage(
      "https://fondos-legado.s3.us-east-2.amazonaws.com/boletavacia.jpg"
    );
    setDetallesTransaccion([]);
  };

  const handleModalConfirm = (confirm: boolean) => {
    if (confirm) {
      if (pagoData !== null) {
        handleSubmit(pagoData);
      } else {
        console.error("pagoData es null");
      }
    } else {
      console.log("La información no es correcta");
    }
  };

  const [loading, setLoading] = useState<boolean>(false);
  const [errorloading, seterrorLoading] = useState<boolean>(false);
  const { cargarBoleta } = UseRegistro();
  const fileInputRef = useRef<HTMLInputElement | null>(null);
  const [linkImagen, setLinkImagen] = useState<string | null>(null);

  const [previewImage, setPreviewImage] = useState<string>(
    "https://fondos-legado.s3.us-east-2.amazonaws.com/boletavacia.jpg"
  );

  const handleFileInputClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

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

  /* handle para cargar la fotoooo */
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!esRangoEdadValido()) {
      agregarNuevoError(
        "rango",
        "Se tiene un ingresar un rango de edad para todas las entradas que desea comprar"
      );
    }
    const files = e.target.files;

    if (files && files.length > 0) {
      const file = files[0];
      // Obtener la extensión del archivo
      const fileExtension = "." + (file.name.split(".").pop() || "");

      // Para convertir a base64
      const reader = new FileReader();

      reader.onloadend = function () {
        const base64String = reader.result as string;

        cargar(base64String, fileExtension);
      };

      reader.readAsDataURL(file);
    }
  };
  const esRangoEdadValido = () => {
    const esvalido =
      Number(formData.numero_entradas) === detallesTransaccion.length;

    /*if (detallesTransaccion.length>0){
      
      if (Number(formData.numero_entradas)===detallesTransaccion.length){
        esvalido=true
        console.log("valido")
      } else {
        agregarNuevoError("rango", "Se tiene un ingresar un rango de edad para todas las entradas que desea comprar");
        console.log("no valido")
      }  

    }*/

    return esvalido;
  };
  /* const handlevalidarRango = () => {
    if (!esRangoEdadValido()) {
      console.log("no valido?")
      agregarNuevoError("rango", "Se tiene un ingresar un rango de edad para todas las entradas que desea comprar");
      return;
    }
  
    // Aquí el código para procesar o enviar los datos de detallesTransaccion...
  };*/
  const agregarNuevoError = (campo: string, mensaje: string) => {
    setErrorData((prevErrors) => [...prevErrors, { campo, mensaje }]);
  };
  const removeErrorByCampo = (campo: any) => {
    setErrorData((prevErrorData) =>
      prevErrorData.filter((error) => error.campo !== campo)
    );
  };

  const cargar = async (image: string, fileExt: string) => {
    setLoading(true);
    const imageUrl = await cargarBoleta(fileExt, image);
    if (imageUrl == "error") {
      seterrorLoading(true);
      setLoading(false);

      agregarNuevoError("image", "imagen no valida");
    } else {
      removeErrorByCampo("image");
      setLinkImagen(imageUrl);
      seterrorLoading(false);
      setLoading(false);
      setPreviewImage(imageUrl);
    }
  };

  /**
   *
   * validaciones
   */
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

  const handleSelectChange = (newCountryCode: string) => {
    setCountryCode(newCountryCode);
    
    // Imprime el nuevo código de país seleccionado para depuración
    console.log("Nuevo código de país:", newCountryCode);
  
    // Obtiene el teléfono actual sin el código de país anterior
    const phoneWithoutCode = formData.telefono.toString().slice(countryCode.length);
  
    // Si el número comienza con "0", lo eliminamos
    const adjustedPhone = phoneWithoutCode.startsWith("0") ? "" : phoneWithoutCode;
  
    // Construimos el nuevo número de teléfono
    const newPhoneNumber = newCountryCode + adjustedPhone;
  
    // Creamos un nuevo evento con el valor actualizado del teléfono
    const newEvent = {
      target: {
        name: "telefono",
        value: newPhoneNumber.trim(), // Aseguramos que no haya espacios innecesarios
      },
    } as unknown as ChangeEvent<HTMLInputElement>;
  
    // Llamamos a la función que maneja el formulario con el nuevo valor
    onChangeForm(newEvent);
  };
  

  const validateCorreo = (value: string) => {
    const correoRegExp =
      /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.(com|net|org|edu|gov|gt)){1}$/;

    return correoRegExp.test(value);
  };

  const validateNumeroEntradas = (value: string) => {
    return parseInt(value, 10) > 0;
  };
  const validateAutorization = (value: string) => {
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
      } else if (
        name === "numero_autorizacion" &&
        !validateAutorization(value)
      ) {
        newErrors.push({
          campo: name,
          mensaje:
            "Debe ingresar un numero de autorizacion para poder realizar su transacción",
        });
      }

      return newErrors;
    });
  };

  const {
    formData,
    handleInputBlur,
    resetForm,
    numberInputIsTouched,
    onChangeForm,
  } = useForm<PagoBoletaInterface>(
    {
      nombre: "",
      telefono: 0,
      correo: "",
      congregacion: "",
      numero_entradas: 0,
      numeroBoleta: "",
      numero_autorizacion: 0,
      detalle_transaccion: detallesTransaccion,
    },
    agregarNuevoError, // pasando la función de error callback aquí
    removeErrorByCampo // pasando la función de remover error callback aquí
  );
  const numberMap =
    formData.numero_entradas > 10
      ? Array.from({ length: 10 }, (_, index) => index + 1) // si es mayor a 10, limita a 10
      : Array.from(
          { length: formData.numero_entradas },
          (_, index) => index + 1
        ); // si es 10 o menos, usa el valor actual

  const totalAmount = numberMap.length * 150;
  const formattedTotal = `Q${totalAmount.toFixed(2)}`;
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
            width: {
              xs: "100%", // 100% del ancho en pantallas pequeñas (teléfonos)
              sm: "600px", // 600px en tablets
              md: "800px", // 800px en pantallas medianas
              lg: "1000px", // 1000px en pantallas grandes
              xl: "1200px", // 1200px en pantallas extra grandes
            },
          }}
        >
          <Card
            orientation="horizontal"
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height: "100%",
              width: "100%",
            }}
          >
            <CardContent
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              {" "}
              <Typography level="title-lg" textColor={"#B5D534"}>
                Realizar el depósito a la siguiente cuenta:{" "}
              </Typography>
              <Typography level="title-md" textColor={"#C3FCEF"}>
                Bi Monetaria Iglesia de Cristo 408-002325-4{" "}
              </Typography>
            </CardContent>
          </Card>
          <Typography
            level="title-lg"
            textColor={"#B5D534"}
            startDecorator={<InfoOutlined />}
          >
            información Personal
          </Typography>{" "}
          <Divider inset="none" />
          <CardContent
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              maxHeight: "max-content",
              maxWidth: "100%",
              mx: "auto",
              overflow: "auto",
              resize: "horizontal",
              width: {
                xs: "100%", // 100% del ancho en pantallas pequeñas (teléfonos)
                sm: "600px", // 600px en tablets
                md: "800px", // 800px en pantallas medianas
                lg: "1000px", // 1000px en pantallas grandes
                xl: "1200px", // 1200px en pantallas extra grandes
              },
            }}
          >
            {" "}
            <FormControl sx={{ width: "100%" }}>
              <FormLabel
                sx={{
                  color: "#C3FCEF",
                }}
              >
                Nombre
              </FormLabel>

              <Input
                endDecorator={<PersonIcon />}
                name="nombre"
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
            <br />
            <FormControl sx={{ width: "100%" }}>
              <FormLabel sx={{ color: "#C3FCEF" }}>
                Selecciona el país de donde nos visitas
              </FormLabel>
              <Select
                placeholder="Seleccione un país..."
                onChange={(_event, newValue) => handleSelectChange(newValue ?? "+ 502")}
                value={countryCode} // Muestra el valor seleccionado
              >
                {countryAndStates.map((item, index) => (
                  <Option key={index} value={item.value.toString()}>
                    {" "}
                    {/* Asegúrate de que el valor sea un string */}
                    {item.label}
                  </Option>
                ))}
              </Select>
            </FormControl>
            <br />
            <FormControl sx={{ width: "100%" }}>
              <FormLabel sx={{ color: "#C3FCEF" }}>Teléfono</FormLabel>
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
            <br />
            <FormControl sx={{ width: "100%" }}>
              <FormLabel sx={{ color: "#C3FCEF" }}>Correo </FormLabel>
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
            <br />
            <FormControl sx={{ width: "100%" }}>
              <FormLabel sx={{ color: "#C3FCEF" }}>Congregación</FormLabel>
              <Input
                endDecorator={<BusinessIcon />}
                name="congregacion"
                onChange={onChangeForm}
                sx={{ width: "100%" }}
                value={formData.congregacion}
              />
            </FormControl>
            <br />
            <FormControl sx={{ width: "100%" }}>
              <FormLabel sx={{ color: "#C3FCEF" }}>
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
                    {errorData.find((error) => error.campo === "numero_entradas") && (
                <div style={{ color: "red" }}>
                  {
                    errorData.find((error) => error.campo === "numero_entradas")
                      ?.mensaje
                  }
                </div>
              )}
            </FormControl>
            <br />
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
                      width: "100%",
                    }}
                  >
                    <Card variant={"soft"} sx={{ width: "100%" }} key={index}>
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
                        <Radio
                          value="mayor a 25 años"
                          label="mayor a 25 años"
                        />
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
            <br />
            <FormControl sx={{ width: "100%" }}>
              <FormLabel sx={{ color: "#C3FCEF" }}>
                Número de Autorización / Número de boleta {" "}
              </FormLabel>
              <Input
                endDecorator={<ConfirmationNumberIcon />}
                name="numero_autorizacion"
                placeholder="opcional"
                type="number"
                onBlur={onBlur}
                sx={{ width: "100%" }}
                onChange={onChangeForm}
                value={formData.numero_autorizacion}
              />
              {errorData
                .filter((error) => error.campo === "numero_autorizacion")
                .map((error, index) => (
                  <div key={index} style={{ color: "red" }}>
                    {error.mensaje}
                  </div>
                ))}
            </FormControl>
            <br />
            <Grid
              sx={{
                display: "grid",

                gap: "1em", // Espacio entre los elementos del grid
                gridColumn: "1/-1", // Esto hace que el `FormControl` ocupe todo el ancho disponible.
              }}
            >
              <FormControl className="">
                <FormLabel sx={{ color: "#D3D534" }}>
                  Carga la boleta de pago (obligatorio)
                </FormLabel>

                <input
                  type="file"
                  accept="image/*"
                  ref={fileInputRef}
                  style={{ display: "none" }}
                  onChange={handleFileChange}
                />

                {/* Si hay una imagen seleccionada, muestra una vista previa */}
                {loading ? (
                  <div className="loadingContainer">
                    <CircularProgress />
                  </div> // O cualquier otro componente o animación de carga que desees mostrar
                ) : previewImage ? (
                  <img
                    src={previewImage}
                    alt="Vista previa"
                    style={{ maxWidth: "100%", height: "200px" }}
                  />
                ) : (
                  <div>
                    <img
                      src={previewImage}
                      alt="Vista previa"
                      style={{ maxWidth: "100%", height: "200px" }}
                    />
                  </div> // Este div mostrará un mensaje cuando no haya ninguna imagen cargada
                )}
                {errorloading ? (
                  <Alert color="danger">
                    Ocurrio un error al momento de carga la imagen, por favor
                    carga una de menor tamaño.
                  </Alert>
                ) : (
                  <></>
                )}
                <br />
                <Button
                  startDecorator={<InsertDriveFileIcon />}
                  variant="plain"
                  style={{ color: "#FFFFFF", background: "#3E00B9" }}
                  onClick={handleFileInputClick}
                >
                  Seleccionar archivo
                </Button>
              </FormControl>
            </Grid>
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
                        linkImagen &&
                        formData.nombre &&
                        formData.telefono &&
                        formData.numero_autorizacion &&
                        formData.correo &&
                        formData.numero_autorizacion
                          ? "#FFFFFF"
                          : "#FFFFFF",
                      background:
                        totalAmount <= 0 ||
                        errorData.length > 0 ||
                        !linkImagen ||
                        !formData.nombre ||
                        !formData.telefono ||
                        !formData.numero_autorizacion ||
                        !formData.correo  
                          ? "#19004B"
                          : "#3E00B9",
                      width: "80%",
                      height: "100%",
                    }}
                    onClick={handlePago}
                    disabled={
                      totalAmount <= 0 ||
                      errorData.length > 0 ||
                      !linkImagen ||
                      !formData.nombre ||
                      !formData.telefono ||
                      !formData.numero_autorizacion ||
                      !formData.correo 
                    }
                  >
                    Registrarse
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
