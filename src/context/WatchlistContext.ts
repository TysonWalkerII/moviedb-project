import { createContext } from "react";
import Movie from "../models/Movie";

interface WatchlistContextModel {
  watchlist: Movie[];
  addWatchlist: (movie: Movie) => void;
  removeWatchlist: (id: number) => void;
  isWatch: (id: number) => boolean;
}

const defaultValues: WatchlistContextModel = {
  watchlist: [],
  addWatchlist: () => {},
  removeWatchlist: () => {},
  isWatch: () => false,
};

const WatchlistContext = createContext(defaultValues);

export default WatchlistContext;
