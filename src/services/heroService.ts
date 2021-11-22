import { getNewHero, Hero } from "../models/Hero";
import api from "./api";

export async function getHeroById(id: number): Promise<Hero> {
  const response = await api.get(`/${id + 1}`);

  return response.data as Hero;
}

export async function getListHero(list: Hero[]): Promise<Hero[]> {
  try {
    let listHeros: Hero[] = [];
    const id = list.length > 0 ? list[list.length - 1].id + 1 : 1;
    const limit = list[list.length - 1].id + 12;

    if (list[0].id === 0) {
      list.splice(list.indexOf(getNewHero()), 1);
    }
    for (let i = id; i <= limit; i++) {
      let hero: Hero;
      if (i !== 0) {
        const response = await api.get(`/${i}`);

        hero = { ...response.data, id: parseInt(response.data.id) }
        listHeros.push(hero);
      }
    }


    return [...list, ...listHeros]

  } catch (err) {
    throw new Error('Erro ao carregar os herois')
  }
}