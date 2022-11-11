import { gql } from "@apollo/client";

export const POPULAR_MOVIES = gql`
  query fetchPopular {
    popularMovies {
      id
      name
      score
      genres {
        id
        name
      }
      releaseDate
      img: poster {
        url: custom(size: "w185_and_h278_bestv2")
      }
    }
  }
`;
