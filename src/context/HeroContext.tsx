import { createContext, ReactNode, useEffect, useState } from 'react'
import { getNewHero, Hero } from '../models/Hero';
import api from '../services/api';

interface HeroContextData {
  hero: Hero;
  next: () => void;
}

interface HeroProviderProps {
  children: ReactNode;
}

export const HeroContext = createContext({} as HeroContextData)

export function HeroProvider({ children }: HeroProviderProps) {
  const [hero, setHero] = useState<Hero>(getNewHero());
  const [id, setId] = useState(1);


  const next = () => {
    if (!!parseInt(hero.id) && parseInt(hero.id) <= 731) {
      const idHero = parseInt(hero.id);

      setId(idHero + 1);
    }
  }

  useEffect(() => {
    async function getData() {
      const response = await api.get(`/${id}`);

      setHero(response.data);
    }
    getData();
  }, [id])
  return (
    <HeroContext.Provider value={{
      hero,
      next
    }}>
      {children}
    </HeroContext.Provider>
  )
}