import { useState } from "react";
import { ImSearch } from "react-icons/im";
import { useNavigate } from "react-router-dom";
import "../styles/Search.scss";
const Search = () => {
  const [searchText, setSearchText] = useState("");
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/?search=" + searchText);
    setSearchText("");
  };
  return (
    <div className="input-container">
      <form action="" onSubmit={handleSubmit}>
        <input
          type="text"
          name=""
          id=""
          placeholder="Bañeros3"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />
        <button type="submit">
          <ImSearch className="searcher" />
        </button>
      </form>
    </div>
  );
};

export { Search };
