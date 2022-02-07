import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { GenreComponent } from "../components/GenreComponent";
import { getApi } from "../utils/api";
import { useQuery } from "../utils/useQuery";
const Aside = () => {
  const [genres, setGenres] = useState([]);
  useEffect(() => {
    const genresList = `/genre/movie/list?=`;
    getApi(genresList).then((data) => {
      setGenres(data.results);
    }, []);
    return (
      <aside>
        <ul className="list-container">
          {genres.map((genre) => (
            <GenreComponent key={genre.id} genre={genre} />
          ))}
        </ul>
      </aside>
    );
  });
};

export { Aside };
