import React, { useState } from "react";
import ListPokemons from "./ListPokemons";
import NavBar from "../appBar/NavBar";
import { makeStyles, Hidden, Typography, Grid } from "@material-ui/core";
import DraWer from "../drawe/DraWer";
import Pagination from "../paginacion/Pagination";

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
  title:{
    marginTop:'20px',
    marginBottom:'20px'
  }
}));

const Pokedex = () => {
  const classes = useStyles();
  const [openDrawer, setOpenDrawer] = useState(false);
  const [offSet, setOffset] = useState(0);

  const nextPage = () => {
    setOffset(offSet + 12);
  };

  const prevPage = () => {
    setOffset(offSet <= 0 ? 0 : offSet - 12);
  };

  const deploy = () => {
    setOpenDrawer(!openDrawer);
  };
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
            PokeDex
          </Typography>
        </Grid>
        <ListPokemons offSet={offSet} />
        <Pagination nextPage={nextPage} prevPage={prevPage} offSet={offSet} />
      </div>
    </div>
  );
};

export default Pokedex;
