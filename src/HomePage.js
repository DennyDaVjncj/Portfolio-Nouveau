import {Paper,
       Container,
       Grid,
       Typography,
       Card,
       CardHeader} from '@material-ui/core';
// const projects = [{
//     id: 1,
//     title: 'final project'
// }];//mimicks a database that i'm pulling projects from

const HomePage = () => {
    return (
        <div>
            <Container maxWidth='lg'>                 
                <Grid container>
                    <Grid item xs={12}>
                        <Card raised={true}>
                            <img src="https://pbs.twimg.com/media/EBxrWWHXkAIU9-N.jpg"/>
                        </Card>
                        <div style>
                            <Paper>
                                <Typography variant='h5' gutterBottom>
                                    My name is Dennis Desmornes, I'm a recent graduate of the UCF Full Stack Web Development Program! I hope the fact shines through on this page alone
                                </Typography>
                            </Paper>
                        </div>
                    </Grid>
                </Grid>
            </Container>            
        </div>
    )
}
export default HomePage;