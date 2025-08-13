import { useEffect, useContext } from "react";
import { useSearchParams } from "react-router-dom";
import Cards from "../components/ProductCard.jsx";
import Loader from "../components/Loader.jsx";
import Search from "../components/Search.jsx";
import Category from "../components/Category.jsx";
import styles from "./ProductPage.module.css";

import { ProductContext } from "../context/ProductContext.jsx";
import { useProducts } from "../utils/useProducts";
import { useQuery } from "../utils/useQuery";
import { getInitialQuery } from "../helper/helper.js";

function ProductsPage() {
  const products = useProducts();
  const { displayed, setDisplayed } = useContext(ProductContext);
  const [query, setQuery] = useQuery();
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    const initialQuery = getInitialQuery(searchParams);
    setQuery(initialQuery);
  }, []); 

  useEffect(() => {
    let filtered = [...products];

    if (query.category) {
      filtered = filtered.filter(
        (p) => p.category.toLowerCase() === query.category.toLowerCase()
      );
    }

    if (query.search) {
      filtered = filtered.filter((p) =>
        p.title.toLowerCase().includes(query.search.toLowerCase())
      );
    }

    setDisplayed(filtered);

    const cleanQuery = { ...query };
    if (cleanQuery.category === "all") {
      delete cleanQuery.category;
    }
    if (!cleanQuery.search) {
      delete cleanQuery.search;
    }

    const currentParams = Object.fromEntries(searchParams.entries());
    const nextParams = Object.entries(cleanQuery);

    if (JSON.stringify(currentParams) !== JSON.stringify(Object.fromEntries(nextParams))) {
      setSearchParams(cleanQuery);
    }

  }, [products, query, setDisplayed, searchParams, setSearchParams]);

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
