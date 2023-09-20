import { Grid } from '@mui/material'
import { Typography} from '@mui/joy'


export const PagoExitoso = () => {
  return (
    <Grid justifyContent="center" container marginTop={2} sx={{ flexGrow: 1, padding: 2 }} spacing={2} style={{ padding: '2%' }} className="animate__animated animate__fadeInUp">
        <Typography level='h3'>
            El pago ha sido realizado con exito!
        </Typography>
    </Grid>
  )
}
