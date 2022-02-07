import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { GenreComponent } from "../components/GenreComponent";
import { getApi } from "../utils/api";
import { useQuery } from "../utils/useQuery";
const Aside = () => {
  const [genresList, setGenresList] = useState([]);
  useEffect(() => {
    const genresURL = "/genre/movie/list";
    getApi(genresURL).then((data) => {
      console.log(data);
      setGenresList(data.genres);
    }, []);
    if (!genresList) {
      return;
    }
    return (
      <aside>
        <ul className="list-container">
          {genresList.map((genre) => (
            <GenreComponent key={genre.id} genre={genre} />
          ))}
        </ul>
      </aside>
    );
  });
};

export { Aside };
