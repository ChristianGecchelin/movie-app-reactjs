import { useEffect } from "react";
import { MovieCard } from "../components/MovieCard";
import "../styles/MovieGrid.scss";
const MoviesGrid = () => {
  let movies = [];
  useEffect(
    () => [
      fetch("'https://api.themoviedb.org/3/discover/movie", {
        headers: {
          Authorization: "Bearer 04f8df5557e78a779ece4adb00aa755b",
          "Content-Type": "application/json;charset=utf-8",
        },
      })
        .then((result) => result.json())
        .then((data) => {
          movies = data.results;
        }),
    ],
    []
  );
  return (
    <ul className="list-container">
      {movies.map((movie) => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
    </ul>
  );
};

export { MoviesGrid };
