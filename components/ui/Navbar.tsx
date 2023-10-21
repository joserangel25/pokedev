import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

type Props = {}

export const Navbar = (props: Props) => {
  return (
    <header
      className="dark:bg-gray-950  dark:text-white light:bg-white light:text-black">
      <nav className="flex flex-col sm:flex-row justify-between py-2 px-5 items-center">
        <Link href="/" className='flex '>
          <Image src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png" alt="Imagen de un pokemon" width={40} height={40} objectFit='cover' />
          <p className='text-2xl font-extrabold'>PokeDev</p>
        </Link>

        <Link href="/favorites">Favorites</Link>
      </nav>
    </header>
  )
}