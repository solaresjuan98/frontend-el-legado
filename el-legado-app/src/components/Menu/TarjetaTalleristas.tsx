import * as React from 'react';
import AspectRatio from '@mui/joy/AspectRatio';
import Card from '@mui/joy/Card';
import CardContent from '@mui/joy/CardContent';
import CardOverflow from '@mui/joy/CardOverflow';
import Divider from '@mui/joy/Divider';
import Typography from '@mui/joy/Typography';
import OpenInNew from '@mui/icons-material/OpenInNew';
import Button from '@mui/joy/Button';

interface TarjetaTalleristasProps {
  titulo: string;
  descripcion: string;
  ruta: string;
  imagen: string;
}
export const TarjetaTalleristas: React.FC<TarjetaTalleristasProps> = ({ titulo, descripcion, ruta, imagen }) => {
  return (
    <>
      <Card variant="outlined" sx={{ width: 600 }}>
        <CardOverflow>
          <AspectRatio ratio="2">
            <img
              src={imagen}
              loading="lazy"
              alt={titulo}
            />
          </AspectRatio>
        </CardOverflow>
        <CardContent>
          <Typography level="title-md" textAlign="center" textColor={"#9AF9E2"}>{titulo}</Typography>
          <Typography level="body-sm" textColor={"#E3FEF8"} >{descripcion}</Typography>
        </CardContent>
        <CardOverflow variant="soft" sx={{ bgcolor: 'background.level1' }}>
          <Divider inset="context" />
          <CardContent orientation="horizontal" sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <Button
              component="a"
              variant="plain"
              style={{ color: '#00A99D' }} // Aplicando el color aquí
              href={ruta}
              color="neutral"
              startDecorator={<OpenInNew />}
            >
              Ver más
            </Button>
          </CardContent>
        </CardOverflow>
      </Card>
    </>
  );
}





