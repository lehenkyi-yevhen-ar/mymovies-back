import createHttpError from "http-errors";
import { Movie } from "../db/models/movie.js";


export const getAllMovies = async () => {
    const movies = await Movie.find();
    if (!movies)
        throw createHttpError(404, 'No movies found');
    return movies;
};

export const addMovie = async (movie) => {
    const result = await Movie.create(movie);
    if (!result)
        throw createHttpError(500, 'Failed, try again later');

    return result;
};

export const getMovieById