import MovieModel from "../models/MovieModel";
import "./Movie.css";

interface Props {
  movie: MovieModel;
}

const Movie = ({ movie }: Props) => {
  return (
    <li className="Movie">
      <img
        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
        alt={movie.title}
      />
      <p>{movie.title}</p>
      <p>{movie.vote_average}</p>
    </li>
  );
};

export default Movie;
