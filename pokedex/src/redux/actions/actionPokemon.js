import axios from "axios";

export const GET_ABILITY_POKEMON = 'GET_ABILITY_POKEMON'
export const GET_ALL_POKEMON = "GET_ALL_POKEMON";
export const GET_POKEMON = "GET_POKEMON";
export const GET_TYPES_POKEMON = 'GET_TYPES_POKEMON'
const url = 'https://pokeapi.co/api/v2/'

async function Data(url) {
  try {
    return await axios.get(url).then((response) => {
      return response.data;
    });
  } catch (error) {
    return error;
  }
}

const getAllPokemon = (offset) => {
  return async (dispatch) => {
    try {
      const response = await axios.get(
        `${url}pokemon?offset=${offset}&limit=12`
      );

      const arr = await Promise.all(
        response.data.results.map((r) => {
          return Data(r.url);
        })
      );
      dispatch({
        type: GET_ALL_POKEMON,
        payload: arr,
      });
    } catch (error) {
      console.log(error);
    }
  };
};

const getPokemon = (id) => {
  return async (dispatch) => {
    const data = await axios.get(`${url}pokemon/${id}`);
    dispatch({
      type: GET_POKEMON,
      payload: data.data,
    });
  };
};

const getTypesPokemon = ()=>{
  return async (dispatch) =>{
    try {
      const response = await axios.get(`${url}type`)
      dispatch({
        type: GET_TYPES_POKEMON,
        payload:response.data.results
      })     
    } catch (error) {
      console.log(error) 
    }
  }
}

const getAbilityPokemon = ()=>{
  return async (dispatch)=>{
    const response = await axios.get(`${url}ability`)
    dispatch({
      type: GET_ABILITY_POKEMON,
      payload:response.data.results
    })
  }
}
export { getAbilityPokemon, getAllPokemon, getPokemon, getTypesPokemon };
