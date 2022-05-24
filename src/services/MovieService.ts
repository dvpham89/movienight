import axios from "axios";
import MovieModel from "../models/MovieModel";
import MoviesResponse from "../models/MoviesResponse";

const apiKey: string = process.env.REACT_APP_GIPHY_API_KEY || "";

export const getTrendingMovies = (): Promise<MoviesResponse> => {
  return axios
    .get(
      `
    https://api.themoviedb.org/3/trending/movie/week`,
      {
        params: { api_key: apiKey },
      }
    )
    .then((res) => res.data);
};

export const getMovieById = (id: number): Promise<MovieModel> => {
  return axios
    .get(`https://api.themoviedb.org/3/movie/${encodeURIComponent(id)}`, {
      params: {
        api_key: apiKey,
      },
    })
    .then((res) => res.data);
};

export const getMovieByTitle = (
  searchTerm: string
): Promise<MoviesResponse> => {
  return axios
    .get(`https://api.themoviedb.org/3/search/movie`, {
      params: {
        api_key: apiKey,
        query: encodeURIComponent(searchTerm),
      },
    })
    .then((res) => {
      console.log(res);

      return res.data;
    });
};