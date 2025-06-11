import express from "express";
import {
  deleteMovie,
  getMovies,
  postMovie,
  putMovie,
  getMovie,
} from "../Controllers/movies.js";

const router = express.Router();

router.post("/", postMovie);

router.get("/", getMovies);

router.get("/:id", getMovie);

router.put("/:id", putMovie);

router.delete("/:id", deleteMovie);

export default router;
