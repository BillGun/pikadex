import { API_URL, PokemonSpecies } from "./constant";

const BASE_URL = API_URL + "/evolution-chain";

export const evolutionChainGet = async (offset = 0, limit = 24) => {
  const res = await fetch(`${BASE_URL}/?limit=${limit}&offset=${offset}`)
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data')
  }

  return await res.json();
}

export const evolutionChainGetById = async (id: number) => {
  const res = await fetch(`${BASE_URL}/${id}`)
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data')
  }

  return await res.json();
}

export const evolutionChainGetByPokemonSpecies = async (pokemonSpecies: PokemonSpecies) => {
  const res = await Promise.all(
    [pokemonSpecies].map(async (item) => {
      const res = await fetch(item.evolution_chain.url).then(res => {
        return res;
      })

      if (!res.ok) {
        // This will activate the closest `error.js` Error Boundary
        throw new Error('Failed to fetch data')
      }

      return await res.json();
    })
  )
  return res;
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.
}