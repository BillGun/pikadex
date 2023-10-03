import { pokemonGetById } from "@/api/pokemon";
import Layout from "@/components/Layout";
import { PokemonSprite } from "@/components/PokemonSprite";

interface PokemonDetail {
  id: number,
  name: string,
  base_experience: number,
  weight: number,
  height: number,
  types: [{
    type: PokemonType
  }],
  stats: [{
    base_stat: number,
    stat: PokemonStat,
  }]
}

interface PokemonType {
  name: string,
  url: string,
}

interface PokemonStat {
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

const Page = async ({ params }: { params: { id: number } }) => {
  const data: PokemonDetail = await pokemonGetById(params.id).then(res => {
    return res;
  });

  return (
    <main className='flex w-full flex-col items-center justify-center text-themeLight'>
      <Layout className="!py-16">
        <div className="grid w-full grid-cols-8 gap-y-0 bg-themeDark rounded-2xl items-center justify-between ">
          <div className="w-full px-8 py-3 flex justify-between border-solid border-b-2 border-white col-span-8">
            <h4 className="text-xl font-semibold">#{data.id} <span className="capitalize">{data.name}</span></h4>
            <div className="flex">
              {data.types.map((data, i: number) => {
                const pokemonType = data.type.name;
                return (
                  <div key={i} className={`mx-0.5 px-2 py-1 font-semibold rounded-md text-center uppercase ${pokemonBgVariants[pokemonType]} `}>
                    <p>{pokemonType}</p>
                  </div>
                )
              })}
            </div>
          </div>
          <div className="col-span-3 flex m-4 p-4 bg-themeLight flex-wrap relative">
            <PokemonSprite name={data.name} id={data.id} />
          </div>
          <div className="col-span-5 px-8 py-4 border-l-2 border-themeLight">
            <div className="w-full flex items-center justify-around">
              <p>Weight: {data.weight}</p>
              <p>Height: {data.height}</p>
              <p>Base Experience: {data.base_experience}</p>
            </div>
            <div className="w-full flex flex-col mt-4">
              <h5 className="text-lg font-semibold">Status</h5>
              <div>
                {data.stats.map((data, i: number) => {
                  const pokemonStat = (data.stat.name).replace('-', ' ');
                  const baseStat = data.base_stat;
                  const barWidth = `${Math.floor(66 * baseStat / 255)}%`;
                  return (
                    <div key={i} className="w-full flex my-2 capitalize first:uppercase">
                      <p className={`w-1/3 font-md text-left py-1`}>{pokemonStat}: {baseStat} </p>
                      <div className={`min-h-full bg-themeLight`} style={{ width: barWidth }} />
                    </div>
                  )
                })}
              </div>
            </div>
            <div>
              Ability
            </div>
          </div>
        </div>
      </Layout>
    </main >
  )
}
export default Page