import { IoSearch } from "react-icons/io5";
import { useState } from "react";
import { useQuery } from "../utils/useQuery";
import { createQueryObject } from "../helper/helper.js";
import styles from "./Search.module.css";

function Search() {
  const [search, setSearch] = useState("");
  const [, setQuery] = useQuery();

  const runSearch = () => {
    setQuery((prev) =>
      createQueryObject(prev, { search: search.toLowerCase().trim() })
    );
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      runSearch();
    }
  };

  return (
    <div className={styles.searchContainer}>
      <input
        type="text"
        placeholder="Search..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        onKeyDown={handleKeyDown}
      />
      <button onClick={runSearch}>
        <IoSearch />
      </button>
    </div>
  );
}

export default Search;
