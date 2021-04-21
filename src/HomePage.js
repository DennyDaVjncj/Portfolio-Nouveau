import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import {blue,red} from '@material-ui/core/colors'
import Paper from '@material-ui/core/Paper'
import photo from './portfolioPic.jpg'
import {Link} from 'react-router-dom'
import AspectRatioSharpIcon from '@material-ui/icons/AspectRatioSharp';

const useStyles=makeStyles({
    root:{
        opacity:.3,
        maxWidth:500,
        marginLeft:450.55        
    },
    cardContent:{
        backgroundColor:blue
    },
    media:{
        height:499
    }
});
export default function MediaCard(){
    const classes=useStyles();

return (
  <div className={classes.root}>    
    <Paper variant='elevation'>
      <Card>{/**place arrows && frame around cardComponent */}
        <CardActionArea>
          <CardMedia
            className={classes.media}
            image={photo}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              Denny da Vjncj (Dennis Desmornes)
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              Software engineering has become a serious passion & professional ambition due to the creative nature involved in finding solutions
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size="small" color="primary">
            <Link to='/portfolio'>
              Le portfolio
            </Link>
          </Button>
          <Button size="small" color="primary">
            <a href='https://docs.google.com/document/d/1m1zEn6LABR0NyUbHnI7u6tkg-_SB9-HPY1yprxO48OM/edit?usp=sharing'target='_blank'>
              my Resume
            </a>{/*pdf */}
          <Button size="small" color="primary">
            <a href='https://github.com/DennyDaVjncj'target='_blank'>
              Github
            </a>
          </Button>
          </Button>
          <Button size="small" color="primary">
            <a href='https://www.linkedin.com/in/ambiguousambition/'target='_blank'>
              LinkedIn
            </a>
          </Button>          
          <Button size="small" color="primary">
            <a href='mailto: daVjncjCode@gmail.com'>
              email me!
            </a>
          </Button>          
        </CardActions>
      </Card>
    </Paper>
  </div>
  );
}