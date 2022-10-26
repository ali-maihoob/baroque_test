import * as React from 'react';
import './TwoFields.styles.scss';
import Popover from '@mui/material/Popover';
import Button from '@mui/material/Button';
import {ReactComponent as ArrowDown} from '../../../assets/icons/arrow-down.svg';


const TwoFields = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [minimum, setMinimum] = React.useState(1);
  const [maximum, setMaximum] = React.useState(50);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleChangeMinimum = (event) => {
    setMinimum(event.target.value);
  }

  const handleChangeMaximum = (event) => {
    setMaximum(event.target.value);
  }

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;

  return (
    <div className='two-fields'>
      <label>Guests</label>
      <Button aria-describedby={id} onClick={handleClick}>
        <span>Guests</span>
        <ArrowDown className='icon'/>
      </Button>
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
      >
        <div className='two-fields__popover-content'>
          <div className='two-fields__form-group'>
            <label>Minimum</label>
            <input
              type='number'
              value={minimum}
              onChange={handleChangeMinimum}
            />
          </div>
          <div className='two-fields__form-group'>
            <label>Maximum</label>
            <input
              type='number'
              value={maximum}
              onChange={handleChangeMaximum}
            />
          </div>
        </div>
      </Popover>
    </div>
  );
}
export default TwoFields;