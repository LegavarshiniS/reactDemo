import * as React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Image1 from './img1.webp';
import Image2 from './img2.png';
import Image3 from './img3.jpeg';

const CenteredContent = () => {
  return (
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh',color:'white' }}>
      <Box
        sx={{
          display: 'flex',
          flexWrap: 'wrap',
          '& > :not(style)': {
            m: 1,
            width: 280,
            height: 280,
          },
        }}
      >
        <Paper elevation={3}>
          <img src={Image1} alt="Image 1" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
        </Paper>
        <Paper elevation={3}>
          <img src={Image2} alt="Image 2" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
        </Paper>
        <Paper elevation={3}>
          <img src={Image3} alt="Image 3" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
        </Paper>
      </Box>
      <br></br><br></br>
    </div>
  );
};

export default CenteredContent;



