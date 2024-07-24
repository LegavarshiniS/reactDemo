
import {Link} from 'react-router-dom';
import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import DirectionsBusIcon from '@mui/icons-material/DirectionsBus';

const bull = (

  <Box 
      component="span"
        
            sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
              >
                  •
                    </Box>
                    );

                    export default function BasicCard() {
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
                                                                                                         <Card sx={{ minWidth: 700 ,minHeight:500,margin:5}}>
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
                                                                                                                                                                                                   ABOUT US
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
                                                                                                                                                                                                                                                                                                                                                <DirectionsBusIcon /> SAFEGO
                                                                                                                                                                                                                                                                                                                                                          </Typography><br></br>
                                                                                                                                                                                                                                                                                                                                                                  <Typography sx={{ mb: 5.5 }} color="text.primary" textAlign='center' margin='10px' fontFamily='cursive'>
                                                                                                                                                                                                                                                                                                                                                                               SAFEGO is the world's largest online bus ticket booking service trusted by <br></br>over 25 million happy customers globally.SAFEGO offers bus ticket<br></br> booking through its website, iOS and Android mobile apps for all major routes.<br></br>
                                                                                                                                                                                                                                                                                                                                                                               Booking a bus ticket online on SAFEGO app or website is very simple. You can download <br></br>the SAFEGO app or visit SAFEGO.in and enter your source, destination & travel date to check<br></br> the top-rated bus services available. You can then compare prices, ratings & amenities,<br></br> select your preferred seat, boarding & dropping points and make the payment using<br></br> multiple payment options like UPI, debit or credit card, net banking and more.<br></br> With redBus you can be assured of safe & secure payment methods and guaranteed travel <br></br>with the best seat and bus operator of your choice. Once the payment is confirmed, all you have to do <br></br>is pack your bags and get ready to travel with the m-ticket which you can show to the bus operator <br></br>on your mobile before boarding the bus. Online bus ticket booking with SAFEGO is that simple!
                                                                                                                                                                                                                                                                                                                                                                                  </Typography>
                                                                                                                                                                                                                                                                                                                                                                                          <Typography variant="body2">
                                                                                                                                                                                                                                                                                                                                                                                                   
                                                                                                                                                                                                                                                                                                                                                                                                             <br />
                                                                                                                                                                                                                                                                                                                                                                                                                       
                                                                                                                                                                                                                                                                                                                                                                                                                               </Typography>
                                                                                                                                                                                                                                                                                                                                                                                                                                     </CardContent>
                                                                                                                                                                                                                                                                                                                                                                                                                                           <CardActions>
                                                                                                                                                                                                                                                                                                                                                                                                                                           <Button variant="outlined"><Link style={{textDecoration:'none',color:'black'}} to="/">BACK</Link></Button>
                                                                                                                                                                                                                                                                                                                                                                                                                                                         </CardActions>
                                                                                                                                                                                                                                                                                                                                                                                                                                                           
                                                                                                                                                                                                                                                                                                                                                                                                                                                         </Card>
    </Box>
  );
}