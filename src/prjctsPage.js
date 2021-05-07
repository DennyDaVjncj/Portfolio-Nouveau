import React from 'react';
import {Grid,Paper,Container,CardContent,Typography,Card,CardActionArea,CardActions,CardMedia,Button,makeStyles} from '@material-ui/core';
import workoutTracker from './imagery/reSizedGoku.jpg';
import TNC from './imagery/coolWorld.png';
import iSpend from './imagery/iSpend.svg';

let useStyles=makeStyles({
  root:{
    height:400,
    maxWidth:400
  }
});

let portfolio=()=>{
  return(
  <div>    
    <Grid container spacing={10}display='row'justify='space-around'alignContent='flex-end'>
      <Grid item xs>
        <Paper elevation={24}>
          <Card>
            <CardActionArea>
              <Paper elevation={24}>
                <CardMedia component='img'alt='Goku getting it in'image={workoutTracker}title='Circuit training tracker'/>
              </Paper>
              <CardContent>
                <Typography gutterBottom variant='h5'component='h5'>
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
        </Paper>
      </Grid>
      <Grid item xs>          
        <Card>
          <CardActionArea>
            <Paper elevation={9}>
              <CardMedia component='img'image={TNC}alt='a peacock'title='the New Cool, eCommerce site'/>
            </Paper>
            <CardContent>
              <Typography gutterBottom variant='h5'component='h5'>
                the New Cool
              </Typography>
              <Typography variant='body2'color='textSecondary'component='p'>
                the New Cool is an eCommerce site where a visitor can read an article on a variety of interesting topics, watch Cool content & even buy amazing fashion peices 
              </Typography>
            </CardContent> 
          </CardActionArea>
          <CardActions>
            <Button size='small'color='primary'>
              <a href='https://theNewCool.org'target='_blank'>
                Deployed App
              </a>
            </Button>
          </CardActions>
        </Card>                    
      </Grid>
      <Grid item xs>
        <Card>
          <CardActionArea>
            <Paper elevation={9}>
              <CardMedia component='img'image={iSpend}alt='a wallet with money potruding'/>
            </Paper>
            <CardContent>
              <Typography gutterBottom variant='h5'component='h5'>
                iSpend.pwa
              </Typography>
              <Typography variant='body2'color='textSecondary'component='p'>
                Your personal finance tracker; maintain a transactional ledger, on & offline
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Button size='small'color='primary'>
              <a href='https://agile-headland-12732.herokuapp.com/'target='_blank'>
                Deployed App
              </a>
            </Button>
            <Button size='small'color='primary'>
              <a href='https://github.com/DennyDaVjncj/iSpend.pwa'target='_blank'>
                Le Repository
              </a>
            </Button>
          </CardActions>
        </Card>
      </Grid>      
    </Grid>    
  </div>
)}
export default portfolio;