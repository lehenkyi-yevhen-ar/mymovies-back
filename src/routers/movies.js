import express, { Router } from 'express';
import { validateBody } from '../middlewares/validateBody.js';
import { addMovieController, getAllMoviesController } from '../controllers.js/movies.js';
import { addMovieSchema } from '../validation/movies.js';
import { ctrlWrapper } from '../utils/ctrlWrapper.js';



const jsonParser = express.json();

const router = Router();

router.get('/', ctrlWrapper(getAllMoviesController));

router.get('/:id', ctrlWrapper());

router.post('/', jsonParser, validateBody(addMovieSchema), ctrlWrapper(addMovieController));

router.patch('/:id', jsonParser, validateBody(), ctrlWrapper());

router.delete('/:id', ctrlWrapper());

export default router;