import React from 'react';
import {Grid,Paper,Container} from '@material-ui/core';
import thumbNail from './imagery/reSizedGoku.jpg'
import iSpend from './imagery/iSpend.png';

let portfolio=()=>{
  return(
  <div>
    <Container maxWidth='sm'>
      <Grid container spacing={10}justify='space-around'>
        <Grid item xs={6}>
          <Paper>
            <a href='https://stormy-tundra-80286.herokuapp.com/?id=600ccffa14955b0015415ea5'>
              <img src={thumbNail}/>
            </a>
          </Paper>
        </Grid>
        <Grid item xs={6}>
          <Paper>
            <a href='https://agile-headland-12732.herokuapp.com/'target='_blank'>
              <img src={iSpend}/>
            </a>
          </Paper>
          {/**with image include a link to repo. consider use of card component to include various links. also include a brief description with a list of tools used
           * - content for prjct descript need a new line for placement beneath imagery
           */}
        </Grid>
      </Grid>
    </Container>
  </div>
)}
export default portfolio;
{/**
- consider 'pagination', cool ways to navigate from page to page
*/}