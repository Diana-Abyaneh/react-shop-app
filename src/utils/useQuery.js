import { useContext } from "react";
import { ProductContext } from "../context/ProductContext";

export const useQuery = () => {
  const { query, setQuery } = useContext(ProductContext);
  return [query, setQuery];
};