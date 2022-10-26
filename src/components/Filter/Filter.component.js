import * as React from 'react';
import './Filter.styles.scss';
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import SelectMaterial from '@mui/material/Select';
import Select from "../Controls/Select/Select.component";
import DateRangePicker from "../Controls/DatePicker/DatePicker.component";
import TwoFields from "../Controls/TwoFields/TwoFields.component";
import {
  locationOptions, lookingOptions, yachtNamesOptions, filterByOptions, builderOptions, builtOptions,
  refitOptions, yachtTypeOptions, lengthOptions, currencyOptions, toysOptions, amenitesOptions,
  sortOptions, cabinsOptions
} from '../../data/data';
import FormControlLabel from "@mui/material/FormControlLabel";
import SliderItem from "../Controls/SliderItem/SliderItem.component";
import Checkbox from "@mui/material/Checkbox";
import {ReactComponent as CheckBoxIcon} from "../../assets/icons/checkbox.svg";
import {ReactComponent as CheckedBoxIcon} from "../../assets/icons/checkbox-checked.svg";
import FormControl from "@mui/material/FormControl";
import {ReactComponent as ArrowDownIcon} from "../../assets/icons/arrow-down.svg";
import MenuItem from "@mui/material/MenuItem";
const Filter = () => {
  const [collapse, setCollapse] = React.useState(false);
  const [looking, setLooking] = React.useState(2);

  const handleLookingChange = (event) => {
    setLooking(event.target.value);
  };

  const toggleCollapse = () => {
    setCollapse(!collapse);
  };
  return (
    <section className='filters'>
      <Container>
        <div className="filters_content">
          <Grid container columns={24}>
            <Grid item lg={3}>
              <FormControl sx={{ m: 1, minWidth: 120 }} size="small" className='select-group'>
                <label>Looking for</label>
                <SelectMaterial
                  value={looking}
                  onChange={handleLookingChange}
                  displayEmpty
                  inputProps={{ 'aria-label': 'Without label' }}
                  IconComponent={ArrowDownIcon}
                  defaultChecked={1}
                >
                  {
                    lookingOptions.map((option) => {
                      return <MenuItem key={option.id} value={option.id}>{option.value}</MenuItem>
                    })
                  }
                </SelectMaterial>
              </FormControl>
            </Grid>
            <Grid item lg={3} className={`${looking === 3 ? 'hidden' : ''}`}>
              <Select
                options={locationOptions}
                label='Location'
              />
            </Grid>
            <Grid item lg={5} className={`${looking === 3 ? 'hidden' : ''}`}>
              <DateRangePicker/>
            </Grid>
            <Grid item lg={2} className={`${looking === 3 ? 'hidden' : ''}`}>
              <TwoFields/>
            </Grid>
            <Grid item lg={3} className={`${looking === 1 ? 'hidden' : ''}`}>
              <Select
                label='Yacht Name'
                options={yachtNamesOptions}
              />
            </Grid>
            <Grid item lg={8} className={`${looking !== 3 ? 'hidden' : ''}`}>
              <SliderItem
                label='Budget'
                options={currencyOptions}
                min={1000}
                max={50000}
                defaultValues={[5000, 10000]}
              />
            </Grid>
            <Grid item lg={3} className={`${looking !== 3 ? 'hidden' : ''}`}>
              <Select
                options={cabinsOptions}
                label='Cabins'
              />
            </Grid>
            <Grid item lg={3}>
              <div className='featured-checkbox'>
                <FormControlLabel
                  control={
                    <Checkbox
                      icon={<CheckBoxIcon />}
                      checkedIcon={<CheckedBoxIcon />}
                      sx={{
                        color: "#768A9A", outline: 'unset', borderRadius: '50%',marginLeft: '1rem',
                        '&.Mui-checked': {
                          color: "#768A9A",
                        },
                      }}
                    />
                  }
                  label="Featured only"
                />
              </div>
            </Grid>
          </Grid>
          <div className={`collapsed-container ${collapse ? "collapsed" : ""}`}>
            <Grid container columns={24}>
              <Grid item lg={3}>
                <Select
                  label='Filter by'
                  options={filterByOptions}
                />
              </Grid>
              <Grid item lg={3}>
                <Select
                  label='Yacht type'
                  options={yachtTypeOptions}
                />
              </Grid>
              <Grid item lg={3}>
                <Select
                  label='Builder'
                  options={builderOptions}
                />
              </Grid>
              <Grid item lg={3}>
                <Select
                  label='Built'
                  options={builtOptions}
                />
              </Grid>
              <Grid item lg={3}>
                <Select
                  label='Refit'
                  options={refitOptions}
                />
              </Grid>
            </Grid>
            <Grid container columns={24}>
              <Grid item lg={7}>
                <SliderItem
                  label='Length'
                  options={lengthOptions}
                  min={50}
                  max={500}
                  defaultValues={[50, 100]}
                />
              </Grid>
              <Grid item lg={7}>
                <SliderItem
                  label='Price'
                  options={currencyOptions}
                  min={1000}
                  max={50000}
                  defaultValues={[5000, 10000]}
                />
              </Grid>
              <Grid item lg={3}>
                <Select
                  label='Toys'
                  options={toysOptions}
                />
              </Grid>
              <Grid item lg={3}>
                <Select
                  label='Amenites'
                  options={amenitesOptions}
                />
              </Grid>
            </Grid>
          </div>
          <Grid container columns={15}>
            <Grid item xs={6} md={4} lg={2}>
              <Select
                label='Sort'
                options={sortOptions}
                minWidth={120}
              />
            </Grid>
            <Grid item xs={5} md={4} lg={2}>
              <div className="more-filters">
                <button
                  className='more-filters__btn'
                  onClick={toggleCollapse}
                >
                  {collapse ? 'Less' : 'More'} Filters
                  <span className='icon'>{collapse ? '-' : '+'}</span>
                </button>
              </div>
            </Grid>
            <Grid item xs={3} md={4} lg={2}>
              <div className="search">
                <button
                  className='search-btn'
                >
                  Search
                </button>
              </div>
            </Grid>
          </Grid>
        </div>
      </Container>
    </section>
  );
};

export default Filter;