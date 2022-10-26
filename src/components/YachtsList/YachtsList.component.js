import * as React from 'react';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import './YachtsList.styles.scss';
import Yacht from "./Yaht/Yacht.component";
import {Yachts} from "../../data/data";

const sliceIntoChunks = (arr, chunkSize) => {
  const res = [];
  for (let i = 0; i < arr.length; i += chunkSize) {
    const chunk = arr.slice(i, i + chunkSize);
    res.push(chunk);
  }
  return res;
}

const YachtsList = () => {
  const parts = sliceIntoChunks(Yachts, 3);
  return (
    <section className='yachts-list'>
      <Container>
        {
          parts.map((row, index) => {
            return (
              <Grid container key={index}>
                {
                  row.map((yacht) => {
                    return (
                      <Grid item md={4} key={yacht.id} className='yacht-box'>
                        <Yacht yacht={yacht}/>
                      </Grid>
                    )
                  })
                }
              </Grid>
            );
          })
        }
      </Container>
    </section>
  );
};
export default YachtsList;