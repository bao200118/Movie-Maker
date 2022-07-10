import { CastError } from "mongoose";
import { type } from "os";
import Movie, { iMovie } from "../models/model";

export const resolvers = {
  movies: (args: { name: String } | null) => {
    if (args?.name) {
      return Movie.find({ name: { $regex: `${args.name}` } });
    }
    return Movie.find({});
  },

  addMovie: (args: iMovie) => {
    return Movie.create(args);
  },

  deleteMovie: async (args: { id: String }) => {
    try {
      const result = await Movie.deleteOne({ _id: args.id });
      if (result.deletedCount === 0) {
        return "Id not found";
      }
      return "Success";
    } catch (error: any) {
      if (error.name === "CastError") {
        return "Wrong id";
      }
    }
  },
};
