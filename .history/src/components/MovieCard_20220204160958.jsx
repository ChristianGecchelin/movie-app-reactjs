const MovieCard = ({ movie }) => {
  const imageURL = `https://image.tmdb.org/t/p/w300${movie.poster_path} `;
  return (
    <li className="card-container">
      <img src={imageURL} alt={movie.title} />
      <h2>{movie.title}</h2>
      <p>{movie.overview}</p>
    </li>
  );
};

export { MovieCard };
