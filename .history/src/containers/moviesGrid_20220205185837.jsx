import { useEffect, useState } from "react";
import { MovieCard } from "../components/MovieCard";
import "../styles/MovieGrid.scss";
const MoviesGrid = () => {
  const [movies, setMovies] = useState();
  useEffect(
    () => [
      fetch("https://api.themoviedb.org/3/discover/movie", {
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwNGY4ZGY1NTU3ZTc4YTc3OWVjZTRhZGIwMGFhNzU1YiIsInN1YiI6IjYxZmQzNmIwY2U5OTdhMDBkZDY1ZDRiMyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.iiWIOK9FNTHL2kT9JmbmynNXWbREne_hbhX5zP5ppG8",
          "Content-Type": "application/json;charset=utf-8",
        },
      })
        .then((result) => result.json())
        .then((data) => {
          movies = data.results;
          console.log(movies);
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
