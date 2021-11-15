export type Powerstats = {
  combat: string,
  durability: string,
  intelligence: string,
  power: string,
  speed: string,
  strength: string,
}

export function getNewPowerstats(): Powerstats {
  return {
    combat: "",
    durability: "",
    intelligence: "",
    power: "",
    speed: "",
    strength: "",
  }
}