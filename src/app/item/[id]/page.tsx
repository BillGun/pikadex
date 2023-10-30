import { Item, ItemAttribute, PokemonGenericObject } from "@/api/constant";
import { itemGet, itemGetById } from "@/api/item";
import Layout from "@/components/Layout";
import Tooltip from "@/components/Tooltip";
import { Metadata, ResolvingMetadata } from "next";
import Image from "next/image";

export async function generateMetadata(
  { params }: { params: { id: string } },
  parent: ResolvingMetadata,
): Promise<Metadata> {
  // read route params
  const id = params.id;

  // fetch data
  const item: Item = await itemGetById(Number(params.id)).then((res) => {
    return res;
  });

  const nameArr = item.name.split("-");
  let name = "";
  nameArr.forEach((element) => {
    name += `${element[0].toUpperCase()}${element.slice(1)} `;
  });

  return {
    title: `${name}`,
    openGraph: {
      images: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/${item.name}.png`,
    },
  };
}

export async function generateStaticParams() {
  const list = await itemGet({ offset: 0 }).then((res) => {
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
  const item: Item = await itemGetById(Number(params.id)).then((res) => {
    return res;
  });

  return (
    <main className="flex w-full flex-col items-center justify-center text-justify text-themeDark dark:text-themeLight">
      <Layout className="!min-h-screen !py-16">
        <div className="grid w-full grid-cols-8 items-center justify-between gap-y-0 rounded-2xl border-2 border-themeSoftDark bg-themeLight dark:border-themeSoftLight dark:bg-themeDark">
          <div className="col-span-8 flex w-full justify-between border-b-2 border-themeSoftDark px-8 py-3 dark:border-themeSoftLight">
            <h4 className="text-xl font-semibold">
              <span className="capitalize">{item.name.replace("-", " ")}</span>{" "}
            </h4>
            <div className="flex">
              <div
                className={`mx-0.5 rounded-md px-2 py-1 text-center font-semibold capitalize`}
              >
                {`Cost: ${item.cost === 0 ? "N/A" : `${item.cost} ₽`}`}
              </div>
            </div>
          </div>
          <div className="col-span-8 m-4 flex flex-wrap p-4 lg:col-span-3">
            <Image
              className="mx-auto w-2/3"
              src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/${item.name}.png`}
              alt={`${item.name} sprite`}
              width={96}
              height={96}
            />{" "}
          </div>
          <div className="col-span-8 min-h-full border-t-2 border-themeSoftDark px-8 py-4 dark:border-themeSoftLight lg:col-span-5 lg:border-l-2 lg:border-t-0">
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
            <div className="w-full pb-2 pt-2 capitalize">
              Category: {item.category.name.replaceAll("-", " ")}
            </div>
            <div className="w-full pb-2 pt-2">
              <h3>Attributes: </h3>
              <div className="flex-start flex w-full flex-wrap items-center text-sm">
                {item.attributes.map((e, i) => {
                  return (
                    <Tooltip
                      key={i}
                      message={ItemAttribute[e.name]}
                      className="my-0.5 !w-[30%] rounded-xl border-2 border-themeSoftDark bg-themeSoftLight px-3 py-1 dark:border-themeSoftLight dark:bg-themeSoftDark [&:nth-child(2)]:mx-[1.5%] [&:nth-child(5)]:mx-[1.5%]"
                    >
                      {e.name.replaceAll("-", " ")}
                    </Tooltip>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </main>
  );
};
export default Page;
