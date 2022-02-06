const MovieCard = ({ movie }) => {
  const imageURL = `https://image.tmdb.org/t/p/w200${movie.poster_path} `;
  return (
    <li className="card-container">
      <img src={imageURL} alt={movie.title} />
      <h2>{movie.title}</h2>
      <span>{movie.vote_average}</span>
    </li>
  );
};

export { MovieCard };
