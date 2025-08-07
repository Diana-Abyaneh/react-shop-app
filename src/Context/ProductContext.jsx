import { createContext, useEffect, useState } from "react";
import api from "../services/config";

const ProductContext = createContext();

function ProductProvider({ children }) {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await api.get("/products");
        setProducts(response);
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchProducts();
  }, []);
  return (
    <ProductContext.Provider value={products}>
      {children}
    </ProductContext.Provider>
  );
}

export default ProductProvider;
export { ProductContext };
