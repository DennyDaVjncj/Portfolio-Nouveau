import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import 'fontsource-roboto';
import {Link} from 'react-router-dom';
import Button from '@material-ui/core/Button'

let OmniHead=()=>{
  return(
    <div>
      <Container maxWidth='lg'>
        <Grid container>
          <Grid item md>
            <Link to='/'>
              <Typography variant='h3'component='h3'className='omniHeadPositioning'>
                Le da Vjncj code
              </Typography>
            </Link>
          </Grid>
        </Grid>
      </Container>
    </div>
  )
}
export default OmniHead;