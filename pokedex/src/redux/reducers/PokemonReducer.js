
import { GET_ABILITY_POKEMON, GET_ALL_POKEMON, GET_POKEMON, GET_TYPES_POKEMON, FETCH_POKEMON_ERROR, FETCH_POKEMON_REQUEST, FETCH_POKEMON_SUCCESS, GET_TYPES_POKEMON_BY_ID, GET_ABILITY_POKEMON_BY_ID } from "../actions/actionPokemon"

const initialState = {
    list_pokemons:[],
    pokemon:{},
    types:[],
    ability:[],
    loading:false,
    error:false,
    poke_data:null,
    types_pokemon:[],
    ability_pokemon: {}
}

export const pokemonReducer = (state=initialState,action)=>{
    switch(action.type){
        
        case GET_ALL_POKEMON:
            return {
                ...state,
                list_pokemons:action.payload
            }
        case FETCH_POKEMON_REQUEST:
            return{
                ...state,
                poke_data:null,
                loading:true,
                error:false
            }
        case FETCH_POKEMON_SUCCESS:
            return{
                ...state,
                poke_data:action.payload,
                loading:false,
                error:false
            }
        case FETCH_POKEMON_ERROR:
            return{
                ...state,
                poke_data:null,
                loading:false,
                error:true
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
        case GET_TYPES_POKEMON_BY_ID:
            return {
                ...state,
                types_pokemon:action.payload
            }
        case GET_ABILITY_POKEMON:
            return{
                ...state,
                ability:action.payload
            }
        case GET_ABILITY_POKEMON_BY_ID:
            return{
                ...state,
                ability_pokemon:action.payload
            }
        default:{
            return state
        }
    }
}