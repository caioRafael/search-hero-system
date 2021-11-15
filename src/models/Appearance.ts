export type Appearance = {
  "eye-color": string,
  gender: string,
  "hair-color": string,
  height: string[],
  weight: string[],
  race: string
}

export function getNewAppearance(): Appearance {
  return {
    "eye-color": "",
    "hair-color": "",
    gender: "",
    height: [],
    weight: [],
    race: "",
  }
}