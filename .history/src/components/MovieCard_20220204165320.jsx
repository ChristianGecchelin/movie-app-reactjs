const MovieCard = ({ movie }) => {
  const imageURL = `https://image.tmdb.org/t/p/w200${movie.poster_path} `;
  return (
    <li className="card-container">
      <img src={imageURL} alt={movie.title}>
        <span
          className={
            movie.vote_average > 7
              ? "vote average-vote-possitive"
              : "vote average-vote-negative"
          }
        >
          {movie.vote_average}
        </span>
      </img>
      <h2>{movie.title}</h2>
    </li>
  );
};

export { MovieCard };
