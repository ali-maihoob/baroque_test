import * as React from 'react';
import Container from "@mui/material/Container";
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import './Subscribe.styles.scss';
import Grid from "@mui/material/Grid";
import {ReactComponent as SubscribeIcon} from '../../assets/icons/subscribe.svg';

const Subscribe = () => {
  return (
    <section className='subscribe'>
      <Container>
        <Grid container>
          <Grid className='subscribe__content' item xs={12} md={8}>
            <div className='subscribe__content-label'>Interested in:</div>
            <div className='subscribe__content-radio-group'>
              <FormGroup>
                <FormControlLabel control={
                  <Checkbox sx={{
                    color: "#DDD",outline: 'unset',borderRadius: '50%',
                    '&.Mui-checked': {
                      color: "#FFF",
                    },
                  }} />
                } label="Chartering a yacht"
                />
                <FormControlLabel control={
                  <Checkbox sx={{
                    color: "#DDD",outline: 'unset',borderRadius: '50%',
                    '&.Mui-checked': {
                      color: "#FFF",
                    },
                  }} />
                } label="Buying a yacht"
                />
                <FormControlLabel control={
                  <Checkbox sx={{
                    color: "#DDD",outline: 'unset',borderRadius: '50%',
                    '&.Mui-checked': {
                      color: "#FFF",
                    },
                  }} />
                } label="General updates"
                />
              </FormGroup>
            </div>
          </Grid>
          <Grid item xs={12} md={4}>
            <form action="#" className='subscribe__form'>
              <input
                className='subscribe__form-email'
                type='email'
                placeholder='Enter your email address'
              />
              <button className='subscribe__form-btn'>
                Subscribe
                <SubscribeIcon />
              </button>
            </form>
          </Grid>
        </Grid>
      </Container>
    </section>
  );
};
export default Subscribe;