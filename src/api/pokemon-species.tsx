import { API_URL, Pokemon } from "./constant";

const BASE_URL = API_URL + "/pokemon-species";

export const pokemonSpeciesGet = async (offset = 0, limit = 24) => {
  const res = await fetch(`${BASE_URL}/?limit=${limit}&offset=${offset}`)
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data')
  }

  return await res.json();
}

export const pokemonSpeciesGetById = async (id: number) => {
  const res = await fetch(`${BASE_URL}/${id}`)
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data')
  }

  return await res.json();
}

export const pokemonSpeciesGetByPokemon = async (pokemon: Pokemon) => {
  const res = await Promise.all(
    [pokemon].map(async (item) => {
      const res = await fetch(item.species.url).then(res => {
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