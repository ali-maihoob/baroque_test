import * as React from 'react';
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Select from "../Controls/Select/Select.component";
const Filter = () => {
  const options = [
    {
      id: 1,
      value: 'Daily'
    },
    {
      id: 2,
      value: 'Weekly'
    },
  ];
  const [age, setAge] = React.useState('');

  const handleChange = (event) => {
    setAge(event.target.value);
  };
  return (
    <section className='filters'>
      <Container>
        <div className="filters_content">
          <Grid container>
            <Grid item xs={1}>
              <Select
                value={age}
                handleChange={handleChange}
                options={options}
              />
            </Grid>
          </Grid>
        </div>
      </Container>
    </section>
  );
};

export default Filter;