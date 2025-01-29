import express, { Router } from 'express';
import { validateBody } from '../middlewares/validateBody.js';
import { addMovieController, deleteMovieByIdController, editMovieByIdController, getAllMoviesController, getMovieByIdController } from '../controllers.js/movies.js';
import { addMovieSchema, editMovieSchema } from '../validation/movies.js';
import { ctrlWrapper } from '../utils/ctrlWrapper.js';



const jsonParser = express.json();

const router = Router();

router.get('/', ctrlWrapper(getAllMoviesController));

router.get('/:id', ctrlWrapper(getMovieByIdController));

router.post('/', jsonParser, validateBody(addMovieSchema), ctrlWrapper(addMovieController));

router.patch('/:id', jsonParser, validateBody(editMovieSchema), ctrlWrapper(editMovieByIdController));

router.delete('/:id', ctrlWrapper(deleteMovieByIdController));

export default router;