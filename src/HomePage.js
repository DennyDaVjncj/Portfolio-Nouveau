import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import {blue, red} from '@material-ui/core/colors'
import Paper from '@material-ui/core/Paper'

const useStyles=makeStyles({
    root:{
        maxWidth:600,
        backgroundColor:"red",
        marginLeft:450.55
        
    },
    media:{
        height:499
    }
});
export default function MediaCard(){
    const classes=useStyles();

return (
  <>
    <Paper elevation={3}>
      <Card className={classes.root}>
        <CardActionArea>
          <CardMedia
            className={classes.media}
            image="/static/images/cards/contemplative-reptile.jpg"
            title="Contemplative Reptile"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              Denny da Vjncj (Dennis Desmornes)
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              Software engineering is the perfect combination in monetizing creativity...
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size="small" color="primary">
            Portfolio
          </Button>
          <Button size="small" color="primary">
            Contact
          </Button>
        </CardActions>
      </Card>
    </Paper>
  </>
  );
}

{/* <Card raised={true}>
    <img src="https://pbs.twimg.com/media/EBxrWWHXkAIU9-N.jpg"/>
</Card>
<div style>
    <Paper>
        <Typography variant='h5' gutterBottom>
            My name is Dennis Desmornes, I'm a recent graduate of the UCF Full Stack Web Development Program! I hope the fact shines through on this page alone
        </Typography>
    </Paper>
</div> */}