import { berryGet, berryGetById } from "@/api/berry";
import { Berry, Item, PokemonGenericObject } from "@/api/constant";
import { itemGetByBerry } from "@/api/item";
import { FlavorChart } from "@/components/Berry/FlavorChart";
import Layout from "@/components/Layout";
import { Metadata, ResolvingMetadata } from "next";
import Image from "next/image";

export async function generateMetadata(
  { params }: { params: { id: string } },
  parent: ResolvingMetadata,
): Promise<Metadata> {
  // read route params
  const id = params.id;

  // fetch data
  const berry: Berry = await berryGetById(Number(params.id)).then((res) => {
    return res;
  });

  return {
    title: `${berry.name[0].toUpperCase()}${berry.name.slice(
      1,
    )} Berry | Pikadex`,
    openGraph: {
      images: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/${berry.name}-berry.png`,
    },
  };
}

export async function generateStaticParams() {
  const list = await berryGet({ offset: 0 }).then((res) => {
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
  const berry: Berry = await berryGetById(Number(params.id)).then((res) => {
    return res;
  });

  const item: Item = await itemGetByBerry(berry).then((res) => {
    return res[0];
  });

  return (
    <main className="flex w-full flex-col items-center justify-center ">
      <Layout className="!py-16 ">
        <div className="grid w-full grid-cols-8 items-center justify-between gap-y-0 rounded-2xl border-2 border-themeSoftDark bg-primary">
          <div className="col-span-8 flex w-full justify-between border-b-2 border-themeSoftDark px-8 py-3">
            <h4 className="text-xl font-semibold">
              <span className="capitalize">{berry.name} Berry</span>{" "}
            </h4>
          </div>
          <div className="col-span-3 m-4 flex flex-wrap bg-themeLight p-4">
            <Image
              className="mx-auto w-2/3 bg-primary"
              src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/${berry.name}-berry.png`}
              alt={`${berry.name} sprite`}
              width={96}
              height={96}
            />{" "}
          </div>
          <div className="col-span-5 min-h-full border-l-2 border-themeSoftDark px-8 py-4">
            <div className="w-full pb-2 pt-2">
              <p>
                {
                  item.flavor_text_entries
                    .filter((i) => i.language.name === "en")
                    .at(-1)?.text
                }
              </p>
            </div>
            <div className="w-full pb-2 pt-2">
              <h3>Effect: </h3>
              <p>{item.effect_entries.at(-1)?.effect}</p>
            </div>
            <div className="flex w-full items-center justify-around pt-2 text-center">
              <div className="w-1/3">
                <p>Size: {`${berry.size / 10} cm`}</p>
              </div>
              <div className="w-1/3 capitalize">
                Firmness: {berry.firmness.name.replace("-", " ")}
              </div>
              <div className="w-1/3">
                <p>Smoothness: {`${berry.smoothness}`}</p>
              </div>
            </div>
            <div className="flex w-full items-center justify-around pb-2 pt-2 text-center">
              <div className="w-1/3">
                <p>Soil Dryness: {`${berry.soil_dryness}`}</p>
              </div>
              <div className="w-1/3">
                <p>Growth Time: {`${berry.growth_time}`}</p>
              </div>
              <div className="w-1/3">
                <p>Max Harvest: {`${berry.max_harvest}`}</p>
              </div>
            </div>
            <div className="h-[33vh] w-full pb-2 pt-2">
              <h3>Flavors: </h3>
              <FlavorChart className="mx-auto !w-1/3" flavors={berry.flavors} />
            </div>
          </div>
        </div>
      </Layout>
    </main>
  );
};
export default Page;
