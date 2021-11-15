export type Connections = {
  "group-affiliation": string,
  relatives: string
}

export function getNewConnections(): Connections {
  return {
    "group-affiliation": "",
    relatives: "",
  }
}