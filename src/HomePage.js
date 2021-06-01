import React from 'react';
import Portrait from './imagery/portfolioPic.jpg';
import {Grid,Paper,Container,CardContent,Typography,Card,CardActionArea,CardActions,CardMedia,Button} from '@material-ui/core';

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
                            </CardActionArea>
                        </Card>                        
                    </Grid>
                </Grid>
            </Container>
        </div>
    )
}
export default homePage;