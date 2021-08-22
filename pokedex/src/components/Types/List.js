import { Grid } from "@material-ui/core";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getTypesPokemonById } from "../../redux/actions/actionPokemon";
import CardTypes from "./CardTypes";

const List = ({ offSet, limit }) => {

    const dispatch = useDispatch()
    const pokemons = useSelector(state => state.pokemonReducer.types_pokemon)
    const name = useParams()

    useEffect(() => {
        dispatch(getTypesPokemonById(name.name, offSet, limit))
    }, [dispatch, name, offSet, limit])

    return (
        <Grid
            container
            spacing={3}
            justifyContent="center"

        >
            {pokemons &&
                pokemons.map((p) => {
                    return (
                        <CardTypes
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
    )
}

export default List