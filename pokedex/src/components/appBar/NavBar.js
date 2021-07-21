import React from 'react'
import { AppBar, Toolbar, Typography } from '@material-ui/core'
import { withStyles } from '@material-ui/core/styles'

const NavBar = ({ classes })=>{
    return(
        <div>
        <AppBar className={classes.styleBar}>
        <Toolbar>
        <Typography component='p' variant='h4' className={classes.styleFont} >Pokedex</Typography>
        </Toolbar>
        </AppBar>
        </div>
    )
}

export default withStyles({
    styleBar:{
        background:'#BF2929'
    },
    styleFont:{
        color:'#2d2a2a'
    }
})(NavBar)