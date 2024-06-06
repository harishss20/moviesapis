import Movie from "../models/movies.models.js";

export const movieIndex = (req, res) => {
  res.send("This is get Method");
};

export const movieCreate = async (req, res) => {
  const newMovie = new Movie({
    title: req.body.title,
    disc: req.body.disc,
  });

  try {
    const movie = await newMovie.save();
    return res.status(201).json(movie);
  } catch (err) {
    return res.status(400).json({ message: err.message });
  }
};

export const movieUpdate = (req, res) => {
  res.send("This is put method");
};

export const movieDelete = (req, res) => {
  res.send("this is delete method");
};
