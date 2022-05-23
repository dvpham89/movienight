import { createContext } from "react";
import Movie from "../models/Movie";

interface WatchListContextModel {
  watchList: Movie[];
}

const defaultValue: WatchListContextModel = {
  watchList: [],
};

const WatchListContext = createContext(defaultValue);

export default WatchListContext;
