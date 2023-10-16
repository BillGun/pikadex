import { API_URL, Berry } from "./constant";

const BASE_URL = API_URL + "/item";

export const itemGet = async ({
  offset = 0,
  limit = 24,
}: {
  offset: number;
  limit?: number;
}) => {
  const res = await fetch(`${BASE_URL}/?limit=${limit}&offset=${offset}`);
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  return await res.json();
};

export const itemGetById = async (id: number) => {
  const res = await fetch(`${BASE_URL}/${id}`);
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  return await res.json();
};

export const itemGetByBerry = async (berry: Berry) => {
  const res = await Promise.all(
    [berry].map(async (i) => {
      const res = await fetch(i.item.url).then(res => {
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