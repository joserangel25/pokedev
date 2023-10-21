import { FC } from "react"

interface Props {
  children: JSX.Element | JSX.Element[]
}
const PokemonGrid: FC<Props> = ({ children }) => {
  return (
    <ul
      className="grid grid-cols-[repeat(auto-fill,minmax(200px,240px))] gap-3  place-content-center"
    >
      {children}
    </ul>
  )
}

export { PokemonGrid }