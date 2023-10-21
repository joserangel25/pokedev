import { FavoritePokemon } from "@/interfaces"

const toggleFavorite = ({ id, name }: FavoritePokemon) => {
  let favorites: FavoritePokemon[] = JSON.parse(localStorage.getItem('favorites') ?? '[]')
  const existPokemon = favorites.some(poke => poke.id === id)
  if (existPokemon) {
    favorites = favorites.filter(pokemon => pokemon.id !== id)
  } else {
    favorites.push({ id, name })
  }

  localStorage.setItem('favorites', JSON.stringify(favorites))
}

const isFavorite = (id: number): boolean => {
  if (typeof window === 'undefined') return false
  const favorites: FavoritePokemon[] = JSON.parse(localStorage.getItem('favorites') ?? '[]')
  return favorites.some(poke => poke.id === id)
}

const getFavorites = (): FavoritePokemon[] => {
  if (typeof window === 'undefined') return []

  return JSON.parse(localStorage.getItem('favorites') ?? '[]')
}

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  toggleFavorite,
  isFavorite,
  getFavorites
}