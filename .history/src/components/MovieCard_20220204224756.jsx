import { Link } from "react-router-dom";

const MovieCard = ({ movie }) => {
  const imageURL = `https://image.tmdb.org/t/p/w200${movie.poster_path} `;
  return (
    <li className="card-container">
      <Link>
      <img src={imageURL} alt={movie.title} />
      <h2 className="card-title">{movie.title}</h2>
      <span
        className={
          movie.vote_average > 7
            ? "vote average-vote-possitive"
            : "vote average-vote-negative"
        }
      >
        {movie.vote_average}
      </span>
    </li></Link>
  );
};

export { MovieCard };
