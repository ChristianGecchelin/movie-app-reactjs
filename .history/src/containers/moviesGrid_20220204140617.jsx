import databaseMovies from "../resources/movies.json";

const MoviesGrid = () => {
  return (
    <main>
      <ul>
        {databaseMovies.map((movie) => (
          <li>{movie.title}</li>
        ))}
      </ul>
    </main>
  );
};

export { MoviesGrid };
