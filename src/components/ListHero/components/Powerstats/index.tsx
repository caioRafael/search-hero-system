import { Powerstats as PS } from "../../../../models/Powerstats"
import {
  GiRockGolem,
  GiHearts,
  GiBrain,
  GiMightyForce,
  GiSpeedometer,
  GiBiceps
} from "react-icons/gi"

import './styles.scss'

type CardTypesProps = {
  powerstats: PS
}

export default function Powerstats({ powerstats }: CardTypesProps) {
  return (
    <div className="power">
      <span><GiMightyForce size={20} color="gray" style={{ marginRight: 5 }} />{powerstats.combat}</span>
      <span><GiHearts size={20} color="red" style={{ marginRight: 5 }} />{powerstats.durability}</span>
      <span><GiBrain size={20} color="pink" style={{ marginRight: 5 }} />{powerstats.intelligence}</span>
      <span><GiRockGolem size={20} color="green" style={{ marginRight: 5 }} />{powerstats.power}</span>
      <span><GiSpeedometer size={20} color="yellow" style={{ marginRight: 5 }} />{powerstats.speed}</span>
      <span><GiBiceps size={20} color="red" style={{ marginRight: 5 }} />{powerstats.strength}</span>
    </div>
  )
}