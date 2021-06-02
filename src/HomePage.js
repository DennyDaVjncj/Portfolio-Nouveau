import React from 'react';
import Portrait from './imagery/portfolioPic.jpg';
import {Grid,Paper,Container,CardContent,Typography,Card,CardActionArea,CardActions,CardMedia,Button, Link} from '@material-ui/core';

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
                                    <Typography gutterBottom variant='h5'component='h5'>
                                        Dennis Desmornes (Denny da Vjncj)
                                    </Typography>
                                    <Typography variant='body2'color='textPrimar'component='p'>
                                        Recent graduate of UCF's Full Stack Web Development Program powered by 2U inc; in which the primary focus was gaining proficiency within the MERN stack. Software engineering is something I took to because of the highly creative nature invloved in programmatically finding solutions.
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                            <CardActions>
                                <Button size='small'color='inherit'>
                                    <Link>
                                    {/* focus on the react router Link incorporation */}
                                    </Link>
                                </Button>
                            </CardActions>
                        </Card>                        
                    </Grid>
                </Grid>
            </Container>
        </div>
    )
}
export default homePage;