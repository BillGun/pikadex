import { Card } from "@/components/Card";
import Layout from "@/components/Layout";
import pikachuPic from "@/image/pikachu.png";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen w-full items-center text-primaryDark">
      <Layout className="!pt-0">
        <div className="flex w-full items-center justify-between">
          <div className="w-1/2">
            <Image
              src={pikachuPic}
              alt="RC"
              className="h-auto w-full"
              priority
              sizes="(max-width:768px) 100vw,
                    (max-width:1200px) 50vw,
                    50vw"
            />
          </div>
          <div className="flex w-1/2 flex-col items-center self-center">
            <h1>Welcome to Pikadex</h1>
            <p>What are you looking for today?</p>
            <div className="flex w-full flex-wrap justify-evenly">
              <Card
                name={"Pokémon"}
                image={
                  "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/35.png"
                }
                href={"/pokemon"}
                className="!w-1/4"
              />
              <Card
                name={"Berry"}
                image={
                  "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/oran-berry.png"
                }
                href={"/berry"}
                className="!w-1/4"
              />
              <Card
                name={"Item"}
                image={
                  "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/master-ball.png"
                }
                href={"/item"}
                className="!w-1/4"
              />
            </div>
          </div>
        </div>
      </Layout>
    </main>
  );
}
