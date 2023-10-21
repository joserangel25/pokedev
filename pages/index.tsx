import { GetStaticProps } from "next";
import { Layout } from "@/components/layouts";
import { pokeApi } from "@/api";
import { PokemonListResponse, SmallPokemon } from "@/interfaces";
import { PokemonGrid, Pokemon } from "@/components/pokemons";
import { getUrlImagePokemon } from "@/utils";

interface Props {
  pokemons: SmallPokemon[]
}
const HomePage: React.FC<Props> = ({ pokemons }) => {
  return (
    <Layout title="Pokemons List 🐲">
      <h1
        className="uppercase font-bold text-3xl text-center mb-5"
      >Lista de Pokemons</h1>

      <PokemonGrid>
        {
          pokemons.map(pokemon => (
            <Pokemon pokemon={pokemon} key={pokemon.id} />
          ))
        }
      </PokemonGrid>
    </Layout>
  )
}

export default HomePage

export const getStaticProps: GetStaticProps = async () => {
  const { data } = await pokeApi<PokemonListResponse>('/pokemon?limit=151')

  const mappedPokemons: SmallPokemon[] = data.results.map((pokemon, ind): SmallPokemon => {
    const id = ind + 1
    return {
      ...pokemon,
      id,
      image: getUrlImagePokemon(id)
    }
  })
  return {
    props: {
      pokemons: mappedPokemons
    }
  }
}