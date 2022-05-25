import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import WatchListContext from "../context/WatchListContext";
import MovieModel from "../models/MovieModel";
import { getMovieById } from "../services/MovieService";
import "./Details.css";
import Stars from "./Stars";

const Details = () => {
  const id: string = useParams().id!;
  const [movie, setMovie] = useState<MovieModel>();
  const { addWatchList, deleteWatchList, isOnWatchList } =
    useContext(WatchListContext);

  const isWatchList: boolean = isOnWatchList(movie?.id!);
  useEffect(() => {
    getMovieById(+id).then((res) => {
      console.log(res);
      setMovie(res);
    });
  }, [id]);

  return (
    <>
      {movie ? (
        <div className="Details">
          <img
            className="poster"
            src={`https://image.tmdb.org/t/p/w500${movie?.poster_path}`}
            alt={movie?.title}
          />
          <h2>{movie?.title}</h2>
          <p>{movie?.overview}</p>
          <Stars stars={movie?.vote_average / 2} color={"yellow"} />
          <p>
            {movie?.vote_average / 2} Rating ({movie?.vote_count} votes)
          </p>
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
          <img
            className="back-drop"
            src={`https://image.tmdb.org/t/p/original${movie?.backdrop_path}`}
            alt={movie?.title}
          />
        </div>
      ) : (
        <p>Loading</p>
      )}
    </>
  );
};

export default Details;
