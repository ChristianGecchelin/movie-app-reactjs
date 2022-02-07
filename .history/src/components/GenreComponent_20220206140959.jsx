import { Link } from "react-router-dom";
import "../styles/GenreComponent.scss";
const GenreComponent = ({ genre }) => {
  return (
    <li className="card-container">
      <Link to={`/movies/${genre.id}`}>
        <h2 className="card-title">{genre.name}</h2>
      </Link>
    </li>
  );
};

export { GenreComponent };
