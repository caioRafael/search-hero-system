import { Powerstats, getNewPowerstats } from './Powerstats';
import { Connections, getNewConnections } from './Connections';
import { Appearance, getNewAppearance } from "./Appearance";
import { Biography, getNewBiography } from "./Biography";
import { getNewImage, Image } from './Image';
import { getNewWork, Work } from './Work';

export type Hero = {
  response: string,
  id: string,
  name: string,
  appearance: Appearance,
  biography: Biography,
  connections: Connections,
  image: Image,
  powerstats: Powerstats,
  work: Work,
}

export function getNewHero(): Hero {
  return {
    response: "",
    id: "",
    name: "",
    appearance: getNewAppearance(),
    biography: getNewBiography(),
    connections: getNewConnections(),
    image: getNewImage(),
    powerstats: getNewPowerstats(),
    work: getNewWork(),
  }
}