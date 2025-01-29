import moviesRouter from './movies.js';
import { Router } from "express";


const router = Router();

router.use('/movies', moviesRouter);

export default router;
