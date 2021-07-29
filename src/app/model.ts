export interface Collegue {
  pseudo : string
  nom: string
  prenom: string
  score : number
  photo : string
}

export enum Avis {
  AIMER='AIMER',DETESTER='DETESTER'
}
export interface CreerVote {
  pseudo: Collegue['pseudo'],
  avis: Avis
}
export interface Vote {
  collegue: Collegue,
  avis: Avis,
  score: number
}
