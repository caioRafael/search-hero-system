import { useEffect, useState } from 'react';
import { Hero } from './models/Hero';
import api from './services/api';


function App() {
  const [hero, setHero] = useState<Hero>();

  async function getData() {
    const response = await api.get("65");

    setHero(response.data);
    console.log(response.data);
  }
  useEffect(() => {
    getData();
  }, [])

  return (
    <div className="App">
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
        </>
      )}
    </div>
  );
}

export default App;
