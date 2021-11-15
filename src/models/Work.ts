export type Work = {
  occupation: string,
  base: string,
}

export function getNewWork(): Work {
  return {
    occupation: "",
    base: "",
  }
}