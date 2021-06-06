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
import Selfie from './portfolioPic.jpg'
import {Link} from 'react-router-dom'
import AspectRatioSharpIcon from '@material-ui/icons/AspectRatioSharp';
import Grid from '@material-ui/core/Grid';

<<<<<<< Updated upstream
const useStyles=makeStyles({
    root:{
        opacity:.4,
        maxWidth:500           
    },   
    media:{
        height:500        
    }
});
const HomePage=()=>{    
return (
  <div>
    <Grid container display='row'justify='center'>
      <Grid item xs>
        <Card>
          <CardActionArea>
            <CardMedia                    
              image={Selfie}
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
      </Grid>
    </Grid>   
  </div>
  );
=======
let homePage=()=>{
    return(
        <div>
            <Container maxWidth='sm'>
                <Grid container display='column'alignItems='center'>
                    <Grid item xs>                        
                        <Card>
                            <CardActionArea>
                                <Paper elevation={20}>
                                    <CardMedia component='img'alt='a fine portrait of thine own visage'image={Portrait}title='Dennis Desmornes (Denny da Vjncj)'/>
                                </Paper>
                                <CardContent>
                                    <Typography gutterBottom variant='h4'component='h4'>
                                        Dennis Desmornes (Denny da Vjncj)
                                    </Typography>
                                    <Typography variant='h6'color='textPrimar'component='h6'>
                                        Recent graduate of UCF's Full Stack Web Development Program powered by 2U inc; in which the primary focus was gaining proficiency within the MERN stack. Software engineering is something I took to because of the highly creative nature invloved in programmatically finding solutions.
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                            <CardActions>
                                <Button size='small'color='inherit'>
                                    <Link to='./portfolio'>
                                        Le Portfolio
                                    </Link>
                                </Button>
                                <Button size='small'color='inherit'>
                                    <Link href='https://github.com/DennyDaVjncj'target='_blank'>
                                        GitHub
                                    </Link>
                                </Button>
                                <Button size='small'color='inherit'>
                                    <Link href='https://docs.google.com/document/d/1m1zEn6LABR0NyUbHnI7u6tkg-_SB9-HPY1yprxO48OM/edit#heading=h.kjltg4y8htb'target='_blank'>
                                        Mine Resume
                                    </Link>
                                </Button>
                                {/* address version control */}
                            </CardActions>
                        </Card>               
                    </Grid>
                </Grid>
            </Container>
        </div>
    )
>>>>>>> Stashed changes
}
export default HomePage;