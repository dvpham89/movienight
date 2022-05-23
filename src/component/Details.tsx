import MovieModel from "../models/MovieModel";
import "./Details.css";

interface Props {
  movie: MovieModel;
}

const Details = ({ movie }: Props) => {
  return (
    <div className="Details">
      <img src={movie.poster_path} alt={movie.title} />
      <p>{movie.title}</p>
      <p>{movie.vote_average}</p>
      <p>{movie.overview}</p>
    </div>
  );
};

export default Details;
