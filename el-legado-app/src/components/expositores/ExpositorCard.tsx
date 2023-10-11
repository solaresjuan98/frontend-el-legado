
import Avatar from '@mui/joy/Avatar';
 
import Card from '@mui/joy/Card';
import CardContent from '@mui/joy/CardContent';
import CardOverflow from '@mui/joy/CardOverflow';

import Typography from '@mui/joy/Typography';

import { Expositor } from '../util/interfaces';


interface Props {
  expositor: Expositor;
}

export const ExpositorCard = ({ expositor }: Props) => {
  return (
    <Card variant="solid"
      sx={{
        // width: 320,
        margin: '10px',
        height: '100%',
        maxWidth: '100%',
        boxShadow: 'lg',
        backgroundColor: '#CDD1F6'
      }}
    
    >
      <CardContent sx={{ alignItems: 'center', textAlign: 'center' }}>
        <Avatar src={expositor.img} sx={{ '--Avatar-size': '15rem' }} />
        {/* <Chip
          size="sm"
          variant="soft"
          color="primary"
          sx={{
            mt: -1,
            mb: 1,
            border: '3px solid',
            borderColor: 'background.surface',
          }}
        >
          
        </Chip> */}
        <Typography level="h3" textColor={"#241798"}>{expositor.nombre}</Typography>
        <Typography level="body-md" textColor={"#3E3A3E"} sx={{ maxWidth: '30ch' }}>
          {expositor.bio}
        </Typography>
     
      </CardContent>
      <CardOverflow sx={{ bgcolor: 'background.level1' }}>
        {/* <CardActions buttonFlex="1">
          <ButtonGroup variant="outlined" sx={{ bgcolor: 'background.surface' }}>
            <Button>Message</Button>
            <Button>Connect</Button>
          </ButtonGroup>
        </CardActions> */}
      </CardOverflow>
    </Card>
  );
}