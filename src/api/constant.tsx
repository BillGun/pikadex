export const API_URL = "https://pokeapi.co/api/v2";

export interface Pokemon {
  id: number;
  name: string;
  base_experience: number;
  weight: number;
  height: number;
  types: [
    {
      type: PokemonGenericObject;
    },
  ];
  stats: [
    {
      base_stat: number;
      stat: PokemonGenericObject;
    },
  ];
  species: PokemonGenericObject;
}

export interface PokemonSpecies {
  id: number;
  genera: [
    {
      genus: string;
      language: PokemonGenericObject;
    },
  ];
  flavor_text_entries: [
    {
      flavor_text: string;
      language: PokemonGenericObject;
      version: PokemonGenericObject;
    },
  ];
  generation: PokemonGenericObject;
  growth_rate: PokemonGenericObject;
  habitat: PokemonGenericObject;
  shape: PokemonGenericObject;
  evolution_chain: {
    url: string;
  };
}

export interface EvolutionChain {
  id: number;
  chain: Chain;
}

interface Chain {
  species: PokemonGenericObject;
  is_baby: boolean;
  evolution_details: [];
  evolves_to: [Chain];
}
export interface PokemonGenericObject {
  name: string;
  url: string;
}

export interface Berry {
  name: string;
  item: PokemonGenericObject;
  flavors: [Flavor];
  firmness: PokemonGenericObject;
  growth_time: number;
  max_harvest: number;
  size: number;
  smoothness: number;
  soil_dryness: number;
  natural_gift_power: number;
  natural_gift_type: PokemonGenericObject;
}

export interface Flavor {
  flavor: PokemonGenericObject;
  potency: number;
}

export interface Item {
  name: string;
  flavor_text_entries: [
    {
      text: string;
      language: PokemonGenericObject;
      version_group: PokemonGenericObject;
    },
  ];
  effect_entries: [
    {
      effect: string;
      short_effect: string;
    },
  ];
}

export const pokemonBgVariants: { [index: string]: any } = {
  normal: "bg-normal",
  fire: "bg-fire",
  water: "bg-water",
  electric: "bg-electric",
  grass: "bg-grass",
  ice: "bg-ice",
  fighting: "bg-fighting",
  poison: "bg-poison",
  ground: "bg-ground",
  flying: "bg-flying",
  psychic: "bg-psychic",
  bug: "bg-bug",
  rock: "bg-rock",
  ghost: "bg-ghost",
  dragon: "bg-dragon",
  dark: "bg-dark",
  steel: "bg-steel",
  fairy: "bg-fairy",
};
