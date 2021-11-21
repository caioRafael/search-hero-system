import { HeroPage } from './components';
import { HeroProvider } from './context/HeroContext';

import './global.scss'

function App() {
  return (
    <HeroProvider>
      <HeroPage />
    </HeroProvider>
  );
}

export default App;
