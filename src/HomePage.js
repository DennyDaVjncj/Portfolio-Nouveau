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
            <a href='mailto: daVjncjCode@gmail.com'>
              email me!
            </a>
          </Button>
          <Button size="small" color="primary">
            <Link to='/portfolio'>
              Le portfolio
            </Link>
          </Button>
          <Button size="small" color="primary">
            <a href='https://docs.google.com/document/d/1qz9Qo_xlnGK4BvF6TUqJBfRB28xr-1p1lK_QK-7K16U/edit?pli=1'target='_blank'>
              the resume
            </a>
          </Button>
            {/**include a link to my resume right next to portfolio link, give them viewing access only */}
        </CardActions>
      </Card>
    </Paper>
  </div>
  );
}