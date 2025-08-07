import Cards from "../components/ProductCard.jsx";
import useProducts from "../utils/useProducts.js";
import styles from "./ProductPage.module.css"

function ProductsPage() {
  const products = useProducts();
  return (
    <div>
      <ul className={styles.list}>
        {products && products.map((product) => (
          <Cards key={product.id} data={product}/>
        ))}
      </ul>
    </div>
  );
}

export default ProductsPage;
