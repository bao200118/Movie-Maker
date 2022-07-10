import mongoose from "mongoose";

export interface iMovie {
  name: String;
  genre: String;
  year: String;
}

const movieSchema = new mongoose.Schema({
  name: String,
  genre: String,
  year: String,
});

export default mongoose.model<iMovie>("Movie", movieSchema);
