import { Grid, Hidden, makeStyles, Typography } from '@material-ui/core'
import React, {useEffect, useState} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { orderByNameAZ } from '../../../redux/actions/actionPokemon'
import NavBar from '../../appBar/NavBar'
import DraWer from '../../drawe/DraWer'
import Pagination from '../../paginacion/Pagination'
import ListPokemons from './ListPokemons'

const useStyles = makeStyles((theme) => ({
    root: {
        display: "flex",
    },
    toolbar: theme.mixins.toolbar,
    content: {
        flexGrow: 1,
        backgroundColor: theme.palette.background.default,
        padding: theme.spacing(3),
    },
    title: {
        marginTop: '20px',
        marginBottom: '20px'
    }
}))

const Container = () => {

    const classes = useStyles()
    const [openDrawer, setOpenDrawer] = useState(false);
    const [offSet, setOffset] = useState(0);
    const [limit,setLimit] = useState(12)
    const dispatch = useDispatch()
    const count = useSelector(state=>state.pokemonReducer.list_pokemons.count)
    const pokemons = useSelector(state=>state.pokemonReducer.orderByNameAZ)
    const nextPage = () => {
        setOffset(offSet + 12);
        setLimit(limit + 12)
    };

    const prevPage = () => {
        setOffset(offSet <= 0 ? 0 : offSet - 12);
        setLimit(limit - 12)
    };

    const deploy = () => {
        setOpenDrawer(!openDrawer);
    };

    useEffect(()=>{
        dispatch(orderByNameAZ(offSet,count,limit))
    },[dispatch,offSet,count,limit])

    
    return (
        <div className={classes.root}>
            <NavBar deploy={deploy} />
            <Hidden xsDown>
                <DraWer variant="permanent" open={true} />
            </Hidden>
            <Hidden smUp>
                <DraWer variant="temporary" open={openDrawer} onClose={deploy} />
            </Hidden>
            <div className={classes.content}>
                <div className={classes.toolbar}></div>
                <Grid
                    container
                    spacing={3}
                    justifyContent="center"
                >
                    <Typography component='p' variant='h3' className={classes.title}>
                        Pokemons ordenados A-Z
                    </Typography>
                </Grid>
                <ListPokemons pokemons={pokemons} />
                <Pagination nextPage={nextPage} prevPage={prevPage} offSet={offSet} />
            </div>
        </div>
    )
}

export default Container