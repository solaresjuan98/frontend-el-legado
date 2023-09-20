import { Grid } from '@mui/material';
import { Typography } from '@mui/joy';
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';


export const PagoError = () => {
  return (
    <Grid justifyContent="center" container marginTop={2} sx={{ flexGrow: 1, padding: 2 }} spacing={2} style={{ padding: '2%' }} className="animate__animated animate__fadeInUp">
      
      <Typography level='h3'>
      <ErrorOutlineIcon />
        Hubo un error con el pago, intentalo de nuevo más tarde.
      </Typography>
    </Grid>
  )
}
