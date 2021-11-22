import { Hero } from "../../../../models/Hero"

import './styles.scss'
import { Powerstats } from ".."

type CardTypesProps = {
  hero: Hero
}

export default function Card({ hero }: CardTypesProps) {
  return (
    <section>
      <header>
        <div>{hero.id}</div>
        <div>{hero.name}</div>
      </header>
      <img src={hero.image.url} alt="Hero" />
      <footer >
        <Powerstats powerstats={hero.powerstats} />
        <button>info</button>
      </footer>
    </section>
  )
}