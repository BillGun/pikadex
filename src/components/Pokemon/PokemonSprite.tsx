"use client";

import shiny from "@/image/shiny-pokemon.png";
import Image from "next/image";
import { useState } from "react";

const CustomImage = ({
  id,
  name,
  imageType,
}: {
  id: number;
  name: string;
  imageType: string;
}) => {
  const getCustomUrl = (imageType: string, id: number) => {
    switch (imageType) {
      case "frontDefault":
        return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`;
      case "backDefault":
        return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/${id}.png`;
      case "frontShiny":
        return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/${id}.png`;
      case "backShiny":
        return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/shiny/${id}.png`;
      default:
        return ``;
    }
  };
  return (
    <Image
      className="dark:border-themeSoftLight w-1/2 border-2 border-themeSoftDark bg-themeLight dark:bg-themeSoftDark lg:w-full xl:w-1/2"
      src={getCustomUrl(imageType, id)}
      alt={`${name} sprite`}
      width={96}
      height={96}
    />
  );
};

export const PokemonSprite = ({ name, id }: { name: string; id: number }) => {
  const [isShiny, setIsShiny] = useState(false);

  const handleClick = () => {
    setIsShiny(!isShiny);
  };
  return (
    <>
      <div className="absolute right-2 top-2 w-10 bg-themeLight dark:bg-themeDark">
        <Image
          src={shiny}
          alt="shiny icon toggle"
          className="dark:border-themeSoftLight w-full rounded-3xl border-2 border-themeSoftDark fill-themeDark p-2 dark:fill-themeLight"
          onClick={handleClick}
        />
      </div>
      {isShiny ? (
        <>
          <CustomImage name={name} id={id} imageType="frontShiny" />
          <CustomImage name={name} id={id} imageType="backShiny" />
        </>
      ) : (
        <>
          <CustomImage name={name} id={id} imageType="frontDefault" />
          <CustomImage name={name} id={id} imageType="backDefault" />
        </>
      )}
    </>
  );
};
