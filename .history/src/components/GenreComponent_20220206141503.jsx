import { Link } from "react-router-dom";
const GenreComponent = ({ genre }) => {
  return (
    <li className="genre-container">
      <Link to={`/movies/${genre.id}`}>
        <h2 className="card-title">{genre.name}</h2>
      </Link>
    </li>
  );
};

export { GenreComponent };
