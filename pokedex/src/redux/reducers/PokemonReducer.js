import { GET_ALL_POKEMON, GET_POKEMON } from "../actions/actionPokemon"

const initialState = {
    list_pokemons:[],
    pokemon:{}
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
        default:{
            return state
        }
    }
}