import { berryGet } from "@/api/berry";
import { BerryList } from "@/components/Berry/List";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Berry | Pikadex",
};

const Page = async () => {
  const list = await berryGet({ offset: 0 }).then((res) => {
    return res["results"];
  });

  return (
    <div>
      <p>
        Berries are small fruits that can provide HP and status condition
        restoration, stat enhancement, and even damage negation when eaten by
        Pokémon.
      </p>
      <BerryList initialList={list} />
    </div>
  );
};
export default Page;
