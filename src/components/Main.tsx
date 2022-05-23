import { useEffect, useState } from "react";
import MovieModel from "../models/MovieModel";
import { getTrendingMovies } from "../services/MovieService";
import "./Main.css";
import MovieList from "./MovieList";

const Main = () => {
  const [movieList, setMovieList] = useState<MovieModel[]>([]);
  const [details, setDetails] = useState<MovieModel>();

  useEffect(() => {
    getTrendingMovies().then((res) => {
      setMovieList(res.results);
    });
  }, []);

  return (
    <div className="Main">
      <MovieList movieList={movieList} />
    </div>
  );
};

export default Main;
