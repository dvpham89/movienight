import { useContext } from "react";
import { Link } from "react-router-dom";
import WatchListContext from "../context/WatchListContext";
import MovieModel from "../models/MovieModel";
import "./Movie.css";
import Stars from "./Stars";

interface Props {
  movie: MovieModel;
}

const Movie = ({ movie }: Props) => {
  const { addWatchList, deleteWatchList, isOnWatchList } =
    useContext(WatchListContext);

  const isWatchList: boolean = isOnWatchList(movie.id);
  return (
    <li className="Movie">
      <img
        src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`}
        alt={movie.title}
      />
      <Link to={`/details/${movie.id}`}>
        <h2>{movie.title}</h2>
      </Link>
      {isWatchList ? (
        <i
          className={`fa-solid fa-circle-minus removeWL`}
          onClick={() => deleteWatchList(movie.id)}
        >
          {" "}
          Remove from Watch List
        </i>
      ) : (
        <i
          className="fa-solid fa-circle-plus addWL"
          onClick={() => addWatchList(movie)}
        >
          {" "}
          Add to Watch List
        </i>
      )}
      <p>{movie.release_date}</p>

      <p>{movie.vote_average}</p>
      <Stars stars={movie.vote_average / 2} color={"yellow"} />
    </li>
  );
};

export default Movie;
