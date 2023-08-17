import Tabs from '@mui/joy/Tabs';
import TabList from '@mui/joy/TabList';
import Tab, { tabClasses } from '@mui/joy/Tab';
import TabPanel from '@mui/joy/TabPanel';
import { Typography } from "@mui/joy";
import Box from '@mui/joy/Box';
import { Grid } from "@mui/material"
import { PagoTarjeta } from '../components/Formularios/PagoTarjeta';
import { PagoBoleta } from '../components/Formularios/PagoBoleta';

export const RegistroPage = () => {
  return (
    <>
      <div className="animate__animated animate__backInDown">
        <Grid container justifyContent="center">
          <Grid item xs={12}>
            <Typography level="h1" textColor={"#9AF9E2"} style={{ textAlign: 'center', marginTop: '30px' }}>
              Registro
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Box
              sx={{
                display: 'flex', // Añadir flexbox
                justifyContent: 'center', // Centrar horizontalmente
                bgcolor: 'background.body',

                flexGrow: 1,
                m: -3,
                overflowX: 'hidden',
                borderRadius: 'md',
                marginTop: 4
              }}
            >
              <Tabs aria-label="tabs" defaultValue={0} sx={{ bgcolor: 'transparent', }}>
                <TabList
                  disableUnderline
                  sx={{
                    p: 0.5,
                    gap: 0.5,
                    borderRadius: 'xl',
                    bgcolor: 'background.level1',
                    width: '100%',
                    justifyContent: 'center',
                    // border: "red 2px solid" ,
                    [`& .${tabClasses.root}[aria-selected="true"]`]: {
                      boxShadow: 'sm',
                      bgcolor: 'background.surface',
                    },
                  }}
                >
                  <Tab disableIndicator>Registro con Tarjeta</Tab>
                  <Tab disableIndicator> Registro con boleta</Tab>
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
    </>
  )
}
