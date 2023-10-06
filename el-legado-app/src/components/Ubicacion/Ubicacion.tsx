import Typography from '@mui/joy/Typography';
import { Grid, Container } from '@mui/material';

export const Ubicacion = () => {
    return (
        <>
            <Grid item xs={12} marginTop={3} container justifyContent="center">
                <Typography level="h1" sx={{ color: "#B5D534" }}>
                    ¿Cómo Llegar?
                </Typography>
            </Grid>
            
            <Container maxWidth="lg" style={{ marginTop: '30px' }}>
                <Grid container spacing={3} justifyContent="center" alignItems="center">
                    <Grid item xs={12} container justifyContent="center" alignItems="center">
                        <Typography 
                            level="h3" 
                            textColor={"#E3FEF8"}
                            style={{ textAlign: 'center' }}
                        >
                            Dirección Exacta <br/> 1a Calle 3-02 Zona 13 Pamplona, Ciudad de Guatemala
                        </Typography>
                    </Grid>
                    
                    <Grid item xs={12}>
                        <div style={{ width: '100%', height: '80vh', position: 'relative' }}>
                            <iframe 
                                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1930.4497020047627!2d-90.5312907!3d14.604806!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8589a17bea277947%3A0x2c583db1e6fa79a0!2sOnline%20Academy%20Am%C3%A9rica%20Latina!5e0!3m2!1ses!2sgt!4v1692310593663!5m2!1ses!2sgt" 
                                style={{
                                    border: 'none',
                                    width: '100%',
                                    height: '100%',
                                    position: 'absolute',
                                    top: '0',
                                    left: '0'
                                }}
                                allowFullScreen
                                loading="lazy"
                            ></iframe>
                        </div>
                    </Grid>
                </Grid>
            </Container>
        </>
    );
}
