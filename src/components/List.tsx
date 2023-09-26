import { pokemonGet } from "@/api/pokemon";
import { Card } from "./Card";

interface PokemonList {
  name: string;
  url: string;
}

export const List = async () => {
  const list = await pokemonGet().then(res => {
    return res['results'];
  });
  return (
    <div className="w-full flex flex-row flex-wrap justify-between">
      {list.map((data: PokemonList, i: number) => {
        const urlArray = data.url.split("/");
        const id = urlArray[urlArray.length - 2];
        return (
          <Card
            name={data.name}
            image={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`}
            href={`/pokemon/${id}`}
            key={i}
          />
        )
      })}

    </div>
  )
}