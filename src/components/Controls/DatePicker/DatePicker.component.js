import * as React from 'react';
import './DatePicker.styles.scss';
import TextField from '@mui/material/TextField';
import { LocalizationProvider } from '@mui/x-date-pickers-pro';
import { AdapterDayjs } from '@mui/x-date-pickers-pro/AdapterDayjs';
import { DateRangePicker } from '@mui/x-date-pickers-pro/DateRangePicker';
import dayjs from "dayjs";

export default function BasicDateRangePicker() {
  const [value, setValue] = React.useState([dayjs('2022-10-25'), dayjs('2022-10-30')]);

  return (
    <div className='date-range-picker'>
      <LocalizationProvider
        dateAdapter={AdapterDayjs}
        localeText={{ start: false, end: false }}
      >
        <label>Date</label>
        <DateRangePicker
          value={value}
          onChange={(newValue) => {
            setValue(newValue);
          }}
          renderInput={(startProps, endProps) => (
            <React.Fragment>
              <TextField {...startProps} hiddenLabel size="small"/>
              <TextField {...endProps} hiddenLabel size="small"/>
            </React.Fragment>
          )}
        />
      </LocalizationProvider>
    </div>

  );
}
