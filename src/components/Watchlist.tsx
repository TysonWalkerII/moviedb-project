import { useContext } from "react";
import WatchlistContext from "../context/WatchlistContext";
import MovieResults from "./MovieResults";
import "./Watchlist.css";

const Watchlist = () => {
  const { watchlist } = useContext(WatchlistContext);
  return (
    <div className="Watchlist">
      <MovieResults movies={watchlist} />
    </div>
  );
};

export default Watchlist;
