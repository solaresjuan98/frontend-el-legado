import Typography from '@mui/joy/Typography';
import { Grid, Container } from '@mui/material';
import GoogleMapReact from 'google-map-react';
interface AnyReactComponentProps {
    lat: number;
    lng: number;
    text: string;
  }
  
  const AnyReactComponent: React.FC<AnyReactComponentProps> = ({ text }) => <div>{text}</div>;
  

export const Ubicacion = () => {

    const defaultProps = {
        center: {
          lat: 14.6045018,
          lng: -90.530607
        },
        zoom: 15
      };
    return (
      <>
       <Grid item xs={12} marginTop={3} container justifyContent="center">
            <Typography level="h1" sx={{ color: "#DAE440" }}>
              ¿Cómo Llegar?
            </Typography>
          </Grid>
            <br/>
          <Container maxWidth="lg" style={{ marginTop: '30px' }}> {/* Cambiado a 'lg' para más espacio */}
          <Grid container spacing={3} justifyContent="center" alignItems="center"> {/* Añadido alignItems="center" */}
          <Typography level="h3" textColor={"#11AAA3"} > Dirección  Exacta :1a Calle 3-02 Zona 13 Pamplona, Ciudad de Guatemala  </Typography>
  
          <Grid item xs={12}> {/* Añadido Grid item */}
            <div style={{ height: '50vh', width: '100%' }}>
              <GoogleMapReact
                bootstrapURLKeys={{ key: 'AIzaSyC6C3txRD1AKGudyxKc5q1Jy2cJQHpykec' }} // Reemplaza TU_CLAVE_API con tu clave
                defaultCenter={defaultProps.center}
                defaultZoom={defaultProps.zoom}
              >
                <AnyReactComponent
                  lat={14.6045018}
                  lng={-90.530607}
                  text="Mi Ubicación"
                />
              </GoogleMapReact>
            </div>
          </Grid> {/* Fin del Grid item */}

          </Grid>
          </Container>
 
      </>
    );
}
