import { GET_ABILITY_POKEMON, GET_ALL_POKEMON, GET_POKEMON, GET_TYPES_POKEMON } from "../actions/actionPokemon"

const initialState = {
    list_pokemons:[],
    pokemon:{},
    types:[],
    ability:[]
}

export const pokemonReducer = (state=initialState,action)=>{
    switch(action.type){
        
        case GET_ALL_POKEMON:
            return {
                ...state,
                list_pokemons:action.payload
            }
        

        case GET_POKEMON:
            return{
                ...state,
                pokemon:action.payload
            }
        case GET_TYPES_POKEMON:
            return {
                ...state,
                types:action.payload
            }
        case GET_ABILITY_POKEMON:
            return{
                ...state,
                ability:action.payload
            }
        default:{
            return state
        }
    }
}