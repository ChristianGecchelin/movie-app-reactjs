import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getApi } from "../utils/api";

const MovieDetail = () => {
  const { movieId } = useParams();
  const imageURL = `https://image.tmdb.org/t/p/w400${movie.poster_path} `;
  const [movies, setMovies] = useState([]);
  useEffect(
    () => [
      getApi("/discover/movie/" + movieId).then((data) => {
        setMovies(data.results);
      }),
    ],
    []
  );

  return (
    <section className="section-container">
      <div className="img-container">
        <img src={imageURL} alt={movie.title} />
      </div>
      <div className="text-container">
        <h3>{movie.title}</h3>
        <p>{movie.genres.map((genre) => genre.name).join(" - ")}</p>
        <p>{movie.overview}</p>
      </div>
    </section>
  );
};

export { MovieDetail };
