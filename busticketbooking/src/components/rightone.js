import * as React from 'react';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import ButtonBase from '@mui/material/ButtonBase';
import Button from '@mui/material/Button';
import RatingBadge from './rating';
import Box from '@mui/material/Box';

const Img = styled('img')({
    backgroundColor:'black',
  margin: 'auto',
  display: 'block',
  maxWidth: '100%',
  maxHeight: '100%',
});

export default function ComplexGrid() {
  return (
    <React.Fragment>
      <Paper
        sx={{
          p: 2,
          margin: 'auto',
          maxWidth: 900,
          flexGrow: 1,
          backgroundColor: (theme) =>
            theme.palette.mode === 'dark' ? 'black' : '#fff',
          mb: 5, // Add margin-bottom for space between cards
        }}
      >
        <Grid container spacing={2}>
          <Grid item xs={12} sm container>
            <Grid item xs container direction="column" spacing={2}>
              <Grid item xs>
                <Typography variant="subtitle1" component="div">
                  <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <span>IntrCity SmartBus</span>
                    <span>21:00</span>
                    <span>09h 55m</span>
                    <span>06:55</span>
                    <span>Starts from INR 1440</span>
                  </Box>
                </Typography>
                <Typography variant="body2" color="text.primary">
                  A/C Sleeper
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  <RatingBadge value={4} />
                </Typography>
              </Grid>
              <Grid item>
                
                <Button
                  variant="contained"
                  color="primary"
                  onClick={() => console.log('Button clicked')}
                  style={{ marginLeft: 'auto' }}
                >
                  SELECT SEATS
                </Button>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Paper>

      {/* Another Card */}
     
      <Paper
        sx={{
          p: 2,
          margin: 'auto',
          maxWidth: 900,
          flexGrow: 1,
          backgroundColor: (theme) =>
            theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
          marginBottom: 5, // Add margin-bottom for space between cards
        }}
      >
        <Grid container spacing={2}>
          <Grid item xs={12} sm container>
            <Grid item xs container direction="column" spacing={3}>
              <Grid item xs>
                <Typography variant="subtitle1" component="div">
                  <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <span>SPS SmartBus</span>
                    <span>18:30</span>
                    <span>08h 30m</span>
                    <span>03:00</span>
                    <span>Starts from INR 1200</span>
                  </Box>
                </Typography>
                <Typography variant="body2" color="text.primary">
                  Non-AC Seater
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  <RatingBadge value={3} />
                </Typography>
              </Grid>
              <Grid item>
                
                <Button
                  variant="contained"
                  color="primary"
                  onClick={() => console.log('Button clicked')}
                  style={{ marginLeft: 'auto' }}
                >
                  SELECT SEATS
                </Button>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Paper>

      {/* Another Card */}
      <Paper
        sx={{
          p: 2,
          margin: 'auto',
          maxWidth: 900,
          flexGrow: 1,
          backgroundColor: (theme) =>
            theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
          marginBottom: 5, // Add margin-bottom for space between cards
        }}
      >
        <Grid container spacing={2}>
          <Grid item xs={12} sm container>
            <Grid item xs container direction="column" spacing={2}>
              <Grid item xs>
                <Typography variant="subtitle1" component="div">
                  <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <span>Surya Travels</span>
                    <span>20:40</span>
                    <span>10h 45m</span>
                    <span>07:00</span>
                    <span>Starts from INR 1340</span>
                  </Box>
                </Typography>
                <Typography variant="body2" color="text.primary">
                  Non-A/C Sleeper
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  <RatingBadge value={5} />
                </Typography>
              </Grid>
              <Grid item>

                <Button
                  variant="contained"
                  color="primary"
                  onClick={() => console.log('Button clicked')}
                  style={{ marginLeft: 'auto' }}
                >
                  SELECT SEATS
                </Button>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Paper>
      <Paper
        sx={{
          p: 2,
          margin: 'auto',
          maxWidth: 900,
          flexGrow: 1,
          backgroundColor: (theme) =>
            theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
          mb: 5, // Add margin-bottom for space between cards
        }}
      >
        <Grid container spacing={2}>
          <Grid item xs={12} sm container>
            <Grid item xs container direction="column" spacing={2}>
              <Grid item xs>
                <Typography variant="subtitle1" component="div">
                  <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <span>City SmartBus</span>
                    <span>20:00</span>
                    <span>09h 50m</span>
                    <span>06:00</span>
                    <span>Starts from INR 1520</span>
                  </Box>
                </Typography>
                <Typography variant="body2" color="text.primary">
                  A/C Sleeper
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  <RatingBadge value={4} />
                </Typography>
              </Grid>
              <Grid item>
                
                <Button
                  variant="contained"
                  color="primary"
                  onClick={() => console.log('Button clicked')}
                  style={{ marginLeft: 'auto' }}
                >
                  SELECT SEATS
                </Button>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Paper>
      <Paper
        sx={{
          p: 2,
          margin: 'auto',
          maxWidth: 900,
          flexGrow: 1,
          backgroundColor: (theme) =>
            theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
          mb: 5, // Add margin-bottom for space between cards
        }}
      >
        <Grid container spacing={2}>
          <Grid item xs={12} sm container>
            <Grid item xs container direction="column" spacing={2}>
              <Grid item xs>
                <Typography variant="subtitle1" component="div">
                  <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <span>Chakra Travels</span>
                    <span>21:00</span>
                    <span>09h 55m</span>
                    <span>06:55</span>
                    <span>Starts from INR 1000</span>
                  </Box>
                </Typography>
                <Typography variant="body2" color="text.primary">
                  A/C Seater
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  <RatingBadge value={3.5} />
                </Typography>
              </Grid>
              <Grid item>
                
                <Button
                  variant="contained"
                  color="primary"
                  onClick={() => console.log('Button clicked')}
                  style={{ marginLeft: 'auto' }}
                >
                  SELECT SEATS
                </Button>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Paper>

      {/* Another Card */}
     
      
      
      
    </React.Fragment>
  );
}

    