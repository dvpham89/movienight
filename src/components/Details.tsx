import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import MovieModel from "../models/MovieModel";
import { getMovieById } from "../services/MovieService";
import "./Details.css";

const Details = () => {
  const id: string = useParams().id!;
  const [movie, setMovie] = useState<MovieModel>();

  useEffect(() => {
    getMovieById(+id).then((res) => {
      console.log(res);
      setMovie(res);
    });
  }, [id]);

  return (
    <div className="Details">
      <img
        className="poster"
        src={`https://image.tmdb.org/t/p/w500${movie?.poster_path}`}
        alt={movie?.title}
      />
      <p>{movie?.title}</p>
      <p>{movie?.vote_average}</p>
      <p>{movie?.overview}</p>
      <img
        className="back-drop"
        src={`https://image.tmdb.org/t/p/original${movie?.backdrop_path}`}
        alt={movie?.title}
      />
    </div>
  );
};

export default Details;
