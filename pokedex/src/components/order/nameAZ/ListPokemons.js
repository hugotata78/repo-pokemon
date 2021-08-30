import { Grid } from '@material-ui/core';
import React from 'react'
import PokeCard from './PokeCard';

const ListPokemons = ({ pokemons }) => {

    console.log(pokemons)
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

}

export default ListPokemons