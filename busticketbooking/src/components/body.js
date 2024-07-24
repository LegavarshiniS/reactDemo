import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import GroupedSelect from "./select";
import ReferenceDateUsingValue from './cal';
export default function SimpleContainer() {
  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="sm">
        <Box sx={{ bgcolor: 'white', height: '70vh',margin:'50px 50px', }} >
          <GroupedSelect/>
          <br></br>
          <center><h3 style={{color:'black'}}>DATE OF TRAVEL</h3></center>
          <ReferenceDateUsingValue/>
          </Box>
      </Container>
    </React.Fragment>
  );
}
