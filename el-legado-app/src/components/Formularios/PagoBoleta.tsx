import { useForm } from "../../hooks/useForm";
import { useState, useRef } from "react";
import TarjetaPago from "./TarjetaPago";
import "./Formulario.css";
// mui
import CircularProgress from "@mui/joy/CircularProgress";
import Alert from "@mui/joy/Alert";

import { Checkbox, Radio } from "@mui/joy";
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

import { PagoBoletaInterface } from "../util/interfaces";

//hooks
import { UseRegistro } from "../../hooks/userRegistro";

export const PagoBoleta = () => {
  const {registro}=UseRegistro()
  const [detallesTransaccion, setDetallesTransaccion] = useState<any[]>([]);
  const handlePago = async () => {
   
    const pago={
      "nombre":formData.nombre,
      "telefono":formData.correo,
      "congregacion":formData.congregacion,
      "transaccion":{
        "enlace":linkImagen,
        "total_pagar":formattedTotal,
        "detalle_transaccion":detallesTransaccion
          }


    }
    await registro(pago)
 
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
  const cargar = async (image: string, fileExt: string) => {
    setLoading(true);
    const imageUrl = await cargarBoleta(fileExt, image);
    console.log("image url", imageUrl);
    if (imageUrl == "error") {
      seterrorLoading(true);
      setLoading(false);
    } else {
      setLinkImagen(imageUrl);
      seterrorLoading(false);
      setLoading(false);
      setPreviewImage(imageUrl);
    }
  };

  const {
    formData,
    handleInputBlur,
    numberInputRef,
    numberInputIsTouched,
    onChangeForm,
  } = useForm<PagoBoletaInterface>({
    nombre: "",
    telefono: 0,
    correo: "",
    congregacion: "",
    numero_entradas: 0,
    numeroBoleta: "",
    detalle_transaccion: detallesTransaccion,
  });
  const numberMap = Array.from(
    { length: formData.numero_entradas },
    (_, index) => index + 1
  );

  const totalAmount = numberMap.length * 150;
  const formattedTotal = `Q${totalAmount.toFixed(2)}`;
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
                onChange={onChangeForm}
                value={formData.nombre}
              />
            </FormControl>

            <FormControl sx={{ gridColumn: "1/-1" }}>
              <FormLabel sx={{ color: "#E3FEF8" }}>Télefono </FormLabel>
              <Input
                endDecorator={<PhoneIcon />}
                name="telefono"
                onChange={onChangeForm}
                value={formData.telefono}
              />
            </FormControl>

            <FormControl sx={{ gridColumn: "1/-1" }}>
              <FormLabel sx={{ color: "#E3FEF8" }}>Correo </FormLabel>
              <Input
                endDecorator={<EmailIcon />}
                name="correo"
                onChange={onChangeForm}
                value={formData.correo}
              />
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
                defaultValue={0}
                slotProps={{
                  input: {
                    ref: numberInputRef,
                    min: 1,
                    max: 10,
                    step: 1,
                  },
                }}
              />
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

                      <Radio
                        label="12-16 años"
                        onChange={() => handleRadioChange(index, "12-16")}
                      />
                      <Radio
                        label="16-20 años"
                        onChange={() => handleRadioChange(index, "16-20")}
                      />
                      <Radio
                        label="20-24 años"
                        onChange={() => handleRadioChange(index, "20-24")}
                      />
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
              <FormControl className=" ">
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
                ) : (
                  previewImage && (
                    <img
                      src={previewImage}
                      alt="Vista previa"
                      style={{ maxWidth: "100%", height: "200px" }}
                    />
                  )
                )}
                {errorloading ? (
                  <Alert color="danger">
                    Ocurrio un error al momento de carga la imagen , porfavor
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
                      color: "#FFFFFF",
                      background: "#3E00B9",
                      width: "80%",
                      height: "100%",
                    }}
                    onClick={handlePago}
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
