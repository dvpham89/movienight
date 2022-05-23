import Movie from "../models/Movie";
import Movie from "./Movie";
import "./MovieList.css";

interface Props {
  movieList: Movie[];
}

const MovieList = ({ movieList }: Props) => {
  return (
    <ul className="MovieList">
      {movieList.map((movie) => (
        <Movie key={movie.id} movie={movie} />
      ))}
    </ul>
  );
};

export default MovieList;
