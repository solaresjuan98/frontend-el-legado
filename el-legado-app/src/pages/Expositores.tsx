import { Typography } from "@mui/joy";
import { Grid } from "@mui/material"
import { ExpositorCard } from "../components/expositores/ExpositorCard";
import { Expositor } from "../components/util/interfaces";

const arrExpositores: Expositor[] = [
  {
    nombre: 'Roberto Moises Alvaréz Bran',
    bio: `Dr en Psícología Pastoral. Director de BICA Guatemala.
    Ministro de la Iglesia de Cristo en Pinares del Norte y de la Iglesia de Cristo en el Centro Histórico de Guatemala. Egresado del Instituto Bíblico Baxter
     Gusta predicar sermones bíblicos y refrescantes.
     Plantador de Iglesias y formador de lideres.`,img:'https://fondos-legado.s3.us-east-2.amazonaws.com/Roberto.jpeg'
  },
  {
    nombre: 'Abraham Lopéz',
    bio: `Soy Abraham Lopéz nacido el 31 de marzo de 1990 de papas cristianos tengo 33 años soltero,
     bautizado a los 11 años en la iglesia de Cristo de zona 7 capital de Guatemala,
      sirvo al señor desde que tengo memoria, a las 15 años ingrese a Bica Guatemala graduado en 2007 Evangelista en zona 7 a tiempo completo, 
      a mis 20 años estuve como misionero en Costa Rica, regrese a Guatemala a la congregación de centro histórico zona 1 como líder de jóvenes,
       al mismo tiempo desde 2014 era parte del grupo de con jóvenes del cual sigo siendo parte,
        miembro activo en centro histórico con planes a corto plazo de continuar sirviendo en la obra del señor a tiempo completo.`,img:'https://fondos-legado.s3.us-east-2.amazonaws.com/abraham.jpg'
  },
  {
    nombre: 'Juan Carlos Tejada Herrera',
    bio: `Juan Carlos Tejeda herrera 
    Esposo y padre de una niña de 6 años, maestro en biblia egresado de BICA honduras, con experiencia ministerial por más de 10 años. Ministro y Evangelista de la Iglesia de Cristo en las delicias, San Miguel El Salvador. Ministro de Jóvenes de la Iglesia de Cristo en Santiago de María, Usulutan, El Salavador. Un privilegio ser útil a la obra de Dios. .
    `,img:'https://fondos-legado.s3.us-east-2.amazonaws.com/salvadoreño.jpeg'
  },
  {
    nombre: 'Luis Navarrete',
    bio: `Mexican 
      `,img:'https://fondos-legado.s3.us-east-2.amazonaws.com/tallerista.jpg'
  },
];

export const Expositores = () => {
  return (
    <Grid container justifyContent="center" style={{ padding: '5%' }} className="animate__animated animate__backInDown">

      <Grid item xs={12}>
        <Typography level="h1" textColor={"#B5D534"} style={{ textAlign: 'center', marginTop: '-2%' }}>
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
