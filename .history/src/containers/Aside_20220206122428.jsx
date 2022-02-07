import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useQuery } from "../utils/useQuery";
const Aside = () => {
  const [genres, setGenres] = useState([]);
  const query = useQuery();
  const search = query.get("search");
  useEffect(() => {
    const searchURL = search ? `/search/movie?query= ${search}` : null;
    getApi(searchURL).then((data) => {
      setGenres(data.results);
    }, []);
    return (
      <aside>
        <ul className="list-container">
          {genres.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </ul>
      </aside>
    );
  });
};

export { Aside };
