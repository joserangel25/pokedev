import { useState } from "react"
import Image from "next/image"
import { GetStaticPaths, GetStaticProps } from "next"
import confetti from "canvas-confetti"
import { Layout } from "@/components/layouts"
import { LikeButton } from "@/components/ui"
import { Pokemon, PokemonListResponse } from "@/interfaces"
import { localeFavorites } from "@/utils"
import { pokeApi } from '@/api'
import { getPokemonInfo } from "@/utils/pokemons"


type Props = {
  pokemon: Pokemon
}

const PokemonDetail: React.FC<Props> = ({ pokemon }) => {
  const [isInFavorite, setIsInFavorite] = useState(localeFavorites.isFavorite(pokemon.id))
  const onToggleFavorite = () => {
    localeFavorites.toggleFavorite({ id: pokemon.id, name: pokemon.name })
    setIsInFavorite(!isInFavorite)

    if (isInFavorite) return
    confetti({
      zIndex: 999,
      particleCount: 160,
      spread: 160,
      angle: -140,
      origin: {
        x: 1,
        y: 0.1
      }
    })
  }
  return (
    <Layout title={pokemon.name}>
      <section className="flex gap-5">
        <figure className="p-3 bg-gray-900 rounded-lg shadow-md">
          <Image
            src={pokemon.sprites.other?.dream_world.front_default || '/no-image.png'}
            alt={`Imagen del pokemon ${pokemon.name}`}
            width={200}
            height={200}
          />
        </figure>

        <div className="flex-1 p-3 bg-gray-900 rounded-lg shadow-md space-y-5">
          <div className="flex justify-between">
            <p className="text-3xl font-extrabold capitalize">{pokemon.name}</p>
            <LikeButton isFavorite={isInFavorite} onToggleFavorite={onToggleFavorite} />
          </div>

          <p className="font-bold text-amber-600">Sprites:</p>
          <div className="flex justify-evenly gap-3">
            <Image
              src={pokemon.sprites.front_default}
              alt={`Imagen del pokemon ${pokemon.name}`}
              width={120}
              height={100}
            />

            <Image
              src={pokemon.sprites.back_default}
              alt={`Imagen del pokemon ${pokemon.name}`}
              width={120}
              height={100}
            />
            <Image
              src={pokemon.sprites.front_shiny}
              alt={`Imagen del pokemon ${pokemon.name}`}
              width={120}
              height={100}
            />
            <Image
              src={pokemon.sprites.back_shiny}
              alt={`Imagen del pokemon ${pokemon.name}`}
              width={120}
              height={100}
            />
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default PokemonDetail

export const getStaticPaths: GetStaticPaths = async () => {
  const { data } = await pokeApi<PokemonListResponse>('/pokemon?limit=151')
  const paths = data.results.map(poke => ({ params: { name: poke.name } }))
  return {
    paths,
    //False -> redirect to 404; Blocking -> permite pasar el parametro hacia getStaticProps
    fallback: "blocking" //false 
  }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { name } = params as { name: string }

  const pokemon = await getPokemonInfo(name);

  if (!pokemon) {
    return {
      redirect: {
        destination: '/',
        permanent: false
      },
    }
  }
  return {
    props: {
      pokemon
    }
  }
}