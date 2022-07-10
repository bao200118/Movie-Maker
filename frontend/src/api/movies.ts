import { gql } from "@apollo/client";

export const GET_ALL_MOVIES = gql`
  query getMovies($name: String) {
    movies(name: $name) {
      _id
      name
      genre
      year
    }
  }
`;

export const ADD_MOVIE = gql`
  mutation AddMovie($name: String!, $genre: String!, $year: String) {
    addMovie(name: $name, genre: $genre, year: $year) {
      _id
      name
      genre
      year
    }
  }
`;

export const DELETE_MOVIE = gql`
  mutation DeleteMovie($id: String!) {
    deleteMovie(id: $id)
  }
`;
