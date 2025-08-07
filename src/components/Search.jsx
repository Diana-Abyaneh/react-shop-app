import { IoSearch } from "react-icons/io5";
import { useState } from "react";

function Search() {
  const [search, setSearch] = useState("");
  const searchHandler = () => {
    console.log(search);
  };

  return (
    <div>
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
