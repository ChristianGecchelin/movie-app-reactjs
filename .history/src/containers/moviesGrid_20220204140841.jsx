import databaseMovies from "../resources/movies.json";

const MoviesGrid = () => {
  return (
    <main>
      <ul>
        {databaseMovies.map((movie) => (
          <li key={movie.id}>{movie.title} </li>
        ))}
      </ul>
    </main>
  );
};

export { MoviesGrid };
