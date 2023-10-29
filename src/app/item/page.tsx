import { itemGet } from "@/api/item";
import { ItemList } from "@/components/Item/List";
import Layout from "@/components/Layout";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Item",
};

const Page = async () => {
  const list = await itemGet({ offset: 0 }).then((res) => {
    return res["results"];
  });

  return (
    <div className="bg-themeLight text-themeDark dark:bg-themeDark dark:text-themeLight">
      <Layout className="!p-0 !pt-4">
        <div className="border-themeSoftLight m-4 rounded-xl border-2 p-4 text-justify text-sm shadow-custom md:text-base">
          An item is an object in the games which the player can pick up, keep
          in their bag, and use in some manner. They have various uses,
          including healing, powering up, helping catch Pokémon, or to access a
          new area.
        </div>
        <ItemList initialList={list} />
      </Layout>
    </div>
  );
};
export default Page;
