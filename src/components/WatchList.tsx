import { useContext } from "react";
import WatchListContext from "../context/WatchListContext";
import MovieModel from "../models/MovieModel";
import Movie from "./Movie";
import "./WatchList.css";

const WatchList = () => {
  const { watchList } = useContext(WatchListContext);

  return (
    <div className="WatchList">
      <h2>Watch List</h2>
      <ul>
        {watchList.map((wL) => (
          <Movie key={wL.id} movie={wL} />
        ))}
      </ul>
    </div>
  );
};

export default WatchList;
