import { Grid, Typography } from "@mui/joy"

export const Talleres = () => {
    return (
        <Grid container marginTop={2} sx={{ flexGrow: 1 }} className="animate__animated animate__fadeInUp">

            <Grid xs={12}>
                <Typography level="h1" textColor={"#C1DA08"} style={{ textAlign: 'center', marginTop: '-2%' }}>
                    Talleres
                </Typography>

            </Grid>


            <Grid xs={12} lg={6} sx={{ padding: '2%' }}>

                <img
                    src="https://scontent.faqb1-2.fna.fbcdn.net/v/t39.30808-6/339095383_6197972216949167_6972314652665301187_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=dd63ad&_nc_ohc=dZGx-LzhO7AAX8c3654&_nc_ht=scontent.faqb1-2.fna&oh=00_AfCcP1XOZLxQpAlE2WavFLhjqkH3vJG96Rv_XEb8uogtUA&oe=64DC7C6A"
                    alt=""
                    className=""
                    style={{
                        width: '100%',
                    }}
                />


            </Grid>

            <Grid xs={12} lg={6} sx={{ padding: '2%' }}>


                <Typography level="h2">
                    Este es un texto de prueba
                </Typography>

            </Grid>



            <Grid xs={12} lg={6} sx={{ padding: '2%' }}>


                <Typography level="h2">
                    Este es un texto de prueba
                </Typography>

            </Grid>

            <Grid xs={12} lg={6} sx={{ padding: '2%' }}>

                <img
                    src="https://scontent.faqb1-2.fna.fbcdn.net/v/t39.30808-6/339095383_6197972216949167_6972314652665301187_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=dd63ad&_nc_ohc=dZGx-LzhO7AAX8c3654&_nc_ht=scontent.faqb1-2.fna&oh=00_AfCcP1XOZLxQpAlE2WavFLhjqkH3vJG96Rv_XEb8uogtUA&oe=64DC7C6A"
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
