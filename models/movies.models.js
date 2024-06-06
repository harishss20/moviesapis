import { Schema, model } from "mongoose";

const schema = new Schema({
  title: {
    type: String,
    require: true,
    unique: true,
  },
  disc: {
    type: String,
    require: true,
  },
});

const Movie = model("Movie", schema);

export default Movie;
