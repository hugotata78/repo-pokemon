import axios from 'axios'
const url = 'https://pokeapi.co/api/v2/pokemon'
async const getPokemonAxios = (id)=>{
    return await axios.get(`${url}/${id}`)
}

export { getPokemonAxios }