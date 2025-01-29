import Joi from "joi";


export const addMovieSchema = Joi.object({
    title: Joi.string().required(),
    original_title: Joi.string().required(),
    production_countries: Joi.array()
        .items(
            Joi.object({
                iso_3166_1: Joi.string(),
                name: Joi.string().min(2).max(40)
            })
        ),
    release_date: Joi.date().required(),
    runtime: Joi.number().required(),
    overview: Joi.string(),
    genres: Joi.array().items(Joi.string()),
    cast: Joi.array()
        .items(
            Joi.object({
                name: Joi.string(),
                character: Joi.string().min(2).max(40),
                profile_path: Joi.string()
            })
        ),
    isFavorite: Joi.boolean(),
    planToWatch: Joi.boolean()
});

export const editMovieSchema = Joi.object({
        title: Joi.string(),
    original_title: Joi.string(),
    production_countries: Joi.array()
        .items(
            Joi.object({
                iso_3166_1: Joi.string(),
                name: Joi.string().min(2).max(40)
            })
        ),
    release_date: Joi.date(),
    runtime: Joi.number(),
    overview: Joi.string(),
    genres: Joi.array().items(Joi.string()),
    cast: Joi.array()
        .items(
            Joi.object({
                name: Joi.string(),
                character: Joi.string().min(2).max(40),
                profile_path: Joi.string()
            })
        ),
    isFavorite: Joi.boolean(),
    planToWatch: Joi.boolean()
});