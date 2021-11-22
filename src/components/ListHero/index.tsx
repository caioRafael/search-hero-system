import { useHero } from "../../hooks/useHero";
import { Card } from "./components";

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