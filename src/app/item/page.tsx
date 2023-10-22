import { itemGet } from "@/api/item";
import { ItemList } from "@/components/Item/List";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Item",
};

const Page = async () => {
  const list = await itemGet({ offset: 0 }).then((res) => {
    return res["results"];
  });

  return (
    <div>
      <div className="m-4 rounded-xl border-2 border-themeSoftDark bg-primary/50 p-4 shadow-custom">
        An item is an object in the games which the player can pick up, keep in
        their bag, and use in some manner. They have various uses, including
        healing, powering up, helping catch Pokémon, or to access a new area.
      </div>
      <ItemList initialList={list} />
    </div>
  );
};
export default Page;
