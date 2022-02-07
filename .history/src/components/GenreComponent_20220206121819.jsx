const GenreComponent = () => {
  return (
    <li className="card-container">
      <Link to={`/movies/${movie.id}`}>
        <h2 className="card-title">{movie.title}</h2>
      </Link>
    </li>
  );
};

export { GenreComponent };
