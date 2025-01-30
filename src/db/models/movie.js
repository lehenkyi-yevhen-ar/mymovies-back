import { mongoose } from 'mongoose';

const castSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    character: { type: String, required: true },
    profile_path: { type: String }
  },
  {_id: false}
);

const movieSchema = new mongoose.Schema(
  {
    id: {
      type: Number,
    },
    title: {
      type: String,
      required: true
    },
    poster_path: {
      type: String
    },
    original_title: {
      type: String,
      required: true
    },
    production_countries: [
    {
      iso_3166_1: { type: String},
      name: { type: String }
    }
  ],
    release_date: {
      type: Date,
      required: true
    },
    runtime: {
      type: Number,
      required: true
    },
    overview: {
      type: String,
    },
    genres: {
      type: [String]
    },
    cast: {
      type: [castSchema]
    },
    isFavorite: {
      type: Boolean,
      default: false
    },
    planToWatch: {
      type: Boolean,
      default: false
    }
  },
  {
    timestamps: true
  }
);

export const Movie = mongoose.model('Movie', movieSchema);
