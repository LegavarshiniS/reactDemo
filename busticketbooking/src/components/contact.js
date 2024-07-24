import * as React from 'react';
import {Link} from 'react-router-dom';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import DirectionsBusIcon from '@mui/icons-material/DirectionsBus';
import ContactSupportIcon from '@mui/icons-material/ContactSupport';
import LiveHelpIcon from '@mui/icons-material/LiveHelp';
const bull = (
  <Box
    component="span"
    sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
  >
    •
  </Box>
);

export default function Basic() {
  return (
    <Box
      sx={{
           backgroundImage: 'url("./finalimg1.jpg")',
           backgroundColor:'grey',
           backgroundSize: 'cover',
           minHeight: '100vh', 
           display: 'flex',
           alignItems: 'center',
           justifyContent: 'center',
             }}
             >
    <Card sx={{ minWidth: 700,height:500,width:200 }}>
      <CardContent>
      <Typography
        sx={{
             fontSize: 28,
              color: 'text.primary',
               textAlign: 'center', // Center the text horizontally
              marginBottom: 2, // Add margin for spacing
                }}
               gutterBottom
                >
                 CONTACT US
                 </Typography>
                 <Typography
                     variant="h5"
                     component="div"
                     sx={{
                    textAlign: 'center', // Center the text horizontally
                    display: 'flex',
                     alignItems: 'center',
                    justifyContent: 'center',
                     }}
                   >
                   <DirectionsBusIcon /> SAFEGO<br></br>
                   
                   </Typography><br></br>
                   <Typography sx={{ mb: 5.5 }} color="text.primary" textAlign='center' margin='10px' fontFamily='cursive'>
                   COIMBATORE<br></br>
  Redbus India Private Limited,<br></br>
  JK Centre, 2nd floor, 5th,<br></br>
  Kannapiran Mills Rd,<br></br>
  Sowri Palayam, Nearby KIA service center<br></br>
  Coimbatore, Tamil Nadu - 641015.<br></br><br></br>
  <ContactSupportIcon/> HELP     <LiveHelpIcon/>  FAQ
        </Typography>
      </CardContent>
      <CardActions>
      <Button variant="outlined"><Link style={{textDecoration:'none',color:'black'}} to="/">BACK</Link></Button>
      </CardActions>
    </Card>
    </Box>
  );
}