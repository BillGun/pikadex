// 'use client'

import { pokemonGet } from "@/api/pokemon";
import { List } from "@/components/Pokemon/List";
import { Metadata } from "next";
import { MouseEventHandler } from "react";

export const metadata: Metadata = {
  title: "Pokemon",
};

const Button = ({
  text,
  region,
  onClick,
}: {
  text: string;
  region: string;
  onClick: MouseEventHandler<HTMLButtonElement>;
}) => {
  return (
    <button
      className={`ml-4 rounded-lg border-2 border-themeDark px-4 py-0.5 text-lg font-medium capitalize ${
        region === text
          ? "bg-themeDark text-themeLight"
          : "bg-themeLight text-themeDark"
      }`}
      onClick={onClick}
    >
      {text}
    </button>
  );
};

const Page = async () => {
  // const [region, setRegion] = useState('');

  // const handleClick = (text = '') => {
  //   if (region === text) {
  //     setRegion('');
  //     return;
  //   }
  //   setRegion(text);
  const list = await pokemonGet({ offset: 0 }).then((res) => {
    return res["results"];
  });

  return (
    <div>
      <div className="m-4 rounded-xl border-2 border-themeSoftDark bg-primary/50 p-4 shadow-custom">
        Pokémon are the creatures that inhabit the world of the Pokémon games.
        They can be caught using Pokéballs and trained by battling with other
        Pokémon. Each Pokémon belongs to a specific species but may take on a
        variant which makes it differ from other Pokémon of the same species,
        such as base stats, available abilities and typings.
      </div>
      {/* <div>
        <Button text="Kanto" onClick={() => handleClick("Kanto")} region={region} />
        <Button text="Johto" onClick={() => handleClick("Johto")} region={region} />
        <Button text="Hoenn" onClick={() => handleClick("Hoenn")} region={region} />
        <Button text="Sinnoh" onClick={() => handleClick("Sinnoh")} region={region} />
        <Button text="Unova" onClick={() => handleClick("Unova")} region={region} />
        <Button text="Kalos" onClick={() => handleClick("Kalos")} region={region} />
        <Button text="Alola" onClick={() => handleClick("Alola")} region={region} />
        <Button text="Galar" onClick={() => handleClick("Galar")} region={region} />
        <Button text="Hisui" onClick={() => handleClick("Hisui")} region={region} />
        <Button text="Paldea" onClick={() => handleClick("Paldea")} region={region} />
      </div> */}
      <List initialList={list} />
    </div>
  );
};
export default Page;
