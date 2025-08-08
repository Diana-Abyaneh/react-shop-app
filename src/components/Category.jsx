import { GoListUnordered } from "react-icons/go";
import { useQuery } from "../utils/useQuery";
import styles from "./Category.module.css";

function Category() {

  const [, setQuery] = useQuery();

  const categoryHandler = (event) => {
    const { tagName } = event.target;
    const category = event.target.innerText.toLowerCase();
    if (tagName !== "LI") return;
    setQuery((query) => ({ ...query, category }));
  };

  return (
    <div className={styles.categories}>
      <div className={styles.head}>
        <GoListUnordered />
        <h3>Categories</h3>
      </div>
      <ul onClick={categoryHandler}>
        <li>All</li>
        <li>Electronics</li>
        <li>Jewelery</li>
        <li>Women's Clothing</li>
        <li>Men's Clothing</li>
      </ul>
    </div>
  );
}

export default Category;
