import { Search } from "../components/Search";
import { MoviesGrid } from "../containers/MoviesGrid";

const Home = () => {
  return (
    <>
      <Search />
      <MoviesGrid />
    </>
  );
};

export { Home };
