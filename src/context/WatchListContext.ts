import { createContext, VoidFunctionComponent } from "react";
import MovieModel from "../models/MovieModel";

interface WatchListContextModel {
  watchList: MovieModel[];
  addWatchList: (m: MovieModel) => void;
  deleteWatchList: (id: number) => void;
  isOnWatchList: (id: number) => boolean;
}

const defaultValue: WatchListContextModel = {
  watchList: [],
  addWatchList: () => {},
  deleteWatchList: () => {},
  isOnWatchList: () => false,
};

const WatchListContext = createContext(defaultValue);

export default WatchListContext;
