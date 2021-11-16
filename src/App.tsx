import { useEffect, useState } from 'react';
import { getNewHero, Hero } from './models/Hero';
import { useAppDispatch, useAppSelector } from './redux/hook';
import { nextIdHero, selectHero } from './redux/slice/heroSlice';
import api from './services/api';


function App() {
  const { id } = useAppSelector(selectHero)
  const dispatch = useAppDispatch();

  const [hero, setHero] = useState<Hero>(getNewHero());

  async function getData() {
    const response = await api.get(`/${id}`);

    setHero(response.data);
    console.log(response.data);
  }
  useEffect(() => {
    getData();
  }, [id])

  return (
    <div className="App">
      <button onClick={() => dispatch(nextIdHero())}>Next</button>
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
  );
}

export default App;
