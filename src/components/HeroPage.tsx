import { useHero } from "../hooks/useHero";

export function HeroPage() {
  const { hero, next } = useHero();

  return (
    <div className="App">
      <button onClick={next}>Next</button>
      <h1>olá mundo</h1>
      {hero && (
        <>
          <h2>Name: {hero.name}</h2>
          <br />
          <img src={hero.image.url} alt="Hero" />
          <br />
          <strong>Appearance:</strong>
          <p>Eye Color: {hero.appearance['eye-color']}</p>
          <p>Gender: {hero.appearance.gender}</p>
          <p>Hair Color: {hero.appearance['hair-color']}</p>
          <p>Height: {hero.appearance.height[1]}</p>
          <p>Weight: {hero.appearance.weight[1]}</p>
          <p>Race: {hero.appearance.race}</p>
          <br />
          <strong>Biography:</strong>
          <p>Full Name: {hero.biography['full-name']}</p>
          <p>Publisher: {hero.biography.publisher}</p>
          <p>Alignment: {hero.biography.alignment}</p>
          <p>Alter Egos: {hero.biography['alter-egos']}</p>
          <p>Fist Appearance: {hero.biography['first-appearance']}</p>
          <label htmlFor="aliases">Aliases</label>
          <ul id="aliases">
            {hero.biography.aliases.map((a, index) => (
              <li key={index} >{a}</li>
            ))}
          </ul>
          <br />
          <strong>Connections:</strong>
          <p>Group Affiliation: {hero.connections['group-affiliation']}</p>
          <p>Relatives: {hero.connections.relatives}</p>
          <br />
          <strong>Powerstats:</strong>
          <p>Combat: {hero.powerstats.combat}</p>
          <p>Durability: {hero.powerstats.durability}</p>
          <p>Intelligence: {hero.powerstats.intelligence}</p>
          <p>Power: {hero.powerstats.power}</p>
          <p>Speed: {hero.powerstats.speed}</p>
          <p>Strength: {hero.powerstats.strength}</p>
        </>
      )}
    </div>
  )
}