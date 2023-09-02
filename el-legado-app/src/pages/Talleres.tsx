import { Grid, Typography } from "@mui/joy"

export const Talleres = () => {
    return (
        <Grid container marginTop={2} sx={{ flexGrow: 1, marginTop: '5%' }} className="animate__animated animate__fadeInUp">
         
            <Grid xs={12}>
                <Typography level="h1" textColor={"#9AF9E2"} style={{ textAlign: 'center', marginTop: '-2%' }}>
                    Talleres
                </Typography>

            </Grid>
        

            <Grid xs={12} lg={6} sx={{ padding: '2%' }}>

                <img
                    src="https://github.com/JuanDiegoAlv1234/ImagenesVarias/blob/master/taller.jpg?raw=true"
                    alt=""
                    className=""
                    style={{
                        width: '100%',
                    }}
                />


            </Grid>

            <Grid xs={12} lg={6} sx={{ padding: '2%' }}>


                <Typography level="h2">
                Taller de Jóvenes 1
                </Typography>

            </Grid>



            <Grid xs={12} lg={6} sx={{ padding: '2%' }}>


                <Typography level="h2">
                   Taller de Jóvenes 2
                </Typography>

            </Grid>

            <Grid xs={12} lg={6} sx={{ padding: '2%' }}>

                <img
                    src="https://github.com/JuanDiegoAlv1234/ImagenesVarias/blob/master/taller.jpg?raw=true"
                    alt=""
                    className=""
                    style={{
                        width: '100%',
                    }}
                />


            </Grid>

        </Grid>
    )
}
