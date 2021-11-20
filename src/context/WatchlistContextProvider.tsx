import { ReactNode, useState } from "react";
import Movie from "../models/Movie";
import WatchlistContext from "./WatchlistContext";

interface Props {
  children: ReactNode;
}

const WatchlistContextProvider = ({ children }: Props) => {
  const [watchlist, setWatchlist] = useState<Movie[]>([]);
  const addWatchlist = (movie: Movie): void => {
    setWatchlist((prev) => [...prev, movie]);
  };

  const removeWatchlist = (id: number): void => {
    setWatchlist((prev) => {
      const index: number = prev.findIndex((item) => item.id === id);
      return [...prev.slice(0, index), ...prev.slice(index + 1)];
    });
  };
  const isWatch = (id: number): boolean =>
    watchlist.some((item) => item.id === id);

  return (
    <WatchlistContext.Provider
      value={{ watchlist, addWatchlist, removeWatchlist, isWatch }}
    >
      {children}
    </WatchlistContext.Provider>
  );
};

export default WatchlistContextProvider;
