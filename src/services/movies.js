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

export const getMovieById = async (id) => {
    const movie = await Movie.findById(id);
    if (!movie)
        throw createHttpError(404, 'Movie is not found');
    return movie;
};

export const editMovieById = async (id, updateData) => {
    const result = await Movie.findOneAndUpdate({id: id}, updateData, {new: true});
    if (!result)
        throw createHttpError(404, 'Movie is not found');
    return result;
};

export const deleteMovieById = async (id) => {
    const result = await Movie.findOneAndDelete(id);
    if (!result)
        throw createHttpError(404, 'Movie is not found');
    return result;
};
