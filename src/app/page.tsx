import { Card } from "@/components/Card";
import Layout from "@/components/Layout";
import Image from "next/image";
import pikachuPic from "../../public/image/pikachu.png";

export default function Home() {
  return (
    <main className="flex items-center text-themeDark w-full min-h-screen">
      <Layout className="!pt-0">
        <div className="flex items-center justify-between w-full">
          <div className="w-1/2">
            <Image src={pikachuPic} alt='RC' className='w-full h-auto' priority
              sizes="(max-width:768px) 100vw,
                    (max-width:1200px) 50vw,
                    50vw" />
          </div>
          <div className="w-1/2 flex flex-col items-center self-center">
            <h1>Welcome to Pikadex</h1>
            <p>What are you looking for today?</p>
            <div className="w-full flex flex-wrap justify-evenly">
              <Card
                name={"Pokemon"}
                image={"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/35.png"}
                href={"/pokemon"}
                className="!w-1/4"
              />
              <Card
                name={"Berries"}
                image={"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/oran-berry.png"}
                href={"/berries"}
                className="!w-1/4"
              />
              <Card
                name={"Items"}
                image={"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/master-ball.png"}
                href={"/items"}
                className="!w-1/4"
              />

            </div>
          </div>
        </div>
      </Layout>
    </main >
  )
}
