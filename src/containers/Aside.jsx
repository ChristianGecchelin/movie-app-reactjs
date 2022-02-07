import { useEffect, useState } from "react";
import { GenreComponent } from "../components/GenreComponent";
import { getApi } from "../utils/api";
import "../styles/Aside.scss";
import { Search } from "../components/Search";
const Aside = () => {
  const [genresList, setGenresList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const genresURL = "/genre/movie/list";
    getApi(genresURL).then((data) => {
      setGenresList(data.genres);
      setIsLoading(false);
    });
  }, []);
  if (!!isLoading) {
    return null;
  }

  return (
    <aside>
      <Search />
      <ul className="genresList-container">
        {genresList.map((genre) => (
          <GenreComponent key={genre.id} genre={genre} />
        ))}
      </ul>
    </aside>
  );
};

export { Aside };
