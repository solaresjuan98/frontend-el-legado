import * as React from 'react';
import AspectRatio from '@mui/joy/AspectRatio';
import Card from '@mui/joy/Card';
import CardContent from '@mui/joy/CardContent';
import Link from '@mui/joy/Link';
import Typography from '@mui/joy/Typography';
import Chip from '@mui/joy/Chip';
interface TarjetaHospedajeProps {
    titulo: string;
    descripcion: string;
    ruta: string;
    imagen: string;
  }
export const TarjetaHospedaje : React.FC<TarjetaHospedajeProps> = ({ titulo, descripcion, ruta, imagen })=> {
  return (
    <Card
    variant="outlined"
    orientation="horizontal"
    sx={{
        width: '100%',
        '&:hover': { boxShadow: 'md', borderColor: 'neutral.outlinedHoverBorder' },
    }}
>
   
    <AspectRatio ratio="1" sx={{ width: 90 }}>
      <img
        src= {imagen}
      
        loading="lazy"
        alt=""
      />
    </AspectRatio>
    <CardContent>
      <Typography level="title-lg" id="card-description">
        {titulo}
      </Typography>
      <Typography level="body-sm" aria-describedby="card-description" mb={1}>
        <Link
          overlay
          underline="none"
          href="#interactive-card"
          sx={{ color: 'text.tertiary' }}
        >
          {descripcion}
        </Link>
      </Typography>
      <Chip
        variant="outlined"
        color="primary"
        size="sm"
        sx={{ pointerEvents: 'none' }}
      >
        Sitio WEB
      </Chip>
    </CardContent>
  </Card>
  );
}
