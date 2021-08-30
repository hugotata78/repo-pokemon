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
export const ORDER_BY_NAME = 'ORDER_BY_NAME'
export const ORDER_BY_NAME_ZA = 'ORDER_BY_NAME_ZA'
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


const orderByNameAZ = (offSet, count, limit) => {
  return async (dispatch) => {
    try {
      const response = await axios.get(`${url}pokemon?limit=${count}&offset=0`)
      const arr = response.data.results.sort((a, b) => {
        return a.name.localeCompare(b.name)
      })
      const newArr = await Promise.all(arr.slice(offSet, limit).map(a => {
        return Data(a.url)
      }))
      dispatch({
        type: ORDER_BY_NAME,
        payload: newArr
      })
    } catch (error) {
      console.log(error)
    }
  }
}

const orderByNameZA = (offSet, count, limit) => {
  return async (dispatch) => {
    try {
      const response = await axios.get(`${url}pokemon?limit=${count}&offset=0`)
      const arr = response.data.results.sort((a, b) => {
        return b.name.localeCompare(a.name)
      })
      const newArr = await Promise.all(arr.slice(offSet, limit).map(a => {
        return Data(a.url)
      }))
      dispatch({
        type: ORDER_BY_NAME_ZA,
        payload: newArr
      })
    } catch (error) {
      console.log(error)
    }
  }
}

const getAllPokemon = (offset) => {
  return async (dispatch) => {
    try {
      const response = await axios.get(
        `${url}pokemon?limit=12&offset=${offset}`
      );

      const arr = await Promise.all(
        response.data.results.map((r) => {
          return Data(r.url);
        })
      );
      dispatch({
        type: GET_ALL_POKEMON,
        payload: {
          count: response.data.count,
          results: arr
        },
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
        payload: {
          name: response.data.name,
          count: arr.length,
          pokemons: arr.length - offSet < 12 ? arr.slice(offSet) : arr.slice(offSet, limit)
        }
      })
    } catch (error) {
      console.log(error)
    }
  }
}
const getAbilityPokemon = (offSet) => {
  return async (dispatch) => {
    const response = await axios.get(`${url}ability?offset=${offSet}&limit=20"`)
    dispatch({
      type: GET_ABILITY_POKEMON,
      payload: {
        count: response.data.count,
        results: response.data.results
      }
    })
  }
}

const getAbilityPokemonById = (id, offSet, limit) => {
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
          name: response.data.name,
          count: arr.length,
          pokemons: offSet > arr.length ? arr : arr.length > 12 ? arr.slice(offSet, limit) : arr.length - offSet < 12 ? arr.slice(offSet) : arr
        }
      })
    } catch (error) {
      console.log(error)
    }
  }
}
export { getAbilityPokemon, getAllPokemon, getPokemon, getTypesPokemon, searchPokemon, getTypesPokemonById, getAbilityPokemonById, orderByNameAZ, orderByNameZA };
