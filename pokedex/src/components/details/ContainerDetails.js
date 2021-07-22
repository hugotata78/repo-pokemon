import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router';
import { getPokemon } from '../../redux/actions/actionPokemon';
import NavBar from '../appBar/NavBar';
import PokeDetails from './PokeDetails'

const ContainerDetails = ()=>{ 
    const { name } = useParams()
    const dispatch = useDispatch()
    const pokemon = useSelector(state=>state.pokemonReducer.pokemon)
    console.log(pokemon)
    useEffect(()=>{
        dispatch(getPokemon(name))
    },[dispatch,name])
    return (
        <div>
          <NavBar />
          <PokeDetails pokemon={pokemon}/>
        </div>
      );
}

export default ContainerDetails