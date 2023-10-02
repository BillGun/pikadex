import { pokemonGetById } from "@/api/pokemon";
import Layout from "@/components/Layout";
import shiny from "@/image/shiny-pokemon.png";
import Image from "next/image";

interface PokemonDetail {
  id: number,
  name: string,
  base_experience: number,
  types: [{
    type: PokemonType
  }]
}

interface PokemonType {
  name: string,
  url: string,
}

const pokemonBgVariants: { [index: string]: any } = {
  normal: 'bg-normal',
  fire: 'bg-fire',
  water: 'bg-water',
  electric: 'bg-electric',
  grass: 'bg-grass',
  ice: 'bg-ice',
  fighting: 'bg-fighting',
  poison: 'bg-poison',
  ground: 'bg-ground',
  flying: 'bg-flying',
  psychic: 'bg-psychic',
  bug: 'bg-bug',
  rock: 'bg-rock',
  ghost: 'bg-ghost',
  dragon: 'bg-dragon',
  dark: 'bg-dark',
  steel: 'bg-steel',
  fairy: 'bg-fairy',
}

const CustomImage = ({ id, name, imageType }: { id: number, name: string, imageType: string }) => {
  const getCustomUrl = (imageType: string, id: number) => {
    switch (imageType) {
      case 'frontDefault':
        return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`;
      case 'backDefault':
        return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/${id}.png`;
      case 'frontShiny':
        return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/${id}.png`;
      case 'backShiny':
        return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/shiny/${id}.png`;
      default:
        return ``;
    }
  }
  return (
    <Image
      className="bg-themeDark w-1/2"
      src={getCustomUrl(imageType, id)}
      alt={name}
      width={96}
      height={96}
    />
  )
}

const Page = async ({ params }: { params: { slug: number } }) => {
  const data: PokemonDetail = await pokemonGetById(params.slug).then(res => {
    return res;
  });


  // const [isShiny, setIsShiny] = useState(false);

  // const handleIsShiny = () => {
  //   setIsShiny(!isShiny)
  // }
  return (
    <main className='flex w-full flex-col items-center justify-center'>
      <Layout className="!py-16">
        <div className="bg-themeDark rounded-2xl flex items-center justify-between w-full flex-wrap">
          <div className="w-full text-themeLight px-8 py-2 flex justify-between border-solid border-b-2 border-white">
            <h4 className="text-xl font-semibold">#{data.id} <span className="capitalize">{data.name}</span></h4>
            <div className="flex">
              {data.types.map((data, i: number) => {
                const pokemonType = data.type.name;
                return (
                  <div key={i} className={`mx-0.5 px-2 py-1 font-semibold rounded-md text-center uppercase ${pokemonBgVariants[pokemonType]} `}>
                    <p> {pokemonType}</p>
                  </div>
                )
              })}
            </div>
          </div>
          <div className="w-1/3 flex m-4 p-4 bg-themeLight flex-wrap relative">
            <div className="absolute w-10 top-2 right-2">
              <Image src={shiny} alt="shiny icon" className="bg-themeDark border-2 border-solid border-themeLight rounded-3xl w-full p-2" />
            </div>
            <CustomImage name={data.name} id={data.id} imageType="frontDefault" />
            <CustomImage name={data.name} id={data.id} imageType="backDefault" />

            <CustomImage name={data.name} id={data.id} imageType="frontShiny" />
            <CustomImage name={data.name} id={data.id} imageType="backShiny" />


          </div>
          <p>{data.base_experience}</p>
        </div>
      </Layout>
    </main >
  )
}
export default Page