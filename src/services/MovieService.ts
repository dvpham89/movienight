import axios from "axios";
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
