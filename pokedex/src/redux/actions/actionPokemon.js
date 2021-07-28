import axios from "axios";

export const GET_ALL_POKEMON = "GET_ALL_POKEMON";
export const GET_POKEMON = "GET_POKEMON";
const url = 'https://pokeapi.co/api/v2/pokemon'

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
        `${url}?offset=${offset}&limit=12`
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
    const data = await axios.get(`${url}/${id}`);
    dispatch({
      type: GET_POKEMON,
      payload: data.data,
    });
  };
};

export { getAllPokemon, getPokemon };
