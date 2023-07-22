import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const WalletCard = () => {
  return (
    <Card variant="outlined" sx={{maxWidth: "362px", width: '100%'}}>
      <CardContent>
        <Typography variant="h5" component="div">
          Main
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          Itau
        </Typography>
        <Typography variant="body2">
          Sample account description. Used for main things.
          <br />
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">View</Button>
      </CardActions>
    </Card>
  )
};

export default WalletCard;
