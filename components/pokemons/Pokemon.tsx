import Image from 'next/image'
import { SmallPokemon } from '@/interfaces'
import Link from 'next/link'

const Pokemon = ({ pokemon }: { pokemon: SmallPokemon }) => {
  return (
    <li key={pokemon.id} className="text-center bg-slate-950 p-3 rounded-lg shadow h-[200px]">
      <p>{`#${pokemon.id} `}
        <span className="font-extrabold text-xl uppercase text-amber-800">
          {pokemon.name}
        </span>
      </p>
      <Link href={`/pokemon/${pokemon.name}`}>
        <Image
          src={pokemon.image}
          alt={`Imagen del pokemon ${pokemon.name}`}
          width={150} height={80} className="mx-auto max-h-[135px]" />
      </Link>
    </li>
  )
}

export { Pokemon }