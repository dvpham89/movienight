import { useEffect, useState } from "react";
import MovieModel from "../models/MovieModel";
import {
  getMovieByTitle,
  getMoviesByRating,
  getTrendingMovies,
} from "../services/MovieService";
import "./Main.css";
import MovieList from "./MovieList";
import SearchForm from "./SearchForm";

const Main = () => {
  const [movieList, setMovieList] = useState<MovieModel[]>([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [searchedRating, setSearchedRating] = useState("");
  const [date, setDate] = useState("");

  useEffect(() => {
    if (searchTerm) {
      getMovieByTitle(searchTerm).then((res) => {
        setMovieList(res.results);
      });
    } else if (searchedRating || date) {
      getMoviesByRating(searchedRating, date).then((res) => {
        setMovieList(res.results);
      });
    } else {
      getTrendingMovies().then((res) => {
        setMovieList(res.results);
      });
    }
  }, [searchTerm, searchedRating, date]);

  const updatedSearchTerm = (query: string): void => {
    setSearchTerm(query);
  };
  const updatedSearchRating = (query: string): void => {
    setSearchedRating(query);
  };
  const updatedSearchDate = (query: string): void => {
    setDate(query);
  };

  return (
    <div className="Main">
      <div>
        <SearchForm
          updateSearchTerm={updatedSearchTerm}
          updateSearchRating={updatedSearchRating}
          updateSearchDate={updatedSearchDate}
        />
      </div>
      <MovieList movieList={movieList} />
    </div>
  );
};

export default Main;
