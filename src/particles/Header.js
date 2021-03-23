import React from 'react';
import {Link} from "react-router-dom";
import {MenuIcon} from '@material-ui/icons/Menu';
import {Container,
        Grid,
        Button,
        AppBar,
        Toolbar,
        IconButton,
        Typography,
        makeStyles} from '@material-ui/core';

const useStyles=makeStyles(theme=>({
  root:{
    flexGrow:1,
  },
  menuButton:{
    marginRight:theme.spacing(2),
  },
  toolbar:{
    minHeight:128,
    alignItems:'flex-start',
    paddingTop:theme.spacing(1),
    paddingBottom:theme.spacing(2),
  },
  title:{
    flexGrow:1,
    alignSelf:'flex-end',
  },
}));
export default function ProminentAppBar(){
  const classes=useStyles();

  return(
    <div className={classes.root}>
      <AppBar position='static'>
        <Toolbar className={classes.toolbar}>
          <IconButton edge='start'className={classes.menuButton}color='inherit'aria-label='open drawer'>
            <MenuIcon/>
          </IconButton>
          
        </Toolbar>
      </AppBar>
    </div>
  );
}