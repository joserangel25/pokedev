import Head from "next/head"
import { Navbar } from "../ui"

type Props = {
  children: JSX.Element | JSX.Element[]
  title: string
}

export const Layout: React.FC<Props> = ({ children, title }) => {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="author" content="Jose Rangel" />
        <meta name="description" content="Información sobre el Pokemon xxx" />
        <meta name="keywords" content="pokemon, pokedex" />
      </Head>

      <div className='dark text-foreground bg-background flex flex-col min-h-screen'>

        <Navbar />

        <main className="flex-1 p-5">
          {children}

        </main>
      </div>
    </>
  )
}