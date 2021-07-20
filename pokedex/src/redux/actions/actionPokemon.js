import axios from 'axios'

export const GET_POKEMONS = 'GET_POKEMONS'

export const getPokemons = ()=>{
    return (dispatch)=>{
        axios.get(`https://pokeapi.co/api/v2/pokemon?offset=20&limit=20`)
        .then(response=>{
            dispatch({
                type: GET_POKEMONS,
                payload: response.data.results
            })
        })
    }
}