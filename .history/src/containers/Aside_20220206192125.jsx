import { useEffect, useState } from "react";
import { GenreComponent } from "../components/GenreComponent";
import { getApi } from "../utils/api";
import "../styles/Aside.scss";
import { Search } from "../components/Search";
const Aside = () => {
  const [genresList, setGenresList] = useState([]);
  useEffect(() => {
    const genresURL = "/genre/movie/list";
    getApi(genresURL).then((data) => {
      setGenresList(data.genres);
    }, []);
    if (!genresList) {
      return null;
    }
 /*  const genresList = [
    {
      id: 28,
      name: "Action",
    },
    {
      id: 12,
      name: "Adventure",
    },
    {
      id: 16,
      name: "Animation",
    },
    {
      id: 35,
      name: "Comedy",
    },
    {
      id: 80,
      name: "Crime",
    },
    {
      id: 99,
      name: "Documentary",
    },
    {
      id: 18,
      name: "Drama",
    },
    {
      id: 10751,
      name: "Family",
    },
    {
      id: 14,
      name: "Fantasy",
    },
    {
      id: 36,
      name: "History",
    },
    {
      id: 27,
      name: "Horror",
    },
    {
      id: 10402,
      name: "Music",
    },
    {
      id: 9648,
      name: "Mystery",
    },
    {
      id: 10749,
      name: "Romance",
    },
    {
      id: 878,
      name: "Science Fiction",
    },
    {
      id: 10770,
      name: "TV Movie",
    },
    {
      id: 53,
      name: "Thriller",
    },
    {
      id: 10752,
      name: "War",
    },
    {
      id: 37,
      name: "Western",
    },
  ]; */
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
