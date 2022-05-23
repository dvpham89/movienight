import axios from "axios";
import MovieModel from "../models/MovieModel";
import TrendingMoviesResponse from "../models/TrendingMoviesResponse";

const apiKey: string = process.env.REACT_APP_GIPHY_API_KEY || "";

export const getTrendingMovies = (): Promise<TrendingMoviesResponse> => {
  return (
    axios
      .get(`https://api.themoviedb.org/3/discover/movie`, {
        params: { api_key: apiKey },
      })
      // always return res.data with axios
      .then((res) => res.data)
  );
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
