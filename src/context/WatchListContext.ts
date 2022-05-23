import { createContext, VoidFunctionComponent } from "react";
import MovieModel from "../models/MovieModel";

interface WatchListContextModel {
  watchList: MovieModel[];
  addWatchList: (m: MovieModel) => void;
  deleteWatchList: (id: number) => void;
}

const defaultValue: WatchListContextModel = {
  watchList: [],
  addWatchList: () => {},
  deleteWatchList: () => {},
};

const WatchListContext = createContext(defaultValue);

export default WatchListContext;
