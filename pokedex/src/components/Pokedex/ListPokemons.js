import { Grid } from "@material-ui/core";
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
    <Grid
      container
      spacing={3}
      justifyContent="center"
      
    >
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
  );
};

export default ListPokemons;
