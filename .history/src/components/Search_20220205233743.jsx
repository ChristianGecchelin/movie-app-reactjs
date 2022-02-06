import { useEffect, useState } from "react";
import { ImSearch } from "react-icons/im";
import { useNavigate } from "react-router-dom";
import "../styles/Search.scss";
import { useQuery } from "../utils/useQuery";
const Search = () => {
  const [searchText, setSearchText] = useState("");
  const query = useQuery();
  const search = query.get("search");
  useEffect(() => {
    setSearchText(search);
  }, [search]);
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/?search=" + searchText);
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
