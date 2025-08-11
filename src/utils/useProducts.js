import { useContext } from "react";
import { ProductContext } from "../context/ProductContext";

const useProducts = () => {
  return useContext(ProductContext).products;
};

const useProductDetails = (id) => {
  const products = useProducts();
  const result = products.find((product) => product.id == id);
  return result;
};

export { useProducts, useProductDetails };
