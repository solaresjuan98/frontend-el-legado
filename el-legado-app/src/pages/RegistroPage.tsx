import Tabs from '@mui/joy/Tabs';
import TabList from '@mui/joy/TabList';
import Tab, { tabClasses } from '@mui/joy/Tab';
import TabPanel from '@mui/joy/TabPanel';
import { Typography } from "@mui/joy";
import Box from '@mui/joy/Box';
import { Grid, useTheme } from "@mui/material";
import { PagoTarjeta } from '../components/Formularios/PagoTarjeta';
import { PagoBoleta } from '../components/Formularios/PagoBoleta';

export const RegistroPage = () => {
  const theme = useTheme();

  return (
    <>
      <div className="animate__animated animate__backInDown">
        <Grid container justifyContent="center" flexDirection="column" alignItems="center">
          <Grid item xs={12}>
            <Typography level="h1" textColor={"#9AF9E2"} style={{ textAlign: 'center', marginTop: '30px' }}>
              Registro
            </Typography>
          </Grid>
          
          <Grid item xs={12}  >
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                bgcolor: 'background.body',
                flexGrow: 1,
                m: -2,
                overflowX: 'hidden',
                borderRadius: 'md',
                marginTop: 4,
                width: '100%',
                height: '100%',
                maxWidth: 800,
              
              }}
            >
              <div style={{ width: '100%', margin: '0 auto'  }}>
                <Tabs aria-label="tabs" style={{ margin: '0 auto',   textAlign: 'center' ,marginLeft:'30px'}}>
                  <TabList
                    disableUnderline
                    sx={{
                      p: 0.5,
                      gap: 0.5,
                      borderRadius: 'xl',
                      bgcolor: 'background.level1',
                      justifyContent: 'center',
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
              </div>
            </Box>
          </Grid>
        </Grid>
      </div>
    </>
  );
}
