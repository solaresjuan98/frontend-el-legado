import AspectRatio from '@mui/joy/AspectRatio';
import Box from '@mui/joy/Box';
import IconButton from '@mui/joy/IconButton';
import Card from '@mui/joy/Card';
import CardContent from '@mui/joy/CardContent';
import CardOverflow from '@mui/joy/CardOverflow';
import Divider from '@mui/joy/Divider';
import { Grid, Container } from '@mui/material';
import Typography from '@mui/joy/Typography';
import Sheet from '@mui/joy/Sheet';
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
import InstagramIcon from '@mui/icons-material/Instagram';
import { Link } from 'react-router-dom';export default function Footer() {
  return (
    <Sheet
      variant="solid"
      invertedColors
      sx={{
        bgcolor: '#320587',
        flexGrow: 1,
        p: { xs: 1, sm: 2 },
        borderRadius: { xs: 0, sm: 'sm' },
        height: 250,
      }}
    >
      <Container>
        <Grid container spacing={1} alignItems="flex-start">
          {/* Lado izquierdo */}
          <Grid item xs={12} md={4} sx={{ paddingLeft: 0, marginLeft: 0 }}>
            <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, alignItems: 'flex-start', justifyContent: 'flex-start' }}>
              <Card orientation="vertical" variant="outlined" sx={{ width: 150 }}>
                <CardOverflow>
                  <AspectRatio ratio="1/1" style={{ width: 145 }}>
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
              <Typography level="h4" sx={{ mt: { xs: 1, md: 0 }, ml: { xs: 0, md: 2 } }}>
                Regístrate en el congreso <strong>el legado</strong> <Link to="/registro-congreso">aquí</Link>
              </Typography>
            </Box>
          </Grid>

          {/* Divider */}
          <Grid item md={1}>
            <Divider orientation="vertical" sx={{ height: '100%', mx: 'auto' }} />
          </Grid>

          {/* Lado derecho */}
          <Grid item xs={12} md={7}>
            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100%' }}>
              <Typography level="h2" sx={{ mb: 1 }}>Contáctanos</Typography>
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
          </Grid>
        </Grid>
      </Container>
    </Sheet>
  );
}
