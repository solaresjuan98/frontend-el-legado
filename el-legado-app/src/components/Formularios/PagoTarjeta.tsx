
import Card from '@mui/joy/Card';
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


import LocalActivityIcon from '@mui/icons-material/LocalActivity';
// o

export const PagoTarjeta = () => {
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
          <Typography level="title-lg" textColor={"#DAE440"} startDecorator={<InfoOutlined />}>
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
              <FormLabel sx={{ color: '#11AAA3' }}>Nombre </FormLabel>
              <Input endDecorator={<PersonIcon />} />
            </FormControl>

            <FormControl sx={{ gridColumn: '1/-1' }}>
              <FormLabel sx={{ color: '#11AAA3' }}>Télefono </FormLabel>
              <Input endDecorator={<PhoneIcon />} />
            </FormControl>

            <FormControl sx={{ gridColumn: '1/-1' }}>
              <FormLabel sx={{ color: '#11AAA3' }}>Correo </FormLabel>
              <Input endDecorator={<EmailIcon />} />
            </FormControl>
            <FormControl >
              <FormLabel sx={{ color: '#11AAA3' }}>Congregación</FormLabel>
              <Input endDecorator={<BusinessIcon />} />
            </FormControl>
            <FormControl>
              <FormLabel sx={{ color: '#11AAA3' }}>Número de Entradas</FormLabel>
              <Input type="number" endDecorator={<LocalActivityIcon />} />
            </FormControl>
            
            <Typography level="title-lg" textColor={"#DAE440"} startDecorator={<InfoOutlined />}>
              Pago con tarjeta
              <Divider inset="none" />
            </Typography>
            
            
            <FormControl sx={{ gridColumn: '1/-1' }}>
              <FormLabel sx={{ color: '#11AAA3' }}>Número de tu Tarjeta</FormLabel>
              <Input endDecorator={<CreditCardIcon />} />
            </FormControl>


            <FormControl sx={{ gridColumn: '1/-1' }}>
              <FormLabel sx={{ color: '#11AAA3' }}>Fecha de Expiración</FormLabel>
              <Input endDecorator={<CreditCardIcon />} />
            </FormControl>
            <FormControl sx={{ gridColumn: '1/-1' }}>
              <FormLabel sx={{ color: '#11AAA3' }}>CVC/CVV</FormLabel>
              <Input endDecorator={<InfoOutlined />} />
            </FormControl>
            <FormControl sx={{ gridColumn: '1/-1' }}>
              <FormLabel sx={{ color: '#11AAA3' }}>Nombre Tarjeta</FormLabel>
              <Input />
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
