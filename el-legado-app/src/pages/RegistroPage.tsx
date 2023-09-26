import Tabs from '@mui/joy/Tabs';
import TabList from '@mui/joy/TabList';
import Tab, { tabClasses } from '@mui/joy/Tab';
import TabPanel from '@mui/joy/TabPanel';
import { Typography } from "@mui/joy";
import Box from '@mui/joy/Box';
import { Grid } from "@mui/material";
import { PagoTarjeta } from '../components/Formularios/PagoTarjeta';
import { PagoBoleta } from '../components/Formularios/PagoBoleta';
 

export const RegistroPage = () => {
 

  return (
    <div className="animate__animated animate__backInDown" style={{ overflowX: 'hidden' }}>
    <Grid item xs={10} sm={8} md={6}>
          <Typography level="h2" style={{ textAlign: 'center', marginTop: '1.5rem', color: "#9AF9E2" }}>
            Registro
          </Typography>
        </Grid>
      <Grid container justifyContent="center" >
        

        <Grid item xs={12}  >
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              bgcolor: 'background.body',

              marginLeft: 0 ,// Agregamos este margen para evitar que el usuario pueda mover el Box hacia la izquierda

              borderRadius: 'md',
              mt: 2,
              width: '100%',
              p: { xs: 0.5, sm: 1, md: 2 },
            }}
          >
        <Tabs aria-label="tabs" style={{ margin: '0 auto',   textAlign: 'center'  }}>
              <TabList
                disableUnderline
                sx={{
                  p: 0.5,
                  gap: 0.5,
                  borderRadius: 'xl',
                  bgcolor: 'background.level1',
                  [`& .${tabClasses.root}[aria-selected="true"]`]: {
                    boxShadow: 'sm',
                    bgcolor: 'background.surface',
                  },
                  mx: { xs: 0, sm: 0, md: 0 }, // Aquí agregamos el margen horizontal para que las tabs estén centradas en pantallas grandes.
                  mt: { xs: 0, sm: 0, md: 0 } // Aquí eliminamos el margen superior.
                }}
              >
                <Tab disableIndicator>Registro con Tarjeta</Tab>
                <Tab disableIndicator>Registro con boleta</Tab>
              </TabList>
              <TabPanel value={0}>
                <PagoTarjeta />
              </TabPanel>
              <TabPanel value={1}>
                <PagoBoleta />
              </TabPanel>
            </Tabs>
          </Box>
        </Grid>
      </Grid>
    </div>
  );
}