import { API_URL } from "./constant";

const BASE_URL = API_URL + "/berry";

export const berryGet = async ({
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

export const berryGetById = async (id: number) => {
  const res = await fetch(`${BASE_URL}/${id}`);
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  return await res.json();
};
