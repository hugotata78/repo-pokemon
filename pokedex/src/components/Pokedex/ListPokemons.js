import { Grid, withStyles } from "@material-ui/core";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPokemons } from "../../redux/actions/actionPokemon";
import PokeCard from "./PokeCard";

const ListPokemons = ({ classes }) => {
  const dispatch = useDispatch();
  const pokemons = useSelector((state) => state.pokemonReducer.pokemons);

  useEffect(() => {
    dispatch(getPokemons());
  }, [dispatch]);
  return (
    <div>
      <h1 className={classes.title}>Lista de Pokemones</h1>
      <Grid container spacing={16} justifyContent="center">
        {pokemons &&
          pokemons.map((p) => {
            return <PokeCard key={p.name} name={p.name} />;
          })}
      </Grid>
    </div>
  );
};

export default withStyles({
    title:{
        textAlign:'center',
        color:'#2d2a2a'
    }
})(ListPokemons);
