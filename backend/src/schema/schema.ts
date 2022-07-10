import { buildSchema } from "graphql";

export const movieSchema = buildSchema(`
    type Query {
        movies(name: String): [Movie]
    }

    type Mutation {
        addMovie(name: String!, genre: String!, year: String): Movie
        deleteMovie(id: String!): String
    }

    type Movie {
        _id: ID!,
        name: String,
        genre: String,
        year: String,
    }
`);
