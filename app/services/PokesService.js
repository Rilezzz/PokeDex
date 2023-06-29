import { AppState } from "../AppState.js"
import { Poke } from "../models/Poke.js"
import { pokeApi } from "./AxiosService.js"

class PokesService {

  async getPokes() {
    const res = await pokeApi.get('api/v2/pokemon')
    console.log('got Pokemon', res.data)
    AppState.pokemons = res.data.results
  }

  async getPokesDetails(pokemonName) {
    const res = await pokeApi.get(`api/v2/pokemon,${pokemonName}`)
    console.log('Got pokemon details', res.data)
    const newPoke = new Poke(res.data)
    AppState.activePokemon = newPoke
  }

}



export const pokesService = new PokesService()