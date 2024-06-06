import { Schema, model } from "mongoose";

const schema = new Schema({
  title: String,
  disc: String,
});

const Movie = model("Movie", schema);

export default Movie;
