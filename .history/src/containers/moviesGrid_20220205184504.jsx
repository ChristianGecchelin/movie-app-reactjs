import { useEffect } from "react";
import { MovieCard } from "../components/MovieCard";
import databaseMovies from "../resources/movies.json";
import "../styles/MovieGrid.scss";
const MoviesGrid = () => {
  useEffect(() => [
    fetch("'https://api.themoviedb.org/3/", {
      headers: {
        Authorization: "Bearer 04f8df5557e78a779ece4adb00aa755b",
        "Content-Type": "application/json;charset=utf-8",
      },
    }),
  ]);
  return (
    <ul className="list-container">
      {databaseMovies.map((movie) => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
    </ul>
  );
};

export { MoviesGrid };
