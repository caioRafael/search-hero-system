import { useHero } from "../hooks/useHero";

export function HeroPage() {
  const { next } = useHero();



  return (
    <div className="App">
      <button onClick={next}>Next</button>
      <h1>olá mundo</h1>
    </div>
  )
}