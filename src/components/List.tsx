'use client'

import { pokemonGet } from "@/api/pokemon";
import { useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { Card } from "./Card";
import { Spinner } from "./Icons";

interface PokemonList {
  name: string;
  url: string;
}

export const List = ({ initialList }: { initialList: PokemonList[] }) => {
  const [list, setList] = useState(initialList);
  const [offset, setOffset] = useState(24);
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref);

  async function loadMorePokemon() {
    const next = offset + 24
    const movies = await pokemonGet({ offset: next }).then((res) => {
      if (res.results.length) {
        setOffset(next)
        setList((prev: PokemonList[] | undefined) => [
          ...(prev?.length ? prev : []),
          ...res.results
        ])
      }
    });
  }

  useEffect(() => {
    if (isInView) {
      loadMorePokemon()
    }
  }, [isInView])

  return (
    <>
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
      <div
        ref={ref}
        className='w-[64px] col-span-1 mt-16 flex items-center justify-center sm:col-span-2 md:col-span-3 lg:col-span-4'
      >
        <Spinner />
        <span className='sr-only'>Loading...</span>
      </div>
    </>
  )
}