import React from 'react';
import {Link} from 'react-router-dom';
import {Grid,Paper} from '@material-ui/core'

let artBasil=()=>{
    return(
        <Grid container spacing={10}>
            <Grid item xs={12}>
                <Grid container justify='center' spacing={spacing}{[0,1,2].map(value=>(
                    <Grid key={value} item>
                        <Paper className={classes.paper}/>
                ))}
            </Grid>
        </Grid>
    )
}
{/**set up navigation via stack(app.js) */}