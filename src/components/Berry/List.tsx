"use client";

import { berryGet } from "@/api/berry";
import { PokemonGenericObject } from "@/api/constant";
import { useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { Card } from "../Card";
import { Spinner } from "../Spinner";

export const BerryList = ({
  initialList,
}: {
  initialList: PokemonGenericObject[];
}) => {
  const [list, setList] = useState(initialList);
  const [offset, setOffset] = useState(0);
  const [isAllData, setIsAllData] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref);

  useEffect(() => {
    async function loadMoreBerry() {
      if (isAllData) {
        return;
      }
      const next = offset + 24;
      const list = await berryGet({ offset: next }).then((res) => {
        if (res.results.length) {
          setOffset(next);
          setList((prev: PokemonGenericObject[] | undefined) => [
            ...(prev?.length ? prev : []),
            ...res.results,
          ]);
        } else {
          setIsAllData(true);
        }
      });
    }

    if (isInView) {
      loadMoreBerry();
    }
  }, [isAllData, isInView, offset]);

  return (
    <>
      <div className="flex w-full flex-row flex-wrap justify-between">
        {list.map((data: PokemonGenericObject, i: number) => {
          const urlArray = data.url.split("/");
          const id = urlArray[urlArray.length - 2];
          return (
            <Card
              name={data.name}
              image={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/${data.name}-berry.png`}
              href={`/berry/${id}`}
              key={i}
            />
          );
        })}
      </div>
      {isAllData ? (
        ""
      ) : (
        <div ref={ref}>
          <Spinner ref={ref} />
        </div>
      )}
    </>
  );
};
