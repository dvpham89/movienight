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
      setMovie(res.movie);
    });
  }, [id]);

  return (
    <div className="Details">
      <img src={movie?.poster_path} alt={movie?.title} />
      <p>{movie?.title}</p>
      <p>{movie?.vote_average}</p>
      <p>{movie?.overview}</p>
    </div>
  );
};

export default Details;
