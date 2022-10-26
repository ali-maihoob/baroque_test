import React from 'react';
import './Tags.styles.scss';
import {ReactComponent as DeleteIcon} from "../../../assets/icons/delete.svg";
import {ReactComponent as ArrowLeftIcon} from "../../../assets/icons/arrow-left.svg";
import {ReactComponent as ArrowRightIcon} from "../../../assets/icons/arrow-right.svg";
import Grid from "@mui/material/Grid";
const Tags = ({isOpen}) => {
  const [tags] = React.useState([
    {key: 1, value: 'Built'},
    {key: 3, value: 'Builder'},
    {key: 4, value: 'Refit'},
    {key: 5, value: 'Built'},
    {key: 6, value: 'Builder'},
    {key: 7, value: 'Refit'},
    {key: 8, value: 'Built'},
    {key: 9, value: 'Builder'},
    {key: 11, value: 'Refit'},
  ]);
  return (
    <div className='tags-container'>
      <Grid container>
        <Grid item xs={1} className={`${isOpen ? 'hidden' : ''}`}>
          <div className='main-icon'><ArrowLeftIcon /></div>
        </Grid>
        <Grid item xs={8}>
          <div className={`tags ${isOpen ? 'wrap' : ''}`}>
            {
              tags.map(tag => {
                return (
                  <div key={tag.key} className='tag-item'>
                    <span className='value'>{tag.value}</span>
                    <span className='icon'><DeleteIcon /></span>
                  </div>
                );
              })
            }
          </div>
        </Grid>
        <Grid item xs={1} className={`${isOpen ? 'hidden' : ''}`}>
          <div className='main-icon'><ArrowRightIcon /></div>
        </Grid>
        <Grid item xs={2}>
          <div className='actions'>
            <button
              className='clear-btn'
            >
              Clear all
            </button>
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

export default Tags;