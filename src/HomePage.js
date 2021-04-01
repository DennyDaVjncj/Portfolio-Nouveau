import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';//what is this?
//mimicks a database that i'm pulling projects from

const useStyles=makeStyles(theme=>({
    root:{
        maxWidth:345,
    },
    media:{
        height:0,
        paddingTop:'56.25%',//16:9
    },
    expand:{
        transform:'rotate(0deg)',
        marginLeft:'auto',
        transition:theme.transitions.create('transform',{
            duration:theme.transitions.duration.shortest,
        }),
    },
    expandOpen:{
        transform:'rotate(180deg)'
    },
    avatar:{
        backgroundColor:red[500],
    },
}));
export default function RecipeReviewCard(){
    const classes=useStyles()
    const [expanded,setExpanded]=React.useState(false)
    const handleExpandClick=()=>{
        setExpanded(!expanded)
    }
return (
    <div>               
        <Card className={classes.root}>
            <CardHeader avatar={
                <Avatar aria-label='recipe'className={classes.avatar}>
                    V
                </Avatar>
            }
            action={
                <IconButton aria-label='settings'>
                    <MoreVertIcon/>
                </IconButton>
            }
            title='Shrimp and Chorizo Paella'
            subheader='September 14, 2016'/>
            <CardMedia className={classes.media}image='/static/images/cards/paella.jpg'title='Paella dish'/>
            <CardContent>
                <Typography variant='body2'color='textSecondary'component='p'>
                    Software engineering is the perfect mix of technical prowless & unlimeted creativity
                </Typography>
            </CardContent>
            <CardActions disableSpacing>
                <IconButton aria-label='add to favorites'>
                    <FavoriteIcon/>
                </IconButton>
                <IconButton aria-label='share'>
                    <ShareIcon/>
                </IconButton>
                <IconButton className={clsx(classes.expand,{
                    [classes.expandOpen]:expanded,
                })}
                onClick={handleExpandClick}
                aria-expanded={expanded}
                aria-label='show more'>
                    <ExpandMoreIcon/>
                </IconButton>
            </CardActions>
            <Collapse in={expanded}timeout='auto'unmountOnExit>
                <CardContent>
                    <Typography paragraph>Methodology:</Typography>
                    <Typography paragraph>
                        aim, shoot... fire!
                    </Typography>
                </CardContent>
            </Collapse>
        </Card>                            
    </div>)}
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