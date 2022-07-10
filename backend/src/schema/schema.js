"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.movieSchema = void 0;
const graphql_1 = require("graphql");
exports.movieSchema = (0, graphql_1.buildSchema)(`
    type Query {
        movies: [Movie]
    }

    type Movie {
        name: String,
        genre: String,
        year: String,
    }
`);
