import { useState, useEffect } from "react"
import { Layout } from "@/components/layouts"
import { FavoriteCardPokemon, PokemonGrid } from "@/components/pokemons"
import { localeFavorites } from "@/utils"
import { FavoritePokemon } from "@/interfaces"

type Props = {}

const FavoritesPage = (props: Props) => {
  const [favoritesPokemons, setFavoritesPokemons] = useState<FavoritePokemon[]>([])

  useEffect(() => {
    setFavoritesPokemons(localeFavorites.getFavorites())
  }, [])

  return (
    <Layout title="Favorites">
      {
        favoritesPokemons.length ?
          <PokemonGrid>
            {
              favoritesPokemons.map((pokemon) => (
                <FavoriteCardPokemon key={pokemon.id} pokemon={pokemon} />
              ))
            }
          </PokemonGrid>
          : <p className="text-center text-lg font-bold">No hay favoritos</p>
      }
    </Layout>
  )
}

export default FavoritesPage