import axios from "axios";

export const GET_ALL_POKEMON = "GET_ALL_POKEMON";
export const GET_POKEMON = "GET_POKEMON";

async function Data(url) {
  try {
    return await axios.get(url).then((response) => {
      return response.data;
    });
  } catch (error) {
    return error;
  }
}

const getAllPokemon = () => {
  return async (dispatch) => {
    try {
      const response = await axios.get(
        `https://pokeapi.co/api/v2/pokemon?offset=0&limit=12`
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
    const data = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`);
    dispatch({
      type: GET_POKEMON,
      payload: data.data,
    });
  };
};

export { getAllPokemon, getPokemon };
