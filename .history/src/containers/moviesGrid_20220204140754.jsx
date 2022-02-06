import databaseMovies from "../resources/movies.json";

const MoviesGrid = () => {
  return (
    <main>
      <ul>
        {databaseMovies.map((movie) => (
          <li>{movie.title} {key:"movie.id"}</li>
        ))}
      </ul>
    </main>
  );
};

export { MoviesGrid };
