
export interface IMovie {
  id: number;
  title: string;
  year: number;
  releaseDate?: string;
  votes: number;
  overview: string;
  poster: string;
  cover?: string;
  isFavorite?: boolean;
}
