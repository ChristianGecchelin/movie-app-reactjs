import { Link } from "react-router-dom";
const GenreComponent = ({ genre }) => {
  return (
    <li className="genre-container">
      <Link to={`/genre/movie/list/${genre.id}`}>
        <h2 className="genreName">{genre.name}</h2>
      </Link>
    </li>
  );
};

export { GenreComponent };
