import { useHero } from "../../hooks/useHero";
import { Card } from "../HeroPage/components";

import './styles.scss'

export default function ListHero() {
  const { listHeros } = useHero();

  return (
    <div className="content">
      {listHeros.map(hero => (
        <Card hero={hero} key={hero.id} />
      )
      )}
    </div>
  )
}