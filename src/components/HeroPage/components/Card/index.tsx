import { Hero } from "../../../../models/Hero"
import {
  GiHearts,
  GiRockGolem,
  GiBrain,
  GiMightyForce,
  GiSpeedometer,
  GiBiceps
} from "react-icons/gi"

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
      <footer className="power">
        <span><GiHearts size={20} color="red" style={{ marginRight: 5 }} />{hero.powerstats.combat}</span>
        <span><GiRockGolem size={20} color="gray" style={{ marginRight: 5 }} />{hero.powerstats.durability}</span>
        <span><GiBrain size={20} color="pink" style={{ marginRight: 5 }} />{hero.powerstats.intelligence}</span>
        <span><GiMightyForce size={20} color="green" style={{ marginRight: 5 }} />{hero.powerstats.power}</span>
        <span><GiSpeedometer size={20} color="yellow" style={{ marginRight: 5 }} />{hero.powerstats.speed}</span>
        <span><GiBiceps size={20} color="red" style={{ marginRight: 5 }} />{hero.powerstats.strength}</span>
      </footer>
    </section>
  )
}