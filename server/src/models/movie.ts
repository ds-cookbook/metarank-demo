/* eslint-disable new-cap */
import { Static, Type } from '@sinclair/typebox';

const personModel = Type.Object({
  gender: Type.Number(),
  id: Type.Number(),
  popularity: Type.Number(),
  name: Type.String(),
});

export const MovieModel = Type.Object({
  budget: Type.Number(),
  director: personModel,
  genres: Type.Array(Type.Object({
    id: Type.Number(),
    name: Type.String(),
  })),
  id: Type.Number(),
  overview: Type.String(),
  releaseDate: Type.Number(),
  revenue: Type.Number(),
  runtime: Type.Number(),
  tags: Type.Array(Type.String()),
  title: Type.String(),
  tmdbId: Type.Number(),
  tmdbPopularity: Type.Number(),
  tmdbVoteAverage: Type.Number(),
  tmdbVoteCount: Type.Number(),
  topActors: Type.Array(personModel),
  writer: Type.Union([Type.Null(), Type.Optional(personModel)]),
  poster: Type.String(),
  personalization_score: Type.Number(),
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  features: Type.Any(),
});

export const MovieResponse = Type.Object({
  tag: Type.String(),
  movies: Type.Array(MovieModel),
  personalized_movies: Type.Array(MovieModel),
  id: Type.String(),
});

export const MovieModelStorage = Type.Array(MovieModel);

export type MovieDataStorageModelType = Static<typeof MovieModelStorage>;

export type MovieType = Static<typeof MovieModel>;

export type TopTagsType = string[];

export type MovieResponseType = Static<typeof MovieResponse>;

export default {
  MovieModelStorage,
  MovieModel,
};
