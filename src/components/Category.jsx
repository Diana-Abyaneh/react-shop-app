import { GoListUnordered } from "react-icons/go";
import { useQuery } from "../utils/useQuery";
import { createQueryObject } from "../helper/helper";
import styles from "./Category.module.css";

function Category() {
  const [, setQuery] = useQuery();

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
        <li>all</li>
        <li>electronics</li>
        <li>jewelery</li>
        <li>women's clothing</li>
        <li>men's clothing</li>
      </ul>
    </div>
  );
}

export default Category;
