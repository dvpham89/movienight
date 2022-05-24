import { useEffect, useState } from "react";
import MovieModel from "../models/MovieModel";
import { getMovieByTitle, getTrendingMovies } from "../services/MovieService";
import "./Main.css";
import MovieList from "./MovieList";
import SearchForm from "./SearchForm";

const Main = () => {
  const [movieList, setMovieList] = useState<MovieModel[]>([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    if (searchTerm) {
      getMovieByTitle(searchTerm).then((res) => {
        setMovieList(res.results);
      });
    } else {
      getTrendingMovies().then((res) => {
        setMovieList(res.results);
      });
    }
  }, [searchTerm]);

  const updatedSearchTerm = (query: string): void => {
    setSearchTerm(query);
  };

  return (
    <div className="Main">
      <div>
        <SearchForm updateSearchTerm={updatedSearchTerm} />
      </div>
      <MovieList movieList={movieList} />
    </div>
  );
};

export default Main;
