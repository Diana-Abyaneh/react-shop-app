import { useContext } from "react";
import { ProductContext } from "../Context/ProductContext";

const useProducts = () => {
  const products = useContext(ProductContext);
  return products;
};

export default useProducts;
