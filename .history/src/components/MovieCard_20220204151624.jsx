const MovieCard = ({ movie }) => {
  const imageURL = "https://image.tmdb.org/t/p/w320" + movie.poster_path;
  return (
    <li>
      <img src={imageURL} alt={movie.title} />
      <h2>{movie.title}</h2>
      <p>{movie.overview}</p>
    </li>
  );
};

export { MovieCard };
