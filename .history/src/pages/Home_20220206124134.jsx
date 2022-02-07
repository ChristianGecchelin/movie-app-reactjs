import { Search } from "../components/Search";
import { Aside } from "../containers/Aside";
import { MoviesGrid } from "../containers/MoviesGrid";

const Home = () => {
  return (
    <>
      <Search />
      <Aside />
      <MoviesGrid />
    </>
  );
};

export { Home };
