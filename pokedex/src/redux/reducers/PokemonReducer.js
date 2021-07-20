import { GET_POKEMONS } from "../actions/actionPokemon"

const initialState = {
    pokemons:[],
}

export const pokemonReducer = (state=initialState,action)=>{
    switch(action.type){
        
        case GET_POKEMONS:{
            return {
                ...state,
                pokemons:action.payload
            }
        }
        default:{
            return state
        }
    }
}