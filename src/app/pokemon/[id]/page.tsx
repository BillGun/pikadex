import {
  Pokemon,
  PokemonBgVariants,
  PokemonGenericObject,
  PokemonSpecies,
} from "@/api/constant";
import { pokemonGet, pokemonGetById } from "@/api/pokemon";
import { pokemonSpeciesGetByPokemon } from "@/api/pokemon-species";
import Layout from "@/components/Layout";
import { LeftArrowIcon } from "@/components/LeftArrowIcon";
import { PokemonSprite } from "@/components/Pokemon/PokemonSprite";
import { RightArrowIcon } from "@/components/RightArrowIcon";
import { Metadata, ResolvingMetadata } from "next";

export async function generateMetadata(
  { params }: { params: { id: string } },
  parent: ResolvingMetadata,
): Promise<Metadata> {
  // read route params
  const id = params.id;

  // fetch data
  const data: Pokemon = await pokemonGetById(Number(params.id)).then((res) => {
    return res;
  });

  const nameArr = data.name.split("-");
  let name = "";
  nameArr.forEach((element) => {
    name += `${element[0].toUpperCase()}${element.slice(1)} `;
  });

  return {
    title: `${name}`,
    openGraph: {
      images: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`,
    },
  };
}

export async function generateStaticParams() {
  const list = await pokemonGet({ offset: 0 }).then((res) => {
    return res["results"];
  });

  return list.map((data: PokemonGenericObject) => {
    const urlArray = data.url.split("/");
    const id = urlArray[urlArray.length - 2];
    return {
      id,
    };
  });
}

const Page = async ({ params }: { params: { id: string } }) => {
  const data: Pokemon = await pokemonGetById(Number(params.id)).then((res) => {
    return res;
  });

  const species: PokemonSpecies = await pokemonSpeciesGetByPokemon(data).then(
    (res) => {
      return res[0];
    },
  );

  // const evolutionChain: EvolutionChain = await evolutionChainGetByPokemonSpecies(species).then(res => {
  //   return res[0];
  // });

  return (
    <main className="flex w-full flex-col items-center justify-center text-justify text-themeDark dark:text-themeLight">
      <Layout className="!py-16 ">
        <div className="dark:border-themeSoftLight grid w-full grid-cols-8 items-center justify-between gap-y-0 rounded-2xl border-2 border-themeSoftDark bg-themeLight dark:bg-themeDark">
          <div className="dark:border-themeSoftLight col-span-8 flex w-full justify-between border-b-2 border-themeSoftDark px-8 py-3">
            <h4 className="text-sm font-semibold md:text-lg lg:text-xl ">
              #{data.id} <span className="capitalize">{data.name},</span>{" "}
              {species.genera.find((i) => i.language.name === "en")?.genus}
            </h4>
            <div className="flex">
              {data.types.map((data, i: number) => {
                const pokemonType = data.type.name;
                return (
                  <div
                    key={i}
                    className={`mx-0.5 rounded-md px-2 py-1 text-center font-semibold uppercase ${PokemonBgVariants[pokemonType]} `}
                  >
                    <p>{pokemonType}</p>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="relative col-span-8 m-4 flex flex-wrap bg-themeLight p-4 dark:bg-themeDark lg:col-span-3">
            <PokemonSprite name={data.name} id={data.id} />
          </div>
          <div className="dark:border-themeSoftLight col-span-8 border-t-2 border-themeSoftDark px-8 py-4 lg:col-span-5 lg:border-l-2 lg:border-t-0">
            <div className="w-full pb-2 pt-2">
              <p>
                {
                  species.flavor_text_entries
                    .filter((i) => i.language.name === "en")
                    .at(-1)?.flavor_text
                }
              </p>
            </div>
            <div className="flex w-full flex-wrap items-center justify-around pt-2 text-center capitalize">
              <p className="w-1/3">
                {species.generation.name.split("-")[0]}{" "}
                <span className="uppercase">
                  {species.generation.name.split("-")[1]}
                </span>
              </p>
              <p className="w-1/3">
                Shape: {species.shape?.name || "Not Found"}
              </p>
              <p className="w-1/3">
                Habitat: {species.habitat?.name || "Not Found"}
              </p>
            </div>
            <div className="flex w-full flex-wrap items-center justify-around pt-2 text-center">
              <p className="w-1/2 p-2">Weight: {data.weight / 10} kg</p>
              <p className="w-1/2 p-2">
                Base Experience: {data.base_experience}
              </p>
              <p className="w-1/2 p-2">Height: {data.height / 10} m</p>
              <p className="w-1/2 p-2">
                Growth Rate:{" "}
                <span className="capitalize">
                  {species.growth_rate.name.replace("-", " ")}
                </span>
              </p>
            </div>
            <div className="mt-3 flex w-full flex-col">
              <h5 className="text-lg font-semibold">Status</h5>
              <div>
                {data.stats.map((data, i: number) => {
                  const pokemonStat = data.stat.name.replace("-", " ");
                  const baseStat = data.base_stat;
                  const barWidth = `${Math.floor((66 * baseStat) / 255)}%`;
                  return (
                    <div
                      key={i}
                      className="my-2 flex w-full capitalize first:uppercase"
                    >
                      <div
                        className={`font-md flex w-1/2 justify-center px-2 py-1 text-left lg:w-1/3`}
                      >
                        <span className="w-3/5">{pokemonStat}</span>
                        <span className="w-1/5 text-center">:</span>
                        <span className="w-1/5 text-right">{baseStat} </span>
                      </div>
                      <div
                        className={`dark:bg-themeSoftLight min-h-full bg-themeSoftDark`}
                        style={{ width: barWidth }}
                      />
                    </div>
                  );
                })}
              </div>
            </div>
            {/* <div>
              Ability
            </div> */}
          </div>
          {/* <div>
            <h4>Evolution Chain</h4>
            {evolutionChain.chain.}
          </div> */}
        </div>
      </Layout>
      {Number(params.id) !== 1 ? <LeftArrowIcon id={params.id} /> : ""}
      {Number(params.id) !== 1017 ? <RightArrowIcon id={params.id} /> : ""}
    </main>
  );
};
export default Page;
