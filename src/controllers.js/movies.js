import { addMovie, getAllMovies } from "../services/movies.js";


export async function getAllMoviesController(req, res) {
    const movies = await getAllMovies();

    res.status(200).json({
      message: 'Successfully found movies',
      data: movies
    });
};

export async function addMovieController(req, res) {
    const movie = {
        title: req.body.title,
        original_title: req.body.original_title,
        production_countries: req.body.production_countries,
        release_date: req.body.release_date,
        runtime: req.body.runtime,
        overview: req.body.overview,
        genres: req.body.genres,
        cast: req.body.cast,
        isFavorite: false,
        planToWatch: false
    };

    const result = await addMovie(movie);
     res.status(201).json({
    status: 201,
    message: 'Movie is successfully added!',
    data: result,
  });
}