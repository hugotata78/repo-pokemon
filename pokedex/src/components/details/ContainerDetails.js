import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { getPokemon } from "../../redux/actions/actionPokemon";
import NavBar from "../appBar/NavBar";

import PokeDetails from "./PokeDetails";
import { makeStyles, Hidden } from "@material-ui/core";
import DraWer from "../drawe/DraWer";

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

const ContainerDetails = () => {
  const classes = useStyles();
  const { name } = useParams();
  const dispatch = useDispatch();
  const pokemon = useSelector((state) => state.pokemonReducer.pokemon);
  const [openDrawer, setOpenDrawer] = useState(false);

  const deploy = () => {
    setOpenDrawer(!openDrawer);
  };
  
  useEffect(() => {
    dispatch(getPokemon(name));
  }, [dispatch, name]);
  return (
    <div className={classes.root}>
      <NavBar deploy={deploy} />
      <Hidden xsDown>
        <DraWer variant="permanent" open={true} />
      </Hidden>
      <Hidden smUp>
        <DraWer variant="temporary" open={openDrawer} onClose={deploy} />
      </Hidden>
      <di className={classes.content}>
        <div className={classes.toolbar}></div>
        <PokeDetails pokemon={pokemon} />
      </di>
    </div>
  )
};

export default ContainerDetails;
