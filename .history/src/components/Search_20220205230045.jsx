import { useState } from "react";
import { ImSearch } from "react-icons/im";
import "../styles/Search.scss";
const Search = () => {
  const handleSubmit = (e) => {
    const [searchText, setSearchText] = useState();
    e.preventDefault();
  };
  return (
    <div className="input-container">
      <form action="" onSubmit={handleSubmit}>
        <input type="text" name="" id="" placeholder="Bañeros3" />
        <button type="submit">
          <ImSearch className="searcher" />
        </button>
      </form>
    </div>
  );
};

export { Search };
