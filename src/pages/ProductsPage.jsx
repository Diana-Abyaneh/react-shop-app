import Cards from "../components/ProductCard.jsx";
import useProducts from "../utils/useProducts.js";
import styles from "./ProductPage.module.css";
import Loader from "../components/Loader.jsx";
import Search from "../components/Search.jsx";
import Category from "../components/Category.jsx";
import { useEffect, useState } from "react";

function ProductsPage() {
  const products = useProducts();
  const [displayed, setDisplayed] = useState([]);
  
  useEffect(() => {
    setDisplayed(products);
  }, [products]);

  return (
    <>
      <Search />
      <div className={styles.container}>
        <ul className={styles.list}>
          {!displayed.length && <Loader />}
          {displayed &&
            displayed.map((product) => (
              <Cards key={product.id} data={product} />
            ))}
        </ul>
        <Category />
      </div>
    </>
  );
}

export default ProductsPage;
