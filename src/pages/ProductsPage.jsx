import { useEffect, useContext } from "react";
import { useSearchParams } from "react-router-dom";
import Cards from "../components/ProductCard.jsx";
import Loader from "../components/Loader.jsx";
import Search from "../components/Search.jsx";
import Category from "../components/Category.jsx";
import styles from "./ProductPage.module.css";

import { ProductContext } from "../context/ProductContext";
import { useProducts } from "../utils/useProducts";
import { useQuery } from "../utils/useQuery";

function ProductsPage() {
  const products = useProducts();
  const { displayed, setDisplayed } = useContext(ProductContext);
  const [query] = useQuery();
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    let filtered = [...products];
    setSearchParams(query);
    if (query.category && query.category !== "all") {
      filtered = filtered.filter(
        (product) => product.category.toLowerCase() === query.category
      );
    }

    if (query.search) {
      filtered = filtered.filter((product) =>
        product.title.toLowerCase().includes(query.search)
      );
    }

    setDisplayed(filtered);
  }, [products, query, setDisplayed]);

  return (
    <>
      <Search />
      <div className={styles.container}>
        <ul className={styles.list}>
          {!displayed.length && <Loader />}
          {displayed.map((product) => (
            <Cards key={product.id} data={product} />
          ))}
        </ul>
        <Category />
      </div>
    </>
  );
}

export default ProductsPage;
