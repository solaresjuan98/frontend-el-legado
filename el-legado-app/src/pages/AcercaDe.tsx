import { CardContent, Grid } from "@mui/material";
import Typography from '@mui/joy/Typography';
import { Card } from "@mui/joy";


// const centerContainer = {
//   display: 'flex',
//   alignItems: 'flex-start', // Change this to 'flex-start'
//   justifyContent: 'center',
//   // padding: '100px'
// };

const cardClasses = {
  margin: '10px',
  marginTop: '10px',
  height: '400px'
}

export const AcercaDe = () => {
  return (
    <Grid justifyContent="center" container marginTop={2} sx={{ flexGrow: 1 }} spacing={2} style={{ padding: '2%' }} className="animate__animated animate__fadeInUp">

      <Grid xs={12}>

        <img
          src="https://github.com/JuanDiegoAlv1234/ImagenesVarias/blob/master/Portada%204.jpg?raw=true"
          alt=""
          className=""
          style={{
            width: '100%',
            
            // height: 
          }}
        />

      </Grid>

      <Grid xs={12} className="">
        <Card variant="soft">
          <CardContent>
            {/* <Typography level="title-md">Plain card (default)</Typography> */}
            <Typography level="h2" textColor={"#1592E5"}>
              Bienvenidos al emocionante evento "El Legado", un congreso que reunirá a todos los jóvenes de la Iglesia de Cristo en Guatemala.
              Durante dos días inolvidables, nos sumergiremos en un ambiente de inspiración, aprendizaje y comunión.
            </Typography>
            <br />
            <Typography level="h3" textColor={"#94B5CB"}>
              Prepárate para una experiencia transformadora. Cada momento estará diseñado para inspirar y empoderar a la nueva generación de jóvenes
              de la Iglesia de Cristo. Habrá sesiones interactivas, discusiones profundas y actividades significativas que nos ayudarán a crecer espiritualmente
              y como líderes en nuestra sociedad.
            </Typography>
          </CardContent>
        </Card>
      </Grid>

      <Grid xs={12} lg={4} >
        <Card variant="soft" style={cardClasses}>
          <CardContent style={{alignItems: 'center'}}>

            <Typography level="h4" textColor={"#BFE5E6"}>
              Conferencistas Internacionales:
            </Typography>
            <Typography level="body-lg" textColor={"94B5CB"}>
              "El Legado" contará con la presencia de destacados conferencistas de diferentes países, quienes compartirán su sabiduría y experiencias.
              Aprenderemos juntos y fortaleceremos nuestra fe en Cristo mientras descubrimos cómo dejar un impacto positivo en nuestras vidas y comunidades.
            </Typography>
          </CardContent>
        </Card>
      </Grid>

      <Grid xs={12} lg={4}>
        <Card variant="soft" style={cardClasses}>
          <CardContent>
            {/* <Typography level="title-md">Plain card (default)</Typography> */}
            <Typography level="h4" textColor={"#BFE5E6"}>
              Un Evento Transformador:
            </Typography>
            <Typography level="body-lg">
              Prepárate para una experiencia transformadora. Cada momento estará diseñado para inspirar y empoderar a la nueva generación de jóvenes de la Iglesia
              de Cristo. Habrá sesiones interactivas, discusiones profundas y actividades significativas que nos ayudarán a crecer espiritualmente y como líderes
              en nuestra sociedad.
            </Typography>

          </CardContent>
        </Card>
      </Grid>

      <Grid xs={12} lg={4}>
        <Card variant="soft" style={cardClasses}>
          <CardContent>
            {/* <Typography level="title-md">Plain card (default)</Typography> */}
            <Typography level="h4" textColor={"#BFE5E6"}>
              Celebrando la Unidad:
            </Typography>
            <Typography level="body-lg">
              "El Legado" será una celebración de la unidad en nuestra fe y el poder de la comunidad. Nos uniremos como hermanos y hermanas en Cristo, compartiendo nuestras diferencias culturales
              y lingüísticas, pero al mismo tiempo, abrazando lo que nos une: el amor por Dios y el deseo de ser luz en el mundo.
            </Typography>
          </CardContent>
        </Card>
      </Grid>

    </Grid>
  );
};
