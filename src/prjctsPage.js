import React from 'react';
import {Grid,Paper,Container} from '@material-ui/core';
import thumbNail from './imagery/workoutTrackerThumbNail.jpg'

let portfolio=()=>{
  return(
  <div>
    <Container maxWidth='sm'>
      <Grid container spacing={9}>
        <Grid item xs={6}>
          <Paper>
            <img src={thumbNail}/>
          </Paper>
        </Grid>
        <Grid item xs={6}>
          <Paper>
            'hey, my name is denny da vjncj'
          </Paper>
          {/**with image include a link to repo. consider use of card component to include various links. also include a brief description with a list of tools used */}
        </Grid>
      </Grid>
    </Container>
  </div>
)}
export default portfolio;
{/**
- consider 'pagination', cool ways to navigate from page to page
*/}