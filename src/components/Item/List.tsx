"use client";

import { PokemonGenericObject } from "@/api/constant";
import { itemGet } from "@/api/item";
import { useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { Card } from "../Card";
import { Spinner } from "../Spinner";

export const ItemList = ({
  initialList,
}: {
  initialList: PokemonGenericObject[];
}) => {
  const [list, setList] = useState(initialList);
  const [offset, setOffset] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref);

  useEffect(() => {
    async function loadMoreItem() {
      const next = offset + 24;
      const list = await itemGet({ offset: next }).then((res) => {
        if (res.results.length) {
          setOffset(next);
          setList((prev: PokemonGenericObject[] | undefined) => [
            ...(prev?.length ? prev : []),
            ...res.results,
          ]);
        }
      });
    }

    if (isInView) {
      loadMoreItem();
    }
  }, [isInView, offset]);

  return (
    <>
      <div className="flex w-full flex-row flex-wrap justify-between">
        {list.map((data: PokemonGenericObject, i: number) => {
          const urlArray = data.url.split("/");
          const id = urlArray[urlArray.length - 2];
          return (
            <Card
              name={data.name.replace("-", " ")}
              image={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/${data.name}.png`}
              href={`/item/${id}`}
              key={i}
            />
          );
        })}
      </div>
      <div ref={ref}>
        <Spinner ref={ref} />
      </div>
    </>
  );
};
