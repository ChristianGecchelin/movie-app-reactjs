import { MovieCard } from "../components/MovieCard";
import databaseMovies from "../resources/movies.json";

const MoviesGrid = () => {
  return (
    <main>
      <ul>
        {databaseMovies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </ul>
    </main>
  );
};

export { MoviesGrid };
