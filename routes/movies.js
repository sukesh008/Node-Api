
import express from "express"
import { deleteMovie, getMovies, postMovie, putMovie, } from "../Controllers/movies.js";

const router =express.Router();

// CRUD - operations

// Create
router.post('/',postMovie)

// Read
router.get('/',getMovies)

// update
router.put('/:id',putMovie)

// delete
router.delete('/:id',deleteMovie)

export default router