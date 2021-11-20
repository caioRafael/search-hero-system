import { useContext } from 'react';
import { HeroContext } from '../context/HeroContext';

export function useHero() {
  const context = useContext(HeroContext);

  return context;
}