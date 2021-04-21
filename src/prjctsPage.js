import React from 'react';
import {Grid,Paper,Container,CardContent,Typography,Card,CardActionArea,CardActions,CardMedia,Button, makeStyles} from '@material-ui/core';
import workoutTracker from './imagery/reSizedGoku.jpg';
import iSpend from './imagery/iSpend.png';
import Earth from './imagery/earth.png';

let useStyles=makeStyles({
  root:{
    maxWidth:400
  }
})

let portfolio=()=>{
  return(
  <div className='div'>
    <Container maxWidth='sm'>{/**showcase credentials */}
      <Grid container spacing={10}>
        <Grid item xs={8}>
          <Card>
            <CardActionArea>
              <CardMedia component='img'alt='Goku getting it in'height='250'image={workoutTracker}title='Circuit training tracker'/>       
              <CardContent>
                <Typography gutterBottom variant='h4'component='h2'>
                  Circuit Training Tracker
                </Typography>{/**add in tools used to build app */}
                <Typography variant='body2'color='textSecondary'component='p'>
                  This app is designed to help folks serious about their fitness track their progress/regression
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button size='small'color='primary'>
                <a href='https://stormy-tundra-80286.herokuapp.com/?id=600ccffa14955b0015415ea5'target='_blank'>
                  Deployed app
                </a>
              </Button>
              <Button size='small'color='primary'>
                <a href='https://github.com/DennyDaVjncj/circuitTrainingTracker'target='_blank'>
                  le repository
                </a>
              </Button>
            </CardActions>
          </Card>         
        </Grid>

        <Grid
        
        {/* <Grid item xs={4}>
          <Paper>
            <a href='https://agile-headland-12732.herokuapp.com/'target='_blank'>
              <img src={iSpend}/>
            </a>
          </Paper>
        </Grid> */}
          <Grid item xs={4}>
            <div>
              <a href='https://theNewCool.org'target='_blank'>
                <img src={Earth}/>
              </a>{/*give div a universe type background to give icon 'floating in interdimension' feel */}
            </div>          
          </Grid>          
        
      </Grid>
    </Container>
  </div>
)}
export default portfolio;
{/**
- consider 'pagination', cool ways to navigate from page to page
- with image include a link to repo. consider use of card component to include various links
*/}


{/**. also include a brief description with a list of tools used
           * - content for prjct descript need a new line for placement beneath imagery
           */}