import express, { Express, Request, Response } from "express";
import mongoose from "mongoose";
import { resolve } from "path";
import { resolvers } from "./resolver/resolver";
import { movieSchema } from "./schema/schema";
import cors from "cors";

const app: Express = express();

var { graphqlHTTP } = require("express-graphql");
var { buildSchema } = require("graphql");

mongoose
  .connect("mongodb://localhost:27017/movie-maker")
  .then(() => console.log("MongoDB Connected"))
  .catch((err: Error) => console.log("Error", err));

app.get("/", (req: Request, res: Response) => {
  res.send("Hello from nodejs");
});

const rootValue = {
  name: () => {
    return "Hello";
  },
};

app.use(cors());

app.use(
  "/graphql",
  graphqlHTTP({
    schema: movieSchema,
    graphiql: true,
    rootValue: resolvers,
  })
);

app.listen(4000, () => {
  console.log("Server on port 4000");
});
