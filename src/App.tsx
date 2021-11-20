import { ListHeroPage } from './components';
import { HeroProvider } from './context/HeroContext';

function App() {
  return (
    <HeroProvider>
      <ListHeroPage />
    </HeroProvider>
  );
}

export default App;
