import React from 'react';
import Rating from '@mui/material/Rating';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import StarIcon from '@mui/icons-material/Star';

const RatingBadge = ({ value, max = 5 }) => {
  return (
    <Box component="div" display="flex" alignItems="center">
      <Rating
        name="read-only"
        value={value}
        readOnly
        icon={<StarIcon style={{ color: '#FFD700' }} />} // Customize the star color
      />
      <Typography variant="body2" color="textSecondary">
        ({value}/{max})
      </Typography>  
    </Box>
  );
};

export default RatingBadge;

