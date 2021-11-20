import { createContext, ReactNode, useEffect, useState } from 'react'
import { getNewHero, Hero } from '../models/Hero';
import { getListHero } from '../services/heroService';

interface HeroContextData {
  listHeros: Hero[];
  next: () => void;
}

interface HeroProviderProps {
  children: ReactNode;
}

export const HeroContext = createContext({} as HeroContextData)

export function HeroProvider({ children }: HeroProviderProps) {
  const [listHeros, setListHeros] = useState<Hero[]>([getNewHero()])

  const next = async () => {
    await getListHeros()
  }


  async function getListHeros() {
    const list = await getListHero(listHeros);
    console.log(list);
    setListHeros(list);
  }
  useEffect(() => {

    getListHeros();
  }, [])


  return (
    <HeroContext.Provider value={{
      next,
      listHeros
    }}>
      {children}
    </HeroContext.Provider>
  )
}