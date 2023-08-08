 
import Card from '@mui/joy/Card';
import CardActions from '@mui/joy/CardActions';
import CardContent from '@mui/joy/CardContent';
import * as React from 'react';
import Divider from '@mui/joy/Divider';
import FormControl from '@mui/joy/FormControl';
import FormLabel from '@mui/joy/FormLabel';
import Input from '@mui/joy/Input';
import Typography from '@mui/joy/Typography';
import Button from '@mui/joy/Button';
import InfoOutlined from '@mui/icons-material/InfoOutlined';
import InsertDriveFileIcon from '@mui/icons-material/InsertDriveFile';

import { Grid } from '@mui/material'; // Importa el componente Grid
import PersonIcon from '@mui/icons-material/Person';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import BusinessIcon from '@mui/icons-material/Business';

import LocalActivityIcon from '@mui/icons-material/LocalActivity';
// o

export const PagoBoleta = () => {
    const fileInputRef = React.useRef<HTMLInputElement>(null);


    const handleFileInputClick = () => {
        if (fileInputRef.current) {
            fileInputRef.current.click();
          }
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
          <Typography level="title-lg" textColor={"#DAE440"}  startDecorator={<InfoOutlined />}>
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
            <FormControl sx={{ gridColumn: '1/-1' }}>
          <FormLabel sx={{ color: '#11AAA3' }}>Congregación</FormLabel>
          <Input endDecorator={<BusinessIcon />}   />
        </FormControl>
        <FormControl  >
          <FormLabel  sx={{ color: '#11AAA3' }}>Número de Entradas</FormLabel>
          <Input type="number"endDecorator={<LocalActivityIcon />}  />
        </FormControl>
        <FormControl  >
          <FormLabel  sx={{ color: '#11AAA3' }}>Carga la boleta de pago  </FormLabel>
         
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
        variant="plain" style={{ color: '#FFFFFF',background:'#3E00B9' }}
        onClick={handleFileInputClick}
      >
        Seleccionar archivo
      </Button>
        </FormControl>
            <CardActions sx={{ gridColumn: '1/-1' }}>
            <Button   variant="plain" style={{ color: '#FFFFFF',background:'#3E00B9' }} >        Pagar
              </Button>
            </CardActions>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
};
