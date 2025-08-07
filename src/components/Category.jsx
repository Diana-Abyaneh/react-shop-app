import { GoListUnordered } from "react-icons/go";
import styles from "./Category.module.css";
function Category() {
  const categoryHandler = (event) => {
    const { tagName } = event.target;
    const category = event.target.innerText.toLowerCase();
    if (tagName !== "LI") return;
  };
  return (
    <div className={styles.categories}>
      <div>
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
