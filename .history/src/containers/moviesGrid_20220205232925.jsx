import { useEffect, useState } from "react";
import { MovieCard } from "../components/MovieCard";
import { Spinner } from "../components/Spinner";
import "../styles/MovieGrid.scss";
import { getApi } from "../utils/api";
import { useQuery } from "../utils/useQuery";
const MoviesGrid = () => {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const query = useQuery();
  const search = query.get("search");
 
  useEffect(
    () => [
      const searchURL=search? `/search/movie?=query= ${search}`:
      getApi("/discover/movie").then((data) => {
        setMovies(data.results);
        setIsLoading(false);
      }),
    ],
    [search]
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
