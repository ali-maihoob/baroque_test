import * as React from 'react';
import './SliderItem.styles.scss';
import Popover from '@mui/material/Popover';
import Button from '@mui/material/Button';
import Grid from "@mui/material/Grid";
import Select from "../Select/Select.component";
import Slider from '@mui/material/Slider';

function valuetext(value) {
  return `${value}`;
}

const SliderItem = ({label, options, min, max, defaultValues}) => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [value, setValue] = React.useState(defaultValues)

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;

  return (
    <div className='slider-item'>
      <Grid container>
        <Grid item md={4} xs={5}>
          <Select
            label={label}
            options={options}
            minWidth={100}
          />
        </Grid>
        <Grid item md={8} xs={7}>
          <div className="slider-item__outer-btn">
            <Button aria-describedby={id} onClick={handleClick}>
              <span>Minimum: {value[0]}</span>
              <span className='divider'>|</span>
              <span>Maximum: {value[1]}</span>
            </Button>
          </div>
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
            <div className='slider-item__popover-content'>
              <Slider
                getAriaLabel={() => 'Temperature range'}
                value={value}
                size="small"
                onChange={handleChange}
                valueLabelDisplay="auto"
                getAriaValueText={valuetext}
                step={1}
                min={min}
                max={max}
                sx={{
                  width: 240,
                  color: 'var(--primary-color)',
                  '& .MuiSlider-thumb': {
                    color: '#FFF',
                    border: '1px solid #0A3050'
                  },
                }}
              />
              <div className="slider-item__values">
                <div className='slider-item__form-group'>
                  <label>Minimum</label>
                  <input
                    type='number'
                    value={value[0]}
                    readOnly
                  />
                </div>
                <div className='slider-item__form-group'>
                  <label>Maximum</label>
                  <input
                    type='number'
                    value={value[1]}
                    readOnly
                  />
                </div>
              </div>
            </div>
          </Popover>
        </Grid>
      </Grid>
    </div>
  );
}
export default SliderItem;