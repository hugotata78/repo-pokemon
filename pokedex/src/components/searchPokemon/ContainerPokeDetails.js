import React,{ useState } from "react";
import {  useSelector } from "react-redux";
import PokeDetails from "./PokeDetails";
import { makeStyles, Hidden } from "@material-ui/core";
import DraWer from "../drawe/DraWer";
import Loading from "./Loading";
import Errors from "./Errors";
import NavBar from "../appBar/NavBar";


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

const ContainerPokeDetails = () => {
  const classes = useStyles(); 
  const [openDrawer, setOpenDrawer] = useState(false);
  const pokemon = useSelector((state) => state.pokemonReducer.poke_data);
  const loading = useSelector(state=>state.pokemonReducer.loading)
  const error = useSelector(state=>state.pokemonReducer.error)
  
  const deploy = () => {
    setOpenDrawer(!openDrawer);
  };

  return (
    <div >
      <NavBar deploy={deploy}/>
      <Hidden xsDown>
        <DraWer variant="permanent" open={true} />
      </Hidden>
      <Hidden smUp>
        <DraWer variant="temporary" open={openDrawer} onClose={deploy} />
      </Hidden>
      <div className={classes.content}>
        <div className={classes.toolbar}></div>
        {loading && <Loading/>}
        {pokemon && <PokeDetails pokemon={pokemon} />}
        {error  && <Errors/>}
      </div>
    </div>
  )
};

export default ContainerPokeDetails;
