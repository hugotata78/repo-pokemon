import axios from "axios";

export const GET_ABILITY_POKEMON = 'GET_ABILITY_POKEMON'
export const GET_ALL_POKEMON = "GET_ALL_POKEMON";
export const GET_POKEMON = "GET_POKEMON";
export const FETCH_POKEMON_REQUEST = "FETCH_POKEMON_REQUEST";
export const FETCH_POKEMON_SUCCESS = "FETCH_POKEMON_SUCCESS";
export const FETCH_POKEMON_ERROR = "FETCH_POKEMON_ERROR";
export const GET_TYPES_POKEMON = 'GET_TYPES_POKEMON'
export const GET_TYPES_POKEMON_BY_ID = 'GET_TYPES_POKEMON_BY_ID'
export const GET_ABILITY_POKEMON_BY_ID = 'GET_ABILITY_POKEMON_BY_ID'
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

export const fetchPokemonRequest = () => {
  return {
    type: FETCH_POKEMON_REQUEST,
  };
};

export const fetchPokemonSuccess = (pokemon) => {
  return {
    type: FETCH_POKEMON_SUCCESS,
    payload: pokemon,
  };
};

export const fetchPokemonError = () => {
  return {
    type: FETCH_POKEMON_ERROR,
  };
};

const searchPokemon = (id) => {
  return async (dispatch) => {
    try {
      dispatch(fetchPokemonRequest());
      const data = await axios.get(`${url}pokemon/${id}`);
      dispatch(fetchPokemonSuccess(data.data))

    } catch (error) {
      dispatch(fetchPokemonError())
    }
  };
};

const getTypesPokemon = () => {
  return async (dispatch) => {
    try {
      const response = await axios.get(`${url}type`)
      dispatch({
        type: GET_TYPES_POKEMON,
        payload: response.data.results
      })
    } catch (error) {
      console.log(error)
    }
  }
}

const getTypesPokemonById = (id, offSet, limit) => {
  return async (dispatch) => {
    try {
      const response = await axios.get(`${url}type/${id}`)
      const arr = await Promise.all(
        response.data.pokemon.map((p) => {
          return Data(p.pokemon.url);
        })
      );
      dispatch({
        type: GET_TYPES_POKEMON_BY_ID,
        payload: arr.slice(offSet, limit)
      })
    } catch (error) {
      console.log(error)
    }
  }
}
const getAbilityPokemon = () => {
  return async (dispatch) => {
    const response = await axios.get(`${url}ability`)
    dispatch({
      type: GET_ABILITY_POKEMON,
      payload: response.data.results
    })
  }
}

const getAbilityPokemonById = (id,offSet,limit) => {
  return async (dispatch) => {
    try {
      const response = await axios.get(`${url}ability/${id}`)
      const arr = await Promise.all(
        response.data.pokemon.map((p) => {
          return Data(p.pokemon.url);
        })
      );
      dispatch({
        type: GET_ABILITY_POKEMON_BY_ID,
        payload: {
          count: arr.length,
          pokemons: arr.length > 12 ? arr.slice(offSet,limit): arr
        }
      })
    } catch (error) {
      console.log(error)
    }
  }
}
export { getAbilityPokemon, getAllPokemon, getPokemon, getTypesPokemon, searchPokemon, getTypesPokemonById, getAbilityPokemonById };
