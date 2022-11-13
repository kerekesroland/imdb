import { gql } from "@apollo/client";

export const SEARCH_MOVIE = gql`
  query Search($query: String!) {
    searchMovies(query: $query) {
      id
      name
      score
      genres {
        id
        name
      }
      releaseDate
      img: poster {
        original
      }
    }
  }
`;

export const SEARCH_MOVIE_RELATED = gql`
  query Search($query: String!) {
    searchMovies(query: $query) {
      id
      name
      score
      genres {
        id
        name
      }
      releaseDate
      img: poster {
        original
      }
      similar(limit: 10) {
        id
        name
        score
        genres {
          id
          name
        }
        releaseDate
        img: poster {
          original
        }
      }
    }
  }
`;
