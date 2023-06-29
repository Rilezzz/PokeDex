import { AppState } from "../AppState.js"
import { pokesService } from "../services/PokesService.js"
import { Pop } from "../utils/Pop.js"
import { setHTML } from "../utils/Writer.js"




function _drawPokemons() {
  console.log('drawing pokemon')
  let pokemons = AppState.pokemons
  let template = ''
  pokemons.forEach(pokemon => {
    template += `
        <li onclick="app.PokesController.getPokesDetails/('${pokemon.name}')" class="mb-2 selectable fs-4" role="button">${pokemon.name}</li>
        `
  })
  setHTML('pokemons', template)
}

function _drawActivePokemon() {
  const pokemon = AppState.activePokemon
  setHTML('pokemonDetails', pokemon.DetailsTemplate)

}




export class PokesController {
  constructor() {
    console.log('Pokes Controller loaded')

    this.getPokes()

    AppState.on('pokemons', _drawPokemons)
    AppState.on('activePokemon', _drawActivePokemon)
  }


  async getPokes() {
    try {
      await pokesService.getPokes()
    } catch (error) {
      console.error(error)
      Pop.error(error.message)

    }
  }


  async getPokesDetails(pokemonName) {
    try {
      await pokesService.getPokesDetails(pokemonName)
    } catch (error) {
      console.error(error)
      Pop.error(error.message)

    }
  }
}