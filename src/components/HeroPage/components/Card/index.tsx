import { Hero } from "../../../../models/Hero"

import './styles.scss'

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
    </section>
  )
}