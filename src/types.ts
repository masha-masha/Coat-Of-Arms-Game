export interface ICity {
  id: number;
  name: string; 
  country: string; 
  coatOfArmsUrl: string; 
  aliases: string[]; 

}

export type GameStatus = 'playing' | 'correct' | 'wrong' | 'revealed';