import React from 'react';
import {Grid,Paper,Container} from '@material-ui/core';

let portfolio=()=>{
  return(
  <div>
    <Container maxWidth='sm'>
      <Grid container spacing={9}>
        <Grid item xs={6}>
          <Paper>'hey, my name is denny da vjncj'</Paper>
        </Grid>
        <Grid item xs={6}>
          <Paper>'hey, my name is denny da vjncj'</Paper>
        </Grid>
      </Grid>
    </Container>
  </div>
)}
export default portfolio;