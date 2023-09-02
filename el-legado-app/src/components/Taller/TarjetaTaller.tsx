
import AspectRatio from '@mui/joy/AspectRatio';
import Button from '@mui/joy/Button';
import Card from '@mui/joy/Card';
import CardContent from '@mui/joy/CardContent';
import IconButton from '@mui/joy/IconButton';
import Typography from '@mui/joy/Typography';
import BookmarkAdd from '@mui/icons-material/BookmarkAddOutlined';


// * Tarjeta para mostrar en el landing page 
export const TarjetaTaller = () => {
    return (
        <Card variant="outlined" sx={{ width: 320 }}>
            <div>
                <Typography level="title-lg">Yosemite National Park</Typography>
                <Typography level="body-sm">April 24 to May 02, 2021</Typography>
                <IconButton
                    aria-label="bookmark Bahamas Islands"
                    variant="plain"
                    color="neutral"
                    size="sm"
                    sx={{ position: 'absolute', top: '0.875rem', right: '0.5rem' }}
                >
                    <BookmarkAdd />
                </IconButton>
            </div>
            <AspectRatio minHeight="120px" maxHeight="200px">
                <img
                    src="https://github.com/JuanDiegoAlv1234/ImagenesVarias/blob/master/taller.jpg?raw=true"
                    srcSet="https://github.com/JuanDiegoAlv1234/ImagenesVarias/blob/master/taller.jpg?raw=true 2x"
                    loading="lazy"
                    alt=""
                />
            </AspectRatio>
            <CardContent orientation="horizontal">
                <div>
                    <Typography level="body-xs">Total price:</Typography>
                    <Typography fontSize="lg" fontWeight="lg">
                        $2,900
                    </Typography>
                </div>
                <Button
                    variant="solid"
                    size="md"
                    color="primary"
                    aria-label="Explore Bahamas Islands"
                    sx={{ ml: 'auto', alignSelf: 'center', fontWeight: 600 }}
                >
                    Explore
                </Button>
            </CardContent>
        </Card>
    );
}
