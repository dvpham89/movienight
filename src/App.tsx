import React, { useEffect, useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import Header from "./component/Header";
import MovieList from "./component/MovieList";
import { getTrendingMovies } from "./services/MovieService";
import Movie from "./models/Movie";

function App() {
  const [movieList, setMovieList] = useState<Movie[]>([]);

  useEffect(() => {
    getTrendingMovies().then((res) => {
      setMovieList(res.results);
    });
  }, []);

  return (
    <div className="App">
      <Header />
      <MovieList movieList={movieList} />
    </div>
  );
}

export default App;
