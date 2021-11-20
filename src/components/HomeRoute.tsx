import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Movie from "../models/Movie";
import {
  getFilteredMovies,
  getSearchedMovies,
  getTrendingMovies,
} from "../services/MovieService";
import "./HomeRoute.css";
import MovieResults from "./MovieResults";

const HomeRoute = () => {
  const [movies, setMovies] = useState<Movie[]>([]);
  const cert: string | null = new URLSearchParams(useLocation().search).get(
    "certInput"
  );
  const genre: string | null = new URLSearchParams(useLocation().search).get(
    "genreInput"
  );
  const voteGreat: string | null = new URLSearchParams(
    useLocation().search
  ).get("voteGreat");

  const searchTerm: string | null = new URLSearchParams(
    useLocation().search
  ).get("searchTerm");

  useEffect(() => {
    if (cert || genre || voteGreat) {
      getFilteredMovies(cert, genre, voteGreat).then((response) => {
        setMovies(response.results);
      });
    } else if (searchTerm) {
      getSearchedMovies(searchTerm).then((response) => {
        setMovies(response.results);
      });
    } else {
      getTrendingMovies().then((response) => {
        setMovies(response.results);
      });
    }
  }, [cert, genre, voteGreat, searchTerm]);
  return (
    <div className="HomeRoute">
      <h2>Movies</h2>
      <MovieResults movies={movies} />
    </div>
  );
};

export default HomeRoute;
