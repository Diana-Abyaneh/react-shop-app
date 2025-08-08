import { IoSearch } from "react-icons/io5";
import { useState } from "react";
import { useQuery } from "../utils/useQuery";
import styles from "./Search.module.css"

function Search() {

  const [search, setSearch] = useState("");
  const [query, setQuery] = useQuery();

  const searchHandler = () => {
    setQuery(query => ({...query, search}))  
  };

  return (
    <div className={styles.searchContainer}>
      <input
        type="text"
        placeholder="Search..."
        value={search}
        onChange={(e) => setSearch(e.target.value.toLowerCase().trim())}
      />
      <button onClick={searchHandler}>
        <IoSearch />
      </button>
    </div>
  );
}

export default Search;
