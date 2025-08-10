import { GoListUnordered } from "react-icons/go";
import { useQuery } from "../utils/useQuery";
import { createQueryObject } from "../helper/helper";
import styles from "./Category.module.css";

function Category() {
  const [query, setQuery] = useQuery();

  const categoryHandler = (event) => {
    if (event.target.tagName !== "LI") return;
    const category = event.target.innerText.toLowerCase();
    setQuery((prev) => createQueryObject(prev, { category }));
  };

  return (
    <div className={styles.categories}>
      <div className={styles.head}>
        <GoListUnordered />
        <h3>Categories</h3>
      </div>
      <ul onClick={categoryHandler}>
        {[
          "All",
          "Electronics",
          "Jewelery",
          "Women's clothing",
          "Men's clothing",
        ].map((cat) => {
          const activeCategory = query.category || "all";
          const isActive = activeCategory.toLowerCase() === cat.toLowerCase();

          return (
            <>
              <li
                key={cat}
                className={`${styles.listItem} ${
                  isActive ? styles.active : styles.inactive
                }`}
              >
                {cat}
              </li>
            </>
          );
        })}
      </ul>
    </div>
  );
}

export default Category;
