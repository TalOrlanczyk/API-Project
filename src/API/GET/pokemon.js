import { PokemonSearch } from "../../Utils/ConstValues"

const get = async (url) => (
    await fetch(url)
        .then(response => response.json())
        .then(json =>  json
        )
)
export const PokemonsSearchInitial = (limit) => get(`${PokemonSearch}?limit=${limit}&offset=0`);
export const PokemonsSearchJumpToPage = (limit = 10,offset = 0) => get(`${PokemonSearch}?limit=${limit}&offset=${offset}`);
export const PokemonForm = (id) => get(`https://pokeapi.co/api/v2/pokemon-form/${id}/`)