import Movie from "../models/Movie";
import MovieObject from "./MovieObject";
import "./MovieResults.css";

interface Props {
  movies: Movie[];
}

const MovieResults = ({ movies }: Props) => {
  return (
    <div className="MovieResults">
      <ul>
        {movies.map((item) => (
          <MovieObject key={item.id} movie={item} />
        ))}
      </ul>
    </div>
  );
};

export default MovieResults;
