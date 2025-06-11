import { Movie } from "../models/model.js";

export const postMovie = async (req, res) => {
  const newMovie = new Movie({
    title: req.body.title,
    desc: req.body.desc,
  });

  try {
    const movie = await newMovie.save();
    res.status(201).json(movie);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const getMovies = async (req, res) => {
  try {
    const movies = await Movie.find();
    res.json(movies);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getMovie = async (req, res) => {
  try {
    const movie = await Movie.findById(req.params.id);
    movie
      ? res.json(movie)
      : res.status(404).json({ message: "Can't find the movie" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const putMovie = async (req, res) => {
  try {
    const updatedMovie = await Movie.findOneAndUpdate(
      { _id: req.params.id },
      {
        title: req.body.title,
        desc: req.body.desc,
      },
      {
        new: true,
      }
    );
    res.status(200).json(updatedMovie);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const deleteMovie = async (req, res) => {
  try {
    await Movie.deleteOne({ _id: req.params.id });
    res.status(200).json({ message: "Movie deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
