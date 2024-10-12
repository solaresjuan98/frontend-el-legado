import { Typography } from "@mui/joy";
import { Grid } from "@mui/material"
import { ExpositorCard } from "../components/expositores/ExpositorCard";
import { Expositor } from "../components/util/interfaces";

const arrExpositores: Expositor[] = [
  {
    nombre: "Roberto Moises Alvaréz Bran",
    bio: `Dr. en Psicología Pastoral. Director de BICA Guatemala. Ministro de la Iglesia de Cristo en Pinares del Norte y de la Iglesia de Cristo en el Centro Histórico de Guatemala. Egresado del Instituto Bíblico Baxter. Gusta predicar sermones bíblicos y refrescantes. Plantador de iglesias y formador de líderes. Su pasión por el servicio y la enseñanza ha inspirado a muchos jóvenes y líderes cristianos a seguir fielmente la obra del Señor.`,
    img: "https://fondos-legado.s3.us-east-2.amazonaws.com/expositores_2024/ROBERTO-EXPO.jpg",
  },
  {
    nombre: "Abraham Lopéz",
    bio: `Abraham Lopéz, nacido el 31 de marzo de 1990, ha servido al Señor desde temprana edad. Bautizado a los 11 años, es graduado de BICA Guatemala. Ha trabajado como misionero en Costa Rica y como líder de jóvenes en el Centro Histórico. Desde 2014, es parte activa del grupo juvenil y tiene planes de seguir sirviendo a tiempo completo. Su dedicación a la evangelización y su amor por el ministerio juvenil han marcado su trayectoria como líder cristiano.`,
    img: "https://fondos-legado.s3.us-east-2.amazonaws.com/expositores_2024/ABRAHAM-EXPO.jpg",
  },
  {
    nombre: "Juan Carlos Tejada Herrera",
    bio: `Juan Carlos Tejeda Herrera es esposo y padre de una niña de 6 años. Egresado de BICA Honduras, cuenta con más de 10 años de experiencia ministerial. Actualmente, es ministro y evangelista de la Iglesia de Cristo en Las Delicias, San Miguel, El Salvador, y también ministro de jóvenes en Santiago de María, Usulután. Su pasión por la obra de Dios lo impulsa a servir con dedicación y amor en cada oportunidad, siendo un ejemplo para su congregación y familia.`,
    img: "https://fondos-legado.s3.us-east-2.amazonaws.com/expositores_2024/JUANC-EXPO.jpg",
  },
  {
    nombre: "Oscar Pitán ",
    bio: `Oscar Pitán es un expositor apasionado por la Palabra de Dios. Con energía contagiosa y un profundo entendimiento de la fe, es un guía excepcional para las nuevas generaciones. En el congreso juvenil "Legado", inspira a los jóvenes a descubrir su propósito y dejar una huella significativa en el mundo. Su enfoque auténtico y relevante lo convierte en un líder clave para quienes buscan ser desafiados y edificados por un mensaje transformador que perdure en el corazón.`,
    img: "https://fondos-legado.s3.us-east-2.amazonaws.com/expositores_2024/PITAN-EXPO.jpg",
  },
];

export const Expositores = () => {
  return (
    <Grid
      container
      justifyContent="center"
      style={{ padding: "5%" }}
      className="animate__animated animate__backInDown"
    >
      <Grid item xs={12} style={{ marginTop: "-10" }}>
        <div
          style={{
            position: "relative",
            paddingBottom: "56.25%", // Relación de aspecto 16:9
            height: 0,
            overflow: "hidden",
            maxWidth: "100%",
            backgroundColor: "#000", // Fondo negro para video
          }}
        >
          <iframe
            src="https://fondos-legado.s3.us-east-2.amazonaws.com/videos/JUAN%20VIDEO.mp4"
            title="Video Promocional"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
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

      <Grid item xs={12} style={{ marginTop: "2%" }}>
        <Typography
          level="h1"
          textColor={"#B5D534"}
          style={{ textAlign: "center" }}
        >
          Conoce a los expositores
        </Typography>
      </Grid>

      {/* ======== tarjetas de expositores ======== */}
      {arrExpositores.map((item, i) => (
        <Grid item xs={12} lg={3} style={{ marginTop: "2%" }} key={i}>
          <ExpositorCard expositor={item} />
        </Grid>
      ))}
    </Grid>
  );
};
