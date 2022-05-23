import { ReactNode, useState } from "react";
import Movie from "../models/Movie";
import WatchListContext from "./WatchListContext";

interface Props {
  children: ReactNode;
}

const WatchListContextProvider = ({ children }: Props) => {
  const [watchList, setWatchList] = useState<Movie[]>([]);

  return (
    <WatchListContext.Provider value={{ watchList }}>
      {children}
    </WatchListContext.Provider>
  );
};

export default WatchListContextProvider;
