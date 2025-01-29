import { addMovie, deleteMovieById, editMovieById, getAllMovies, getMovieById } from "../services/movies.js";


export async function getAllMoviesController(req, res) {
    const movies = await getAllMovies();

    res.status(200).json({
      message: 'Successfully found movies',
      data: movies
    });
};

export async function getMovieByIdController(req, res) {
    const { id } = req.params;
    const movie = await getMovieById(id);

    res.status(200).json({
        message: `Successfully found a movie by id ${id}`,
        data: movie
    });
}

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

export async function editMovieByIdController(req, res, next) {
    const { id } = req.params.id;
    const updateData = req.body;
    const result = await editMovieById(id, updateData);
    res.status(201).json({
        status: 201,
        message: 'Movie detail is edited successfully!',
        data: result
    });
}

export async function deleteMovieByIdController(req, res) {
    const { id } = req.params.id;
    const result = await deleteMovieById(id);
    res.status(200).json({
        status: 200,
        message: 'Movie is deleted successfully!',
        data: result
    });
}