import React from 'react';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import {ReactComponent as ArrowDownIcon} from "../../../assets/icons/arrow-down.svg";
import './Select.styles.scss';
const SelectField = ({options, label, minWidth = 120}) => {
  const [value, setValue] = React.useState(1);

  const handleChange = (event) => {
    setValue(event.target.value);
  };
  return (
    <FormControl sx={{ m: 1, minWidth: minWidth }} size="small" className='select-group'>
      <label>{label}</label>
      <Select
        value={value}
        onChange={handleChange}
        displayEmpty
        inputProps={{ 'aria-label': 'Without label' }}
        IconComponent={ArrowDownIcon}
        defaultChecked={1}
      >
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