import { ReactNode, useState } from "react";
import MovieModel from "../models/MovieModel";
import WatchListContext from "./WatchListContext";

interface Props {
  children: ReactNode;
}

const WatchListContextProvider = ({ children }: Props) => {
  const [watchList, setWatchList] = useState<MovieModel[]>([]);

  const addWatchList = (movie: MovieModel): void => {
    setWatchList((prev) => {
      return [...prev, movie];
    });
  };

  const deleteWatchList = (id: number): void => {
    setWatchList((prev) => {
      const index: number = prev.findIndex((movie) => movie.id === id);
      return [...prev.slice(0, index), ...prev.slice(index + 1)];
    });
  };

  return (
    <WatchListContext.Provider
      value={{ watchList, addWatchList, deleteWatchList }}
    >
      {children}
    </WatchListContext.Provider>
  );
};

export default WatchListContextProvider;
