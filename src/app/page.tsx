import { Card } from "@/components/Card";
import Layout from "@/components/Layout";
import pikachuPic from "@/image/pikachu.png";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen w-full items-center text-themeDark dark:bg-themeDark dark:text-themeLight">
      <Layout className="!pt-0">
        <div className="flex w-full flex-row flex-wrap items-center justify-between lg:flex-nowrap">
          <div className="w-full lg:w-1/2">
            <Image
              src={pikachuPic}
              alt="charizard pikachu pic"
              className="h-auto w-full "
              priority
            />
          </div>
          <div className="flex w-full flex-col items-center self-center lg:w-1/2">
            <h1>Welcome to Pikadex</h1>
            <p>What are you looking for today?</p>
            <div className="flex w-full flex-row flex-wrap justify-evenly">
              <Card
                name={"Pokémon"}
                image={
                  "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/35.png"
                }
                href={"/pokemon"}
                className="w-full sm:!w-1/2 md:!w-1/4"
              />
              <Card
                name={"Berry"}
                image={
                  "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/oran-berry.png"
                }
                href={"/berry"}
                className="w-full sm:!w-1/2 md:!w-1/4"
              />
              <Card
                name={"Item"}
                image={
                  "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/master-ball.png"
                }
                href={"/item"}
                className="w-full sm:!w-1/2 md:!w-1/4"
              />
            </div>
          </div>
        </div>
      </Layout>
    </main>
  );
}
