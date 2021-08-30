import React, { useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
    Divider,
    List,
    ListItem,
    ListItemIcon,
    ListItemText,
} from "@material-ui/core";
import ArrowRightIcon from "@material-ui/icons/ArrowRight";
import { useDispatch, useSelector } from "react-redux";
import { getTypesPokemon } from "../../redux/actions/actionPokemon";
import { useHistory } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
    root: {
        width: "100%",
    },
    heading: {
        fontSize: theme.typography.pxToRem(15),
        fontWeight: theme.typography.fontWeightRegular,
    },
}));

const Order = () => {
    const classes = useStyles();
    const dispatch = useDispatch();
    const count = useSelector((state) => state.pokemonReducer.list_pokemons.count);
    const history = useHistory()


    const handleClick = (e, name) => {
        e.preventDefault()
        history.push(`/type/${name}`)
    }

    console.log(count)
    return (
        <div className={classes.root}>
            <List component="nav">
                <ListItem button >
                    <ListItemIcon  >
                        <ArrowRightIcon />
                    </ListItemIcon>
                    <ListItemText primary='Nombre' />
                </ListItem>
                <ListItem button >
                    <ListItemIcon  >
                        <ArrowRightIcon />
                    </ListItemIcon>
                    <ListItemText primary='Mayor Ataque' />
                </ListItem>
                <ListItem button>
                    <ListItemIcon  >
                        <ArrowRightIcon />
                    </ListItemIcon>
                    <ListItemText primary='Mayor Defensa' />
                </ListItem>
                <Divider />
            </List>
        </div>
    );
};

export default Order;
