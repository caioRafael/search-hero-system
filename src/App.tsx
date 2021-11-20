import { HeroPage } from './components/HeroPage';
import { HeroProvider } from './context/HeroContext';

function App() {
  return (
    <HeroProvider>
      <HeroPage />
    </HeroProvider>
  );
}

export default App;
