import * as React from 'react';
import { Link } from 'react-router-dom';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

export default function BasicButtons() {
  return (
    <Stack spacing={2} direction="row">
      
      <Button variant="contained" style={{backgroundColor:'grey',width: '250px',height:'50px',alignContent:'center'}}><Link style={{textDecoration:'none',color:'black'}} to="/login">SEARCH BUS</Link></Button>
      
    </Stack>
  );
}