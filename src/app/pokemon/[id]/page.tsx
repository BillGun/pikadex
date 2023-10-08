import { Pokemon, PokemonSpecies } from "@/api/constant";
import { pokemonGetById } from "@/api/pokemon";
import { pokemonSpeciesGetByPokemon } from "@/api/pokemon-species";
import Layout from "@/components/Layout";
import { LeftArrowIcon } from "@/components/LeftArrowIcon";
import { PokemonSprite } from "@/components/PokemonSprite";
import { RightArrowIcon } from "@/components/RightArrowIcon";


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

const Page = async ({ params }: { params: { id: string } }) => {
  const data: Pokemon = await pokemonGetById(Number(params.id)).then(res => {
    return res;
  });

  const species: PokemonSpecies = await pokemonSpeciesGetByPokemon(data).then(res => {
    return res[0];
  });

  // const evolutionChain: EvolutionChain = await evolutionChainGetByPokemonSpecies(species).then(res => {
  //   return res[0];
  // });

  return (
    <main className='flex w-full flex-col items-center justify-center text-themeLight'>
      <Layout className="!py-16">
        <div className="grid w-full grid-cols-8 gap-y-0 bg-themeDark rounded-2xl items-center justify-between ">
          <div className="w-full px-8 py-3 flex justify-between border-solid border-b-2 border-white col-span-8">
            <h4 className="text-xl font-semibold">#{data.id} <span className="capitalize">{data.name},</span> {species.genera.find(i => i.language.name === 'en')?.genus}</h4>
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
            <div className="w-full pt-2 pb-2">
              <p>{species.flavor_text_entries.filter(i => i.language.name === 'en').at(-1)?.flavor_text}</p>
            </div>
            <div className="w-full pt-2 flex items-center justify-around capitalize">
              <p>{species.generation.name.split('-')[0]} <span className="uppercase">{species.generation.name.split('-')[1]}</span></p>
              <p>Shape: {species.shape?.name || 'Not Found'}</p>
              <p>Habitat: {species.habitat?.name || 'Not Found'}</p>
            </div>
            <div className="w-full pt-2 flex items-center justify-around">
              <p>Weight: {data.weight / 10} kg</p>
              <p>Height: {data.height / 10} m</p>
              <p>Base Experience: {data.base_experience}</p>
              <p>Growth Rate: <span className="capitalize">{species.growth_rate.name.replace('-', ' ')}</span></p>
            </div>
            <div className="w-full flex flex-col mt-3">
              <h5 className="text-lg font-semibold">Status</h5>
              <div>
                {data.stats.map((data, i: number) => {
                  const pokemonStat = (data.stat.name).replace('-', ' ');
                  const baseStat = data.base_stat;
                  const barWidth = `${Math.floor(66 * baseStat / 255)}%`;
                  return (
                    <div key={i} className="w-full flex my-2 capitalize first:uppercase">
                      <div className={`w-1/3 flex justify-center font-md text-left py-1 px-2`}>
                        <span className="w-3/5">{pokemonStat}</span>
                        <span className="w-1/5 text-center">:</span>
                        <span className="w-1/5 text-right">{baseStat} </span>
                      </div>
                      <div className={`min-h-full bg-themeLight`} style={{ width: barWidth }} />
                    </div>
                  )
                })}
              </div>
            </div>
            {/* <div>
              Ability
            </div> */}
          </div>
          {/* <div>
            <h4>Evolution Chain</h4>
            {evolutionChain.chain.}
          </div> */}
        </div>
      </Layout>
      {Number(params.id) !== 1 ?
        <LeftArrowIcon id={params.id} />
        :
        ''
      }
      {Number(params.id) !== 1017 ?
        <RightArrowIcon id={params.id} />
        :
        ''
      }
    </main >
  )
}
export default Page