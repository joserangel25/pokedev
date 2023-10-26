import { pokeApi } from "@/api"
import { Pokemon } from "@/interfaces"

export const getUrlImagePokemon = (id: number) => (`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${id}.svg`)


export const getPokemonInfo = async (id: string) => {
  try {
    const { data } = await pokeApi<Pokemon>(`/pokemon/${id}`)
    return {
      name: data.name,
      id: data.id,
      sprites: data.sprites
    }
  } catch (error) {
    console.log(error)
    return null
  }
}