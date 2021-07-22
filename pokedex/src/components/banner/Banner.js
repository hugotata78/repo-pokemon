import { AppBar, Toolbar, Typography, withStyles } from '@material-ui/core'
import React from 'react'

const Banner = ({classes})=>{
    return (
        <AppBar className={classes.root}>
            <Toolbar>
                <Typography component='p' variant='h2' className={classes.title}>
                    PokéDex
                </Typography>
            </Toolbar>
        </AppBar>
    )
}

export default withStyles({
    root:{
        marginTop:'80px',
        backgroundColor:'#140D0D',
        padding:'50px',
        alignItems:'center',
        justifyContent:'center'
    },
    title:{
        color:'#FFCC03',
        fontWeight:'bold',
        WebkitTextStroke:'2px blue',
        fontSize:'70px'
    }
    
})(Banner)