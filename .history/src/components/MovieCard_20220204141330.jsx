const MovieCard = ({ movie }) => {
  return <li key={movie.id}>{movie.title} </li>;
};

export { MovieCard };
