import Image from 'next/image'
import { getUrlImagePokemon } from '@/utils'
import { FavoritePokemon } from '@/interfaces'
import Link from 'next/link'

type Props = {
  pokemon: FavoritePokemon
}

const FavoriteCardPokemon = ({ pokemon }: Props) => {
  const { id, name } = pokemon
  return (
    <li key={id} className="text-center bg-slate-950 p-3 rounded-lg shadow h-[200px] flex items-center justify-center">
      <Link href={`/pokemon/${name}`} title={`Ir al detalle de ${name}`}>
        <Image
          src={getUrlImagePokemon(id)}
          alt={`Imagen del pokemon con id ${id} }`}
          width={150} height={80} className="mx-auto max-h-[135px]" />
      </Link>
    </li>
  )
}

export { FavoriteCardPokemon }