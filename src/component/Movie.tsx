import MovieModel from "../models/MovieModel";
import "./Movie.css";

interface Props {
  movie: MovieModel;
}

const Movie = ({ movie }: Props) => {
  return (
    <div className="Movie">
      <img src={movie.poster_path} alt={movie.title} />
      <p>{movie.title}</p>
      <p>{movie.vote_average}</p>
    </div>
  );
};

export default Movie;
