import Cards from "../components/ProductCard.jsx";
import useProducts from "../utils/useProducts.js";
import styles from "./ProductPage.module.css";
import Loader from "../components/Loader.jsx";

function ProductsPage() {
  const products = useProducts();
  return (
    <div>
      <ul className={styles.list}>
        {!products.length && <Loader />}
        {products &&
          products.map((product) => <Cards key={product.id} data={product} />)}
      </ul>
      <div>sideBar</div>
    </div>
  );
}

export default ProductsPage;
