import { ListHero } from "..";
import { useHero } from "../../hooks/useHero";

import './styles.scss';

export default function HeroPage() {
  const { next } = useHero();

  return (
    <div className="container">
      <ListHero />
      <button onClick={next}>Next</button>
    </div>
  )
}