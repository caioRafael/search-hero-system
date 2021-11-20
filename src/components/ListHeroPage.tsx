import { useHero } from "../hooks/useHero";

export default function ListHeroPage() {
  const { listHeros, next } = useHero();

  return (
    <div className="App">
      <button onClick={next}>Next</button>
      {listHeros.map(hero => (
        <div key={hero.id}>
          {hero
            && hero.id !== 0
            && (
              <>
                <h2>ID: {hero.id}</h2>
                <h2>Name: {hero.name}</h2>
                <br />
                <img src={hero.image.url} alt="Hero" />
              </>
            )}
        </div>
      )
      )}
    </div>
  )
}