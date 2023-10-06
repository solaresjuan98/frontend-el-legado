import * as React from 'react';
import Card from '@mui/joy/Card';
import CardContent from '@mui/joy/CardContent';
import Typography from '@mui/joy/Typography';

interface TarjePagoProps {
    total: string;
  }
  
  const TarjePago: React.FC<TarjePagoProps> = ({ total }) => {
    return (
      <Card orientation="horizontal" variant="outlined" sx={{ width: 260, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <CardContent sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
          <Typography level="h2" textColor={"#B5D534"}  mb={0.5}>
            {total}
          </Typography>
          <Typography level="h4">Total A pagar</Typography>
        </CardContent>
      </Card>
    );
  }
  
  export default TarjePago;