import React from 'react';
import {Grid,Paper,Container,CardContent,Typography,Card,CardActionArea,CardActions,CardMedia,Button,makeStyles} from '@material-ui/core';
import workoutTracker from './imagery/reSizedGoku.jpg';
import TNC from './imagery/coolWorld.png';
import iSpend from './imagery/iSpend.svg';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import CardHeader from '@material-ui/core/CardHeader';
import {red}from'@material-ui/core/colors';

let Portfolio=()=>{
  return(
  <div className='enlightenedDiv'>
    <Container className='aLittleMargin'>
      <Grid container spacing={10}display='row'justify='space-around'alignContent='flex-end'>
        <Grid item lg>
            <Card>
              <CardHeader avatar={
                <Avatar aria-label='App composition'>
                  CTT
                </Avatar>
              }             
              title='Circuit Training Tracker'
              subheader='Health the aim, sexy the motivation'/>
              <CardActionArea>
                <Paper elevation={24}>
                  <CardMedia component='img'alt='Goku getting it in'image={workoutTracker}title='Circuit training tracker'/>
                </Paper>
                <CardContent>                  
                  <Typography variant='body1'color='textPrimary'component='p'>
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
                  <IconButton>
                    <ExpandMoreIcon/>
                  </IconButton>
              </CardActions>
            </Card>
        </Grid>
        <Grid item xs>         
          <Card>
              <CardHeader avatar={
                <Avatar aria-label='App composition'>
                  TNC
                </Avatar>
              }             
              title='the New Cool'
              subheader='All your desires, all in one place'/>
            <CardActionArea>
              <Paper elevation={24}>
                <CardMedia component='img'image={TNC}alt='a globe wearing shades'title='the New Cool, eCommerce site'/>
              </Paper>
              <CardContent>
                <Typography gutterBottom variant='h4'component='h4'>
                  the New Cool
                </Typography>
                <Typography variant='body1'color='textPrimary'component='p'>
                Find content, great fashion, tech gadgets & housewares! All of that all in one place: the New Cool. We're constantly looking for ways to add more value to our visitors and keep you wanting more. We hope you enjoy and tell everyone you know about us, thank you in advance! 
                </Typography>
              </CardContent> 
            </CardActionArea>
            <CardActions>
              <Button size='small'color='primary'>
                <a href='https://theNewCool.org'target='_blank'>
                  Deployed App
                </a>
              </Button>
              <IconButton>
                <ExpandMoreIcon/>
              </IconButton>
            </CardActions>
          </Card>                    
        </Grid>
        <Grid item xs>
          <Card>
          <CardHeader avatar={
                <Avatar aria-label='App composition'>
                  iSP
                </Avatar>
              }             
              title='iSpend.pwa'
              subheader='A penny saved...'/>
            <CardActionArea>
              <Paper elevation={24}>
                <CardMedia component='img'image={iSpend}alt='a wallet with money potruding'/>
              </Paper>
              <CardContent>
                <Typography gutterBottom variant='h4'component='h4'>
                  iSpend.pwa
                </Typography>
                <Typography variant='body1'color='textPrimary'component='p'>
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
              <IconButton>
                <ExpandMoreIcon/>
              </IconButton>
            </CardActions>
          </Card>
        </Grid>      
      </Grid>
    </Container>
  </div>
)}
export default Portfolio;