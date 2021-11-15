export type Biography = {
  aliases: string[],
  alignment: string,
  "alter-egos": string,
  "first-appearance": string,
  "full-name": string,
  "place-of-birth": string,
  publisher: string,
}

export function getNewBiography(): Biography {
  return {
    aliases: [],
    alignment: "",
    "alter-egos": "",
    "first-appearance": "",
    "full-name": "",
    "place-of-birth": "",
    publisher: "",
  }
}