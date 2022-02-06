import { useEffect, useState } from "react";
import { MovieCard } from "../components/MovieCard";
import { Spinner } from "../components/Spinner";
import "../styles/MovieGrid.scss";
import { getApi } from "../utils/api";
const MoviesGrid = () => {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(
    () => [
      getApi("/discover/movie").then((data) => {
        setMovies(data.results);
        setIsLoading(false);
      }),
    ],
    []
  );
  if (!!isLoading) {
    return <Spinner />;
  }
  return (
    <ul className="list-container">
      {movies.map((movie) => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
    </ul>
  );
};

export { MoviesGrid };
