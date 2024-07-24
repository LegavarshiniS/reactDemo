 import * as React from 'react';
 import CssBaseline from '@mui/material/CssBaseline';
 import Box from '@mui/material/Box';
 import Container from '@mui/material/Container';
import CheckboxLabels from './leftone';
import ComplexGrid from './rightone';

 export default function SimpleContainer() {
   return (
    
     <React.Fragment>
     <CssBaseline />
     <br></br><br></br>
     <h2 style={{textAlign:'center',fontFamily:'cursive'}}>BOOK YOUR TICKETS NOW!!</h2>
     <div style={{ display: 'flex' }}>
      <Container maxWidth="xs" sx={{ marginRight: 0, paddingRight: '130px',marginTop:'40px' }}>
        <Box sx={{ bgcolor: 'white', height: '140vh' }} ><br></br>
          <CheckboxLabels/>
        </Box>
       </Container>
      <Container maxWidth="xl" sx={{ marginLeft: 0, paddingLeft: '130px',marginTop:'40px' }}>
         <Box sx={{ bgcolor: 'white', height: '140vh' }}>
       <ComplexGrid/>
       </Box>
     </Container>
     </div>
  </React.Fragment>
    
  );
 }