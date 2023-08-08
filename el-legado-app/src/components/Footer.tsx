
import AspectRatio from '@mui/joy/AspectRatio';
import Box from '@mui/joy/Box';
import IconButton from '@mui/joy/IconButton';
import Card from '@mui/joy/Card';
import CardContent from '@mui/joy/CardContent';
import CardOverflow from '@mui/joy/CardOverflow';

import Divider from '@mui/joy/Divider';

 
import Typography from '@mui/joy/Typography';
import Sheet from '@mui/joy/Sheet';
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
import InstagramIcon from '@mui/icons-material/Instagram';

import { Link } from 'react-router-dom'; // Importar Link si usas react-router
export default function Footer() {
  return (
    <Sheet
      variant="solid"
      invertedColors
      sx={{
        bgcolor: '#320587',
        flexGrow: 1,
        p: 2,
        borderRadius: { xs: 0, sm: 'sm' },
      }}
    >
      <Box
        sx={{
          display: 'flex',
          flexDirection: { xs: 'column', md: 'row' },
          justifyContent: 'space-between',
          alignItems: 'center',
          gap: 2,
        }}
      >
        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', md: 'row' }, // Cambia la dirección en pantallas pequeñas
            alignItems: 'center',
          }}
        >
    <Card orientation="vertical" variant="outlined" sx={{ width: 150 }}>
  <CardOverflow>
    <AspectRatio ratio="1/1" style={{ width: 145 }}>{/* Ajusta el ancho al 100% */}
    <img
    src="https://scontent.fgua9-2.fna.fbcdn.net/v/t39.30808-6/355149497_278947114647321_7070738570593722644_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=CAIG4UPGDIkAX9A9Fhv&_nc_ht=scontent.fgua9-2.fna&oh=00_AfCwqqyd6em9Fy_L0CRq3evUm0QuWbgYTb7eLRPEBwMPuw&oe=64D622C6"
    alt="efe"
    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
  />
    </AspectRatio>
  </CardOverflow>
  <CardContent>
    <Typography fontWeight="md" textColor="success.plainColor" mb={0.5}>
      ConJóvenes 
    </Typography>
    <Typography level="body-sm">Iglesia de Cristo</Typography>
  </CardContent>
</Card>  
<br/>
 <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            textAlign: 'center',
            flexGrow: 1,
            marginLeft: 20,
            justifyContent: { xs: 'center', md: 'flex-start' }, // Esto centra el contenido en pantallas pequeñas
          }}
        >
          <Typography sx={{ mb: 1 }}>Contáctanos</Typography>
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'row',
              gap: 1,
            }}
          >
            <IconButton variant="plain">
              <FacebookRoundedIcon />
            </IconButton>
            <IconButton variant="plain">
              <InstagramIcon />
            </IconButton>
          </Box>
        </Box>
      
        </Box>
        <Divider orientation="vertical" sx={{ marginLeft: 75 }} />
          <Typography level="h3" sx={{ ml: { xs: 0, md: 2 }, mt: { xs: 2, md: 0 } }}>
          Regístrate en el congreso <strong>el legado</strong> <Link to="/registro-congreso">aquí</Link>
        </Typography>
      </Box>
    </Sheet>
  );
}