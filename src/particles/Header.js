import React from 'react';
import {Link} from "react-router-dom";
import {lightBlue,red} from '@material-ui/core/colors';
import {Container,Grid,Paper,Button,AppBar,Toolbar,IconButton,Typography} from '@material-ui/core';
import {MenuIcon,SearchIcon,MoreIcon} from '@material-ui/icons';





const Header=()=>{
  return(
    <header>
      <Container maxWidth='sm'>
        <Grid container>
          <Grid item xs={12}>
            {/* <ThemeProvider useStyles={theme}> */}
              <Paper elevation={3}>
                testing & proving
              </Paper>
            {/* </ThemeProvider> */}
          </Grid>
        </Grid>
      </Container>
    </header>
  )
}
export default Header;