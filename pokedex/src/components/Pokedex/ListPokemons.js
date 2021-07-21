import { Grid, withStyles } from "@material-ui/core";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllPokemon } from "../../redux/actions/actionPokemon";
import PokeCard from "./PokeCard";

const ListPokemons = ({ classes }) => {
  const dispatch = useDispatch();
  const pokemons = useSelector((state) => state.pokemonReducer.list_pokemons);

  useEffect(() => {
    dispatch(getAllPokemon());
  }, [dispatch]);
  return (
    <div className={classes.root}>
      <h1 className={classes.title}>Lista de Pokemones</h1>
      <Grid container spacing={3} justifyContent="center">
        {pokemons &&
          pokemons.map((p) => {
            return (
              <PokeCard
                key={p.name}
                name={p.name}
                img={
                  p.sprites.other["official-artwork"].front_default ||
                  p.sprites.front_default
                }
                id={p.id}
              />
            );
          })}
      </Grid>
    </div>
  );
};

export default withStyles({
  root: {
    flexGrow: 1,
    marginTop: "100px",
  },
  title: {
    textAlign: "center",
    color: "#2d2a2a",
  },
})(ListPokemons);
