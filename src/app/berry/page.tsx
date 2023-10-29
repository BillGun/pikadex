import { berryGet } from "@/api/berry";
import { BerryList } from "@/components/Berry/List";
import Layout from "@/components/Layout";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Berry",
};

const Page = async () => {
  const list = await berryGet({ offset: 0 }).then((res) => {
    return res["results"];
  });

  return (
    <div className="bg-themeLight text-themeDark dark:bg-themeDark dark:text-themeLight">
      <Layout className="!p-0 !pt-4">
        <div className="border-themeSoftLight m-4 rounded-xl border-2 p-4 text-justify text-sm shadow-custom md:text-base">
          Berries are small fruits that can provide HP and status condition
          restoration, stat enhancement, and even damage negation when eaten by
          Pokémon.
        </div>
        <BerryList initialList={list} />
      </Layout>
    </div>
  );
};
export default Page;
