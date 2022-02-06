import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getApi } from "../utils/api";
import { Spinner } from "../components/Spinner";

const MovieDetail = () => {
  const { movieId } = useParams();
  const [isLoading, setIsLoading] = useState(true);
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    getApi("/movie/" + movieId).then((data) => {
      setMovie(data);
      setIsLoading(false);
    });
  }, [movieId]);
  if (!!isLoading) {
    return <Spinner />;
  }
  if (!movie) {
    return null;
  }

  const imageURL = `https://image.tmdb.org/t/p/w400${movie.poster_path} `;
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
