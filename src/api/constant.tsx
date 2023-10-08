export const API_URL = "https://pokeapi.co/api/v2";

export interface Pokemon {
  id: number,
  name: string,
  base_experience: number,
  weight: number,
  height: number,
  types: [{
    type: PokemonGenericObject
  }],
  stats: [{
    base_stat: number,
    stat: PokemonGenericObject,
  }],
  species: PokemonGenericObject
}

export interface PokemonSpecies {
  id: number,
  genera: [{
    genus: string,
    language: PokemonGenericObject
  }],
  flavor_text_entries: [{
    flavor_text: string,
    language: PokemonGenericObject,
    version: PokemonGenericObject
  }],
  generation: PokemonGenericObject,
  growth_rate: PokemonGenericObject,
  habitat: PokemonGenericObject,
  shape: PokemonGenericObject,
  evolution_chain: {
    url: string
  }
}

export interface EvolutionChain {
  id: number,
  chain: Chain
}

interface Chain {
  species: PokemonGenericObject,
  is_baby: boolean,
  evolution_details: [],
  evolves_to: [Chain],
}
export interface PokemonGenericObject {
  name: string,
  url: string,
}
