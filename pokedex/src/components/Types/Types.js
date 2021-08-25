import React, { useEffect, useState } from 'react'
import NavBar from "../appBar/NavBar";
import { makeStyles, Hidden } from "@material-ui/core";
import DraWer from "../drawe/DraWer";
import Pagination from "../paginacion/Pagination";
import List from './List';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getTypesPokemonById } from "../../redux/actions/actionPokemon";

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
}));

const Types = () => {

    const dispatch = useDispatch()
    const pokemons = useSelector(state => state.pokemonReducer.types_pokemon)
    const classes = useStyles();
    const [openDrawer, setOpenDrawer] = useState(false);
    const [offSet, setOffset] = useState(0);
    const [limit, setLimit] = useState(12)
    const { name } = useParams()
    const unifiedLimit = limit < pokemons.length - offSet ? pokemons.length - offSet : limit

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

    useEffect(() => {
        dispatch(getTypesPokemonById(name, offSet, unifiedLimit))
    }, [dispatch, name, offSet, unifiedLimit])

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
                <List pokemons={pokemons.pokemons} />
                <Pagination nextPage={nextPage} prevPage={prevPage} offSet={offSet} count={pokemons.count}/>
            </div>
        </div>
    );
}

export default Types