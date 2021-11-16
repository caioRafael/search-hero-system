import { Hero } from "../models/Hero";
import api from "./api";

export async function getHeroById(id: number): Promise<Hero> {
  const response = await api.get(`/${id + 1}`);

  return response.data as Hero;
}