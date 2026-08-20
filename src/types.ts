export interface ICity {
  id: number;
  name: string;
  coatOfArmsUrl: string;
  aliases: string[];
  categories?: string[];
  facts?: string[]; 
}

export interface ICategory {
  id: string;
  title: string;
}

