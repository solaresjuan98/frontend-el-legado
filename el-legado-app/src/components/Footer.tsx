import Typography from '@mui/joy/Typography';
import { Grid, Container } from '@mui/material';
import Box from '@mui/joy/Box';
import Card from '@mui/joy/Card';
import CardContent from '@mui/joy/CardContent';
import CardOverflow from '@mui/joy/CardOverflow';
import AspectRatio from '@mui/joy/AspectRatio';
import IconButton from '@mui/joy/IconButton';
import Divider from '@mui/joy/Divider';
import Sheet from '@mui/joy/Sheet';
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
import InstagramIcon from '@mui/icons-material/Instagram';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
      <Sheet
          variant="solid"
          invertedColors
          sx={{
              bgcolor: '#1A1142',
              flexGrow: 1,
              p: { xs: 3, sm: 2 },
              borderRadius: { xs: 0, sm: 'sm' },
              minHeight: { xs: 'auto', md: 250 },
          }}
      >
          <Container>
              <Grid container spacing={1} alignItems="center">
                  {/* Lado izquierdo */}
                  <Grid item xs={8} md={4} sx={{ paddingLeft: 0 }}>
                      <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, alignItems: 'center' }}>
                          <Card orientation="vertical" variant="outlined" sx={{ width: 150, marginRight: { md: 2 } }}>
                              <CardOverflow>
                                  <AspectRatio ratio="1/1" style={{ width: 145 }}>
                                      <img
                                          src="https://github.com/JuanDiegoAlv1234/ImagenesVarias/blob/master/logo_conjovenes.jpg?raw=true"
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
                          <Typography level="h4" sx={{ mt: { xs: 1, md: 0 }, textAlign: 'center', flex: 1 }}>
                              Regístrate en el congreso <strong>el legado</strong> <Link to="/registro-congreso">aquí</Link>
                          </Typography>
                      </Box>
                  </Grid>

                  {/* Divider */}
                  <Grid item md={2} sx={{ display: 'flex', alignItems: 'center' }}>
                      <Divider orientation="vertical" sx={{ height: '80%', mx: 'auto' }} />
                  </Grid>

                  {/* Lado derecho */}
                  <Grid item xs={12} md={6}>
                      <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100%' }}>
                          <Typography level="h2" sx={{ mb: 1 }}>Contáctanos</Typography>
                          <Box
                              sx={{
                                  display: 'flex',
                                  flexDirection: 'row',
                                  gap: 4,
                                  alignItems: 'center',
                              }}
                          >
                              <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                                  <IconButton variant="plain">
                                      <FacebookRoundedIcon />
                                  </IconButton>
                                  <Typography>@ConJovenes</Typography>
                              </Box>
                              <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                                  <IconButton variant="plain">
                                      <InstagramIcon />
                                  </IconButton>
                                  <Typography>@ConJovenes</Typography>
                              </Box>
                          </Box>
                      </Box>
                  </Grid>
              </Grid>
          </Container>
      </Sheet>
  );
}