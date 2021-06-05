import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import MoreIcon from '@material-ui/icons/MoreVert';
import 'fontsource-roboto';
import {Link} from 'react-router-dom';
import Button from '@material-ui/core/Button'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  toolbar: {
    minHeight: 128,
    alignItems: 'flex-start',
    paddingTop: theme.spacing(1),
    paddingBottom: theme.spacing(5),    
  },
  title: {
    flexGrow: 1,
    alignSelf: 'flex-end',
  },
}));

export default function ProminentAppBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static"className='Header'>
        <Toolbar className={classes.toolbar}>          
          <Button className={classes.title}variant='text'>
            <Link to='/'>
              <Typography variant="h5" noWrap>
                le da Vjncj code
              </Typography>
            </Link>
          </Button>          
        </Toolbar>
      </AppBar>
    </div>
  );
}
