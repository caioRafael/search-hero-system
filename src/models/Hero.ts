import { Powerstats } from './Powerstats';
import { Connections } from './Connections';
import { Appearance } from "./Appearance";
import { Biography } from "./Biography";
import { Image } from './Image';
import { Work } from './Work';

export type Hero = {
  id: string,
  name: string,
  appearance: Appearance,
  biography: Biography,
  connections: Connections,
  image: Image,
  powerstats: Powerstats,
  work: Work,
}