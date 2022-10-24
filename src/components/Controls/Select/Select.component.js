import React from 'react';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import {ReactComponent as ArrowDownIcon} from "../../../assets/icons/arrow-down.svg";
import './Component.styles.scss';
const SelectField = ({value, handleChange, options}) => {
  return (
    <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
      <Select
        value={value}
        onChange={handleChange}
        displayEmpty
        inputProps={{ 'aria-label': 'Without label' }}
        IconComponent={ArrowDownIcon}
      >
        <MenuItem value="">
          <em>None</em>
        </MenuItem>
        {
          options.map((option) => {
            return <MenuItem key={option.id} value={option.id}>{option.value}</MenuItem>
          })
        }
      </Select>
    </FormControl>
  );
};

export default SelectField;