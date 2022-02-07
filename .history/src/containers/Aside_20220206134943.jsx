import { useEffect, useState } from "react";
import { GenreComponent } from "../components/GenreComponent";
import { getApi } from "../utils/api";
const Aside = () => {
  const [genresList, setGenresList] = useState([]);
  useEffect(() => {
    const genresURL = "/genre/movie/list";
    getApi(genresURL).then((data) => {
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
