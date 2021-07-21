import React from 'react'
import ListPokemons from './ListPokemons'
import NavBar from '../appBar/NavBar'


const Pokedex = ()=>{
    
    return(
        <div>
        <NavBar/>
            <ListPokemons/>
        </div>
    )
}

export default Pokedex