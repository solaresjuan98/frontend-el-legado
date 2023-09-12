import { useForm } from "../../hooks/useForm";
import { useState, useRef } from "react";
import TarjetaPago from "./TarjetaPago";
import "./Formulario.css";
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
import PhoneIcon from "@mui/icons-material/Phone";
import Typography from "@mui/joy/Typography";
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
    if (formData.nombre != "") {
    }

    const pago: PagoDataType = {
      nombre: formData.nombre,
      telefono: formData.telefono,
      correo: formData.correo,
      congregacion: formData.congregacion,
      transaccion: {
        enlace: linkImagen,
        total_pagar: totalAmount,
        numero_entradas: formData.numero_entradas,
        detalle_transaccion: detallesTransaccion,
      },
    };
    setOpenModal(true);
    setPagoData(pago);
  };
  const handleSubmit = async (pagoData: PagoDataType) => {
    // Llama a la función de registro con los datos de pago
    const response = await registro(pagoData);
    console.log(response);
    resetForm();
    formData.numero_entradas = 0;
    setLinkImagen(null);
    setPreviewImage(null);
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

  const [previewImage, setPreviewImage] = useState<string | null>(null);

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
    console.log("image url", imageUrl);
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
    const telefonoRegExp = /^\d{8}$/;
    return telefonoRegExp.test(value);
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
      
          <Card
            orientation="horizontal"
            sx={{
              width: 400,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <CardContent
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
              }}
            >  <Typography level="title-lg">
           Realizar el depósito a la siguiente cuenta:{" "}
        </Typography>
              <Typography level="title-md" >
                  Bi Monetaria Iglesia de  Cristo   
                  408-002325-4{" "}
              </Typography>
            </CardContent>
          </Card>
          <Typography
            level="title-lg"
            textColor={"#C3FCEF"}
            startDecorator={<InfoOutlined />}
          >
            Ingrese la información
          </Typography>

          <Divider inset="none" />
          <CardContent
            sx={{
              display: "grid",
              gridTemplateColumns: {
                xs: "1fr",
                md: "repeat(2, minmax(80px, 1fr))",
              }, // Utiliza diferentes configuraciones según el tamaño de pantalla
              gap: 1.5,
              sm: "repeat(2, 1fr)", // Dos columnas en pantallas medianas
              md: "repeat(2, 1fr)", // Dos columnas en pantallas grandes
            }}
          >
            <FormControl sx={{ gridColumn: "1/-1" }}>
              <FormLabel sx={{ color: "#E3FEF8" }}>Nombre </FormLabel>
              <Input
                endDecorator={<PersonIcon />}
                name="nombre"
                onBlur={onBlur}
                onChange={onChangeForm}
                value={formData.nombre}
              />
              {errorData
                .filter((error) => error.campo === "nombre")
                .map((error, index) => (
                  <div key={index} style={{ color: "red" }}>
                    {error.mensaje}
                  </div>
                ))}
            </FormControl>
            <FormControl sx={{ gridColumn: "1/-1" }}>
              <FormLabel sx={{ color: "#E3FEF8" }}>Teléfono </FormLabel>
              <Input
                endDecorator={<PhoneIcon />}
                name="telefono"
                onChange={onChangeForm}
                onBlur={onBlur}
                value={formData.telefono}
              />
              {errorData
                .filter((error) => error.campo === "telefono")
                .map((error, index) => (
                  <div key={index} style={{ color: "red" }}>
                    {error.mensaje}
                  </div>
                ))}
            </FormControl>

            <FormControl sx={{ gridColumn: "1/-1" }}>
              <FormLabel sx={{ color: "#E3FEF8" }}>Correo </FormLabel>
              <Input
                endDecorator={<EmailIcon />}
                name="correo"
                onChange={onChangeForm}
                onBlur={onBlur}
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
            <FormControl sx={{ gridColumn: "1/-1" }}>
              <FormLabel sx={{ color: "#E3FEF8" }}>Congregación</FormLabel>
              <Input
                endDecorator={<BusinessIcon />}
                name="congregacion"
                onChange={onChangeForm}
                value={formData.congregacion}
              />
            </FormControl>
            <Grid
              sx={{
                display: "grid",
                gap: "1em",
                gridColumn: "1/-1",
              }}
            >
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
            </Grid>
            {numberInputIsTouched &&
              numberMap.map((item, index) => (
                <>
                  <Grid
                    sx={{
                      display: "grid",
                      gap: "1em",
                      gridColumn: "1/-1",
                    }}
                  >
                    <Card variant={"soft"} sx={{ width: "100%" }}>
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
                      <Checkbox
                        label=" Bautizado"
                        onChange={(e) =>
                          handleCheckboxChange(index, e.target.checked)
                        }
                      />
                    </Card>
                  </Grid>
                  <br />
                </>
              ))}
            <Grid
              sx={{
                display: "grid",

                gap: "1em", // Espacio entre los elementos del grid
                gridColumn: "1/-1", // Esto hace que el `FormControl` ocupe todo el ancho disponible.
              }}
            >
              <FormControl className="">
                <FormLabel sx={{ color: "#E3FEF8" }}>
                  Carga la boleta de pago
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
                      src="https://fondos-legado.s3.us-east-2.amazonaws.com/boletavacia.jpg"
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
                        formData.correo
                          ? "#FFFFFF"
                          : "#FFFFFF",
                      background:
                        totalAmount > 0 &&
                        errorData.length === 0 &&
                        linkImagen &&
                        formData.nombre &&
                        formData.telefono &&
                        formData.correo
                          ? "#3E00B9"
                          : "#19004B",
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
                      !formData.correo
                    }
                  >
                    Pagar
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
