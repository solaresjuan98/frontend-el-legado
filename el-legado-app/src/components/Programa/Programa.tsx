 
import Card from '@mui/joy/Card';
import CardCover from '@mui/joy/CardCover';
import Typography from '@mui/joy/Typography';
import { Grid, Container } from '@mui/material';
export const Programa = () => {
  return (
    <>
     <Grid item xs={12} marginTop={6} container justifyContent="center">
          <Typography level="h1" sx={{ color: "#9AF9E2" }}>
            Programa del evento
          </Typography>
        </Grid>
        <Container maxWidth="lg" style={{ marginTop: '20px' }}> {/* Cambiado a 'lg' para más espacio */}
        <Grid container spacing={3} justifyContent="center">
        <Grid item xs={12} lg={6}  style={{ display: 'flex', justifyContent: 'center', height: '100%' }}>
 
 <Card sx={{ width: '100%', height: '500px', flexGrow: 1 }}> {/* Ajusta el alto como desees */}
<CardCover>
<img
     src="https://scontent.fgua3-4.fna.fbcdn.net/v/t39.30808-6/306666950_3157595611220262_6051860655414645581_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=EQBZIOx5CYcAX_X7Bcg&_nc_ht=scontent.fgua3-4.fna&oh=00_AfBNkyhpq8NMXZnpqbWqj6yscQmvbabasdAPubhEaYG0yA&oe=64DA14B6"
     srcSet="https://scontent.fgua3-4.fna.fbcdn.net/v/t39.30808-6/306666950_3157595611220262_6051860655414645581_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=_uDEdT3ysU8AX8qeBvk&_nc_ht=scontent.fgua3-4.fna&oh=00_AfDJ3DVjCODzCFSfZ3QpSJHrjdpowsOFKQByWEGnaSF9VA&oe=64D425F6 2x"
     loading="lazy"
     alt=""
     style={{ width: '100%', height: '100%', objectFit: 'cover' }} // Ajuste completo de la imagen

   />
 </CardCover>
</Card>
</Grid>
 
        <Grid item xs={12} lg={6}  style={{ display: 'flex', justifyContent: 'center', height: '100%' }}>
 
            <Card sx={{ width: '100%', height: '500px', flexGrow: 1 }}> {/* Ajusta el alto como desees */}
        <CardCover>
        <img
                src="https://scontent.fgua3-4.fna.fbcdn.net/v/t39.30808-6/306666950_3157595611220262_6051860655414645581_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=EQBZIOx5CYcAX_X7Bcg&_nc_ht=scontent.fgua3-4.fna&oh=00_AfBNkyhpq8NMXZnpqbWqj6yscQmvbabasdAPubhEaYG0yA&oe=64DA14B6"
                srcSet="https://scontent.fgua3-4.fna.fbcdn.net/v/t39.30808-6/306666950_3157595611220262_6051860655414645581_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=_uDEdT3ysU8AX8qeBvk&_nc_ht=scontent.fgua3-4.fna&oh=00_AfDJ3DVjCODzCFSfZ3QpSJHrjdpowsOFKQByWEGnaSF9VA&oe=64D425F6 2x"
                loading="lazy"
                alt=""
                style={{ width: '100%', height: '100%', objectFit: 'cover' }} // Ajuste completo de la imagen
        
              />
            </CardCover>
          </Card>
        </Grid>
        </Grid>
        </Container>
    </>
  );
}
