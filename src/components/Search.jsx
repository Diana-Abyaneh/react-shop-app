import { IoSearch } from "react-icons/io5";
import { useState } from "react";
import { useQuery } from "../utils/useQuery";
import styles from "./Search.module.css";

import createQueryObject from "../helper/helper.js";

function Search() {
  const [search, setSearch] = useState("");
  const [, setQuery] = useQuery();

  const searchHandler = () => {
    setQuery((query) =>
      createQueryObject(query, { search: search.toLowerCase().trim() })
    );
  };

  return (
    <div className={styles.searchContainer}>
      <input
        type="text"
        placeholder="Search..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <button onClick={searchHandler}>
        <IoSearch />
      </button>
    </div>
  );
}

export default Search;
