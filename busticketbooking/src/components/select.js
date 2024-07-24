import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import ListSubheader from '@mui/material/ListSubheader';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import GroupSelect from './select2';


export default function GroupedSelect() {
  return (
    <div>
      <center>
    <div style={{ marginBottom: '10px' }}>
      <FormControl sx={{ m: 1, minWidth: 260,margin:7,marginBottom:3 }}>
        <InputLabel htmlFor="grouped-native-select">FROM</InputLabel>
        <Select native defaultValue="" id="grouped-native-select" label="Grouping">
          <option aria-label="None" value="" />
          <optgroup> 
            <option value={1}>Chennai</option>
            <option value={2}>Coimbatore</option>
            <option value={3}>Madurai</option>
            <option value={4}>Tiruchirapalli</option>
            <option value={5}>Tirupur</option>
            <option value={6}>Salem</option>
            <option value={7}>Erode</option>
            <option value={8}>Tirunelveli</option>
            <option value={9}>Thoothukkudi</option>
            <option value={10}>Nagercoil</option>
            <option value={11}>Thanjavur</option>
            <option value={12}>Pallavaram</option>
            <option value={13}>Dindigul</option>
            <option value={14}>Vellore</option>
            <option value={15}>Kancheepuram</option>
            <option value={16}>Cuddalore</option>
            <option value={17}>Pudukkottai</option>
            <option value={18}>Neyveli</option>
            <option value={19}>Nagapattinam</option>
            <option value={20}>Karur</option>
           </optgroup> 
        </Select>
      </FormControl>
      </div>
      <GroupSelect/>
      </center>
      </div>
  );
  
}