export interface IMovie {
  popularMovies: {
    id: number;
    name: string;
    score: number;
    genres: Genre[];
    img: string;
    releaseDate: Date;
  };
}

interface Genre {
  id: number;
  name: string;
}
