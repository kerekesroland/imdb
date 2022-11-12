import { gql } from "@apollo/client";

export const MOVIE = gql`
  query getMovie($id: ID!) {
    movie(id: $id) {
      id
      name
      overview
      score
      genres {
        id
        name
      }
      poster {
        original
      }
      cast(limit: 5) {
        id
        person {
          name
        }
        role {
          ... on Cast {
            character
          }
        }
      }
      crew(limit: 5) {
        id
        person {
          name
        }
        role {
          ... on Crew {
            job
            department
          }
        }
      }
    }
  }
`;
