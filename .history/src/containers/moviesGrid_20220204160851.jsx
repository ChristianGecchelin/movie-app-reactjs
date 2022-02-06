import { MovieCard } from "../components/MovieCard";
import databaseMovies from "../resources/movies.json";
import "../styles/MovieGrid.scss";
const MoviesGrid = () => {
  return (
    <main>
      <ul className="list-container">
        {databaseMovies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </ul>
    </main>
  );
};

export { MoviesGrid };
