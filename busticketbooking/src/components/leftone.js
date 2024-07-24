import * as React from 'react';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import NetworkWifiIcon from '@mui/icons-material/NetworkWifi';
import LocalCafeOutlinedIcon from '@mui/icons-material/LocalCafeOutlined';
import HeadphonesBatteryOutlinedIcon from '@mui/icons-material/HeadphonesBatteryOutlined';
import ChargingStationOutlinedIcon from '@mui/icons-material/ChargingStationOutlined';
import LiveTvOutlinedIcon from '@mui/icons-material/LiveTvOutlined';
export default function CheckboxLabels() {
  return (
    <FormGroup>
        <h4>Departure time</h4>
      <FormControlLabel control={<Checkbox defaultChecked />} label="Before 6am" />
      <FormControlLabel control={<Checkbox defaultChecked />} label="6am to 12pm" />
      <FormControlLabel control={<Checkbox defaultChecked />} label="12pm to 6pm" />
      <FormControlLabel control={<Checkbox defaultChecked />} label="After 6pm" />
      <h4>Seat Availability</h4>
      <FormControlLabel control={<Checkbox defaultChecked />} label="Single seats" />
    <h4>Bus Types</h4>
      <FormControlLabel control={<Checkbox defaultChecked />} label="Seater" />
      <FormControlLabel control={<Checkbox defaultChecked />} label="Sleeper" />
      <FormControlLabel control={<Checkbox defaultChecked />} label="AC" />
     <h4>Arrival Time</h4>
      <FormControlLabel control={<Checkbox defaultChecked />} label="Before 6pm" />
      <FormControlLabel control={<Checkbox defaultChecked />} label="6am to 12pm" />
      <FormControlLabel control={<Checkbox defaultChecked />} label="12pm to 6pm" />
      <FormControlLabel control={<Checkbox defaultChecked />} label="After 6pm" />
      <h4>Amentities</h4>
      <h4><NetworkWifiIcon/> WIFI   </h4>
      <h4> <LocalCafeOutlinedIcon/>Coffee </h4> 
      <h4><HeadphonesBatteryOutlinedIcon/>Headphones</h4>
      <h4><ChargingStationOutlinedIcon/>Charging point</h4>
      <h4><LiveTvOutlinedIcon/>Movie</h4>

    </FormGroup>
    
  );
}