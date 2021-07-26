import React, { useState } from "react";
import ListPokemons from "./ListPokemons";
import NavBar from "../appBar/NavBar";
import Banner from "../banner/Banner";
import { makeStyles, Hidden } from "@material-ui/core";
import DraWer from '../drawe/DraWer'

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

const Pokedex = () => {

  const classes = useStyles()
  const [openDrawer, setOpenDrawer] = useState(false);

  const deploy = ()=>{
    setOpenDrawer(!openDrawer)
  }
  return (
    <div className={classes.root}>
      <NavBar deploy={deploy}/>
      <Hidden xsDown>
        <DraWer variant="permanent" open={true} />
      </Hidden>
      <Hidden smUp>
        <DraWer
          variant="temporary"
          open={openDrawer}
          onClose={deploy}
        />
      </Hidden>
      <di className={classes.content}>
        <div className={classes.toolbar}></div>
        <ListPokemons />
      </di>
      
    </div>
  );
};

export default Pokedex;
