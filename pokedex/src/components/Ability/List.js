import { Grid } from "@material-ui/core";
import React from "react";
import AbilityCard from "./AbilityCard";


const List = ({ pokemons }) => {

    return (
        <Grid
            container
            spacing={3}
            justifyContent="center"

        >
            {pokemons &&
                pokemons.map((p) => {
                    return (
                        <AbilityCard
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