import databaseMovies from "../resources/movies.json";

const MoviesGrid = () => {
  return (
    <main>
      <ul>
        {databaseMovies.map((movie) => (
          
        ))}
      </ul>
    </main>
  );
};

export { MoviesGrid };
