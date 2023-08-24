import { useForm } from '../../hooks/useForm';
import { useState, useRef } from 'react';
import TarjetaPago from "./TarjetaPago";
// mui
import { Checkbox, Radio } from '@mui/joy';
import { Grid } from '@mui/material'; // Importa el componente Grid
import BusinessIcon from '@mui/icons-material/Business';
import Button from '@mui/joy/Button';
import Card from '@mui/joy/Card';
import CardActions from '@mui/joy/CardActions';
import CardContent from '@mui/joy/CardContent';
import Divider from '@mui/joy/Divider';
import EmailIcon from '@mui/icons-material/Email';
import FormControl from '@mui/joy/FormControl';
import FormLabel from '@mui/joy/FormLabel';
import InfoOutlined from '@mui/icons-material/InfoOutlined';
import Input from '@mui/joy/Input';
import InsertDriveFileIcon from '@mui/icons-material/InsertDriveFile';
import LocalActivityIcon from '@mui/icons-material/LocalActivity';
import PersonIcon from '@mui/icons-material/Person';
import PhoneIcon from '@mui/icons-material/Phone';
import Typography from '@mui/joy/Typography';
import { PagoBoletaInterface } from '../util/interfaces';



export const PagoBoleta = () => {
  const fileInputRef = useRef<HTMLInputElement>(null);

  const { formData, handleInputBlur, numberInputRef, numberInputIsTouched, onChangeForm } = useForm<PagoBoletaInterface>({
    nombre: '',
    telefono: 0,
    correo: '',
    congregacion: '',
    numeroEntradas: 0,
    numeroBoleta: '',
    datosEntrada: [],
  });
  const numberMap = Array.from({ length: formData.numeroEntradas }, (_, index) => index + 1);


  const handleFileInputClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  const totalAmount = numberMap.length * 150;
  const formattedTotal = `Q${totalAmount.toFixed(2)}`;
  return (
    <Grid container>
      <Grid item xs={12} md={110}>
        <Card
          variant="outlined"
          sx={{
            maxHeight: 'max-content',
            maxWidth: '100%',
            mx: 'auto',
            overflow: 'auto',
            resize: 'horizontal',

          }}
        >
          <Typography level="title-lg" textColor={"#C3FCEF"} startDecorator={<InfoOutlined />}>
            Ingrese la información
          </Typography>
          <Divider inset="none" />
          <CardContent
            sx={{
              display: 'grid',
              gridTemplateColumns: { xs: '1fr', md: 'repeat(2, minmax(80px, 1fr))' }, // Utiliza diferentes configuraciones según el tamaño de pantalla
              gap: 1.5,
              sm: 'repeat(2, 1fr)', // Dos columnas en pantallas medianas
              md: 'repeat(2, 1fr)', // Dos columnas en pantallas grandes
            }}
          >


            <FormControl sx={{ gridColumn: '1/-1' }}>
              <FormLabel sx={{ color: '#E3FEF8' }}>Nombre </FormLabel>
              <Input endDecorator={<PersonIcon />} name='nombre' onChange={onChangeForm} value={formData.nombre} />
            </FormControl>

            <FormControl sx={{ gridColumn: '1/-1' }}>
              <FormLabel sx={{ color: '#E3FEF8' }}>Télefono </FormLabel>
              <Input endDecorator={<PhoneIcon />} name='telefono' onChange={onChangeForm} value={formData.telefono} />
            </FormControl>

            <FormControl sx={{ gridColumn: '1/-1' }}>
              <FormLabel sx={{ color: '#E3FEF8' }}>Correo </FormLabel>
              <Input endDecorator={<EmailIcon />} name='correo' onChange={onChangeForm} value={formData.correo} />
            </FormControl>
            <FormControl sx={{ gridColumn: '1/-1' }}>
              <FormLabel sx={{ color: '#E3FEF8' }}>Congregación</FormLabel>
              <Input endDecorator={<BusinessIcon />} name='congregacion' onChange={onChangeForm} value={formData.congregacion} />
            </FormControl>
            <FormControl>
              <FormLabel sx={{ color: '#E3FEF8', gridColumn: '1/-1' }}>Número de Entradas</FormLabel>
              <Input
                type="number"
                endDecorator={<LocalActivityIcon />}
                name='numeroEntradas'
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
            <FormControl>
              <FormLabel sx={{ color: '#E3FEF8', gridColumn: '1/-1' }}>Carga la boleta de pago  </FormLabel>

              <input
                type="file"
                ref={fileInputRef}
                style={{ display: 'none' }}
                onChange={e => {
                  // Aquí puedes manejar la selección de archivos
                  const files = e.target.files;
                  console.log(files);
                }}
              />
              <Button
                startDecorator={<InsertDriveFileIcon />}
                variant="plain" style={{ color: '#FFFFFF', background: '#3E00B9' }}
                onClick={handleFileInputClick}
              >
                Seleccionar archivo
              </Button>
            </FormControl>

            {/* validar cantidad de entradas aca */}


            {

              numberInputIsTouched &&
              numberMap.map((item) => (
                <>

                  <Grid sx={{
                    display: 'grid',

                    gap: '1em', // Espacio entre los elementos del grid
                    gridColumn: '1/-1' // Esto hace que el `FormControl` ocupe todo el ancho disponible.
                  }}>
                    <Card variant={"soft"} sx={{ width: '100%' }}>

                      <Typography level="h4" sx={{ color: "#C3FCEF" }}>
                        Entrada {item}
                      </Typography>

                      <Radio label="12-16 años" />
                      <Radio label="16-20 años" />
                      <Radio label="20-24 años" />
                      <Checkbox label="   Bautizado" />
                    </Card>
                  </Grid>
                  <br />

                </>
              ))
            }
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
