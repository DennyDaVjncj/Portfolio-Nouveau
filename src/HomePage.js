import React from 'react';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import {blue,red} from '@material-ui/core/colors';
import Paper from '@material-ui/core/Paper';
import Portrait from './imagery/portfolioPic.jpg';
import {Link} from 'react-router-dom';
import AspectRatioSharpIcon from '@material-ui/icons/AspectRatioSharp';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';

let HomePage=()=>{
    return(
        <div className='enlightenedDiv'>
            <Container maxWidth='lg'>
                <Grid container display='column'alignItems='center'>
                    <Grid item xs>                    
                        <Card className='viewHeight'>
                            <CardActionArea>
                                <Paper elevation={24}>
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
                                <Button size='medium'color='inherit'>
                                    <Link to='/portfolio'>
                                        Le Portfolio
                                    </Link>
                                </Button>
                                <Button size='medium'color='inherit'>
                                    <a href='https://github.com/DennyDaVjncj'target='_blank'>
                                        GitHub
                                    </a>
                                </Button>
                                <Button size='medium'color='primary'>
                                    <a href='https://www.linkedin.com/in/ambiguousambition/'target='_blank'>
                                        LinkedIn
                                    </a>
                                </Button>
                                <Button size='medium'color='inherit'>
                                    <a href='https://docs.google.com/document/d/1P3Gm_DYJq_YDKver0KzaIjvqlq17N-DetvetCOFl9HE/edit#'target='_blank'>
                                        Mine Resume
                                    </a>
                                </Button>
                                <Button size='medium'color='secondary'>
                                    <a href='mailto:daVjncjCode@gmail.com'>
                                        eMail me!
                                    </a>
                                </Button>
                            </CardActions>
                        </Card>               
                    </Grid>
                </Grid>
            </Container>
        </div>
    )
}
export default HomePage;