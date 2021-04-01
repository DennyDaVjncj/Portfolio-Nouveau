import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles=makeStyles({
    root:{
        maxWidth:666,        
    },
    media:{
        height:499
    }
});
export default function MediaCard(){
    const classes=useStyles();

return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image="/static/images/cards/contemplative-reptile.jpg"
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Lizard
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
            across all continents except Antarctica
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Share
        </Button>
        <Button size="small" color="primary">
          Learn More
        </Button>
      </CardActions>
    </Card>
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