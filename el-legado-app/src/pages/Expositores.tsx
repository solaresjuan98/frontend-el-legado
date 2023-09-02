import { Typography } from "@mui/joy";
import { Grid } from "@mui/material"
import { ExpositorCard } from "../components/expositores/ExpositorCard";
import { Expositor } from "../components/util/interfaces";

const arrExpositores: Expositor[] = [
  {
    nombre: 'Juan Solares',
    bio: 'Fundador'
  },
  {
    nombre: 'Carlos Lopez',
    bio: 'Fundador'
  },
  {
    nombre: 'Pedro Martínez',
    bio: 'Lider del grupo de jovenes de la Iglesia de Cristo Guatemala'
  },
  {
    nombre: 'Laura García',
    bio: 'Lider del grupo de jovenes de la Iglesia de Cristo Villa Nueeva'
  },
  {
    nombre: 'Jairo Chin',
    bio: 'Miembro del consejo de jovnes'
  },
];

export const Expositores = () => {
  return (
    <Grid container justifyContent="center" style={{ padding: '5%' }} className="animate__animated animate__backInDown">

      <Grid item xs={12}>
        <Typography level="h1" textColor={"#C3FCEF"} style={{ textAlign: 'center', marginTop: '-2%' }}>
          Conoce a los expositores
        </Typography>

      </Grid>


      {/* ======== tarjetas de expositores ======== */}
      {
        arrExpositores.map((item, i) => (
          <Grid item xs={12} lg={3} style={{marginTop: '2%'}} key={i}>
            <ExpositorCard expositor={item} />
          </Grid>

        ))
      }

    </Grid>
  )
}
