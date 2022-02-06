const MovieCard = ({ movie }) => {
  const imageURL = "https://image.tmdb.org/t/p/w320" + movie.poster_path;
  return (
    <li>
      <img src={imageURL} alt={movie.title} />
      {movie.title}
    </li>
  );
};

export { MovieCard };
