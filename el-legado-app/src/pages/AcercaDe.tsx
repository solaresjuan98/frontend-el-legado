import { Grid } from "@mui/material";
import Typography from '@mui/joy/Typography';
import { Card } from "@mui/joy";
import { S3_BUCKET_URL } from "../constants/constants";

const cardClasses = {
  margin: '10px',
  marginTop: '10px',
  // height: '400px'
}

export const AcercaDe = () => {
  return (
    <Grid
      container
      justifyContent="center"
      style={{ padding: "5%" }}
      className="animate__animated animate__backInDown"
    >

      <Grid xs={12} style={{ marginTop: "-10" }}>
        <div
          style={{
            position: "relative",
            paddingBottom: "40%", // Relación de aspecto 
            height: 0,
            overflow: "hidden",
            maxWidth: "100%",
            backgroundColor: "#000", // Fondo negro para video
          }}
        >
          <iframe
            src={`${S3_BUCKET_URL}/videos/Info.mp4`}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
            }}
          ></iframe>
        </div>
      </Grid>

      <Grid xs={12} className="" container justifyContent="center" style={{ marginTop: '10vh' }}>
        <Typography level="h1" sx={{ color: "#B5D534" }}>
          Noticias importantes
        </Typography>
      </Grid>

      <Grid xs={12} lg={4} >
        <Card variant="soft" style={cardClasses}>
          <img
            src={`${S3_BUCKET_URL}/principal/noticiasImportantes.png`}
            srcSet={`${S3_BUCKET_URL}/principal/noticiasImportantes.png`} // Suponiendo que quieres usar la misma URL para 2x
            loading="lazy"
            alt=""
            style={{
              maxWidth: "100%",
              maxHeight: "100%",
              objectFit: "cover",
              borderRadius: "15px"
            }}
          />
        </Card>
      </Grid>

      <Grid xs={12} lg={4}>
        <Card variant="soft" style={cardClasses}>
          <img
            src={`${S3_BUCKET_URL}/principal/noticiasImportantes2.png`}
            srcSet={`${S3_BUCKET_URL}/principal/noticiasImportantes2.png`} // Suponiendo que quieres usar la misma URL para 2x
            loading="lazy"
            alt=""
            style={{
              maxWidth: "100%",
              maxHeight: "100%",
              objectFit: "cover",
              borderRadius: "15px"
            }}
          />
        </Card>
      </Grid>

      <Grid xs={12} lg={4}>
        <Card variant="soft" style={cardClasses}>
          <img
            src={`${S3_BUCKET_URL}/principal/1.jpg`}
            srcSet={`${S3_BUCKET_URL}/principal/1.jpg`} // Suponiendo que quieres usar la misma URL para 2x
            loading="lazy"
            alt=""
            style={{
              maxWidth: "100%",
              maxHeight: "100%",
              objectFit: "cover",
              borderRadius: "15px"
            }}
          />
        </Card>
      </Grid>
    </Grid>
  );
};
