const Aside = () => {
  return (
    <aside>
      <li className="card-container">
        <Link to={`/movies/${movie.id}`}>
          <h2 className="card-title">{movie.title}</h2>
        </Link>
      </li>
    </aside>
  );
};

export { Aside };
