const BASE_URL = process.env.BASE_API + "/pokemon"

export const pokemonGet = async (offset = 0, limit = 24) => {
  const res = await fetch(`${BASE_URL}/?limit=${limit}&offset=${offset}`)
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data')
  }

  return await res.json();
}

export const pokemonGetById = async (id: number) => {
  const res = await fetch(`${BASE_URL}/${id}`)
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data')
  }

  return await res.json();
}
