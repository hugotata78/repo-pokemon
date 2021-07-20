import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getPokemons } from '../redux/actions/actionPokemon'

const Pokedex = ()=>{
    const dispatch = useDispatch()
    const pokemons = useSelector(state=>state.pokemonReducer.pokemons)

    useEffect(()=>{
        dispatch(getPokemons())
    },[dispatch])
    return(
        <div>
            {
                pokemons && pokemons.map(p=>{
                    return(
                        <p key={p.name}>{p.name}</p>
                    )
                })
            }
        </div>
    )
}

export default Pokedex