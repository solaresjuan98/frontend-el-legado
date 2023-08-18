
import CardActions from '@mui/joy/CardActions';
import CardContent from '@mui/joy/CardContent';

import Divider from '@mui/joy/Divider';
import FormControl from '@mui/joy/FormControl';
import FormLabel from '@mui/joy/FormLabel';
import Input from '@mui/joy/Input';
import Typography from '@mui/joy/Typography';
import Button from '@mui/joy/Button';
import InfoOutlined from '@mui/icons-material/InfoOutlined';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import { Grid } from '@mui/material'; // Importa el componente Grid
import PersonIcon from '@mui/icons-material/Person';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import BusinessIcon from '@mui/icons-material/Business';
import Card from '@mui/joy/Card';

import LocalActivityIcon from '@mui/icons-material/LocalActivity';
import { useForm } from '../../hooks/useForm';
import { useState, useRef } from 'react';
import { Checkbox, Radio } from '@mui/joy';



export const PagoTarjeta = () => {
  const inputRef = useRef<HTMLInputElement | null>(null);


  const [isTouched, setIsTouched] = useState(false);

  const { formData, onChangeForm } = useForm({
    numeroEntradas: 0
  });

  const numberMap = Array.from({ length: formData.numeroEntradas }, (_, index) => index + 1);

  const handleInputBlur = () => {
    setIsTouched(true);
  };

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
            Información Personal
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
              <Input endDecorator={<PersonIcon />} />
            </FormControl>

            <FormControl sx={{ gridColumn: '1/-1' }}>
              <FormLabel sx={{ color: '#E3FEF8' }}>Télefono </FormLabel>
              <Input endDecorator={<PhoneIcon />} />
            </FormControl>

            <FormControl sx={{ gridColumn: '1/-1' }}>
              <FormLabel sx={{ color: '#E3FEF8' }}>Correo </FormLabel>
              <Input endDecorator={<EmailIcon />} />
            </FormControl>
            <FormControl >
              <FormLabel sx={{ color: '#E3FEF8' }}>Congregación</FormLabel>
              <Input endDecorator={<BusinessIcon />} />
            </FormControl>
            <FormControl>
              <FormLabel sx={{ color: '#E3FEF8' }}>Número de Entradas</FormLabel>
              <Input
                type="number"
                endDecorator={<LocalActivityIcon />}
                name='numeroEntradas'
                onChange={onChangeForm}
                onBlur={handleInputBlur}
                defaultValue={0}
                slotProps={{
                  input: {
                    ref: inputRef,
                    min: 1,
                    max: 10,
                    step: 1,
                  },
                }}
              />
            </FormControl>

            {/* validar cantidad de entradas aca */}


            {

              isTouched ?
                numberMap.map((item) => (
                  <>

                    <Grid sx={{
                      display: 'grid',
                      
                      gap: '1em', // Espacio entre los elementos del grid
                      gridColumn: '1/-1' // Esto hace que el `FormControl` ocupe todo el ancho disponible.
                    }}>
                      <Card variant={"soft"}  sx={{ width: '100%' }}>

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
                )) :
                <p> pues no se ha tocado</p>
            }


            {/* 
            <br /><br /> */}
            <FormControl sx={{ gridColumn: '1/-1' }}>
              <Typography level="title-lg" textColor={"#C3FCEF"} startDecorator={<InfoOutlined />}>
                Pago con tarjeta
                <Divider inset="none" />
              </Typography>
            </FormControl>

            <FormControl sx={{ gridColumn: '1/-1' }}>
              <FormLabel sx={{ color: '#E3FEF8' }}>Número de tu Tarjeta</FormLabel>
              <Input endDecorator={<CreditCardIcon />} />
            </FormControl>


            <FormControl sx={{ gridColumn: '1/-1' }}>
              <FormLabel sx={{ color: '#E3FEF8' }}>Fecha de Expiración</FormLabel>
              <Input endDecorator={<CreditCardIcon />} />
            </FormControl>
            <FormControl sx={{ gridColumn: '1/-1' }}>
              <FormLabel sx={{ color: '#E3FEF8' }}>CVC/CVV</FormLabel>
              <Input endDecorator={<InfoOutlined />} />
            </FormControl>
            <FormControl sx={{ gridColumn: '1/-1' }}>
              <FormLabel sx={{ color: '#E3FEF8' }}>Numero Tarjeta</FormLabel>
              <Input name='hola' />
            </FormControl>

            <CardActions sx={{ gridColumn: '1/-1' }}>
              <Button variant="plain" style={{ color: '#FFFFFF', background: '#3E00B9' }} >
                Pagar
              </Button>
            </CardActions>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
};
