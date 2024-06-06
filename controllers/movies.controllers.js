import Movie from "../models/movies.models.js";

export const movieIndex = async (req, res) => {
  try {
    const Movies = await Movie.find();
    res.json(Movies);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
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

export const movieDetail = async (req, res) => {
  try {
    const movie = await Movie.findById(req.params.id);

    if (movie == null) {
      return res.status(404).json({ message: "Cannot find movie" });
    } else {
      res.json(movie);
    }
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
};

export const movieUpdate = async (req, res) => {
  try {
    const updatedMovie = await Movie.findOneAndUpdate(
      { _id: req.params.id },
      {
        title: req.body.title,
        disc: req.body.disc,
      },
      {
        new: true,
      }
    );

    res.status(200).json(updatedMovie);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

export const movieDelete = async (req, res) => {
  try {
    await Movie.deleteOne({ _id: req.params.id });
    res.status(200).json({ message: "Movie is updated " });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};
