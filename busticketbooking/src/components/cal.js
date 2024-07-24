import * as React from 'react';
import dayjs from 'dayjs';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import BasicButtons from './cli';

export default function ReferenceDateUsingValue() {
  return (
 <div style={{  justifyContent: 'center', alignItems: 'center', height: '100vh', margin:'10px 90px',}}>
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DemoContainer components={['DatePicker']}>
    
      
        <DatePicker
          defaultValue={dayjs('2022-04-17')}
          views={['year', 'month', 'day']}  style={{ width: '300px', height: '300px' }} 
        />
   
      </DemoContainer>
    </LocalizationProvider>
    <br></br><br></br>
    <BasicButtons/>
    </div>
  );
}