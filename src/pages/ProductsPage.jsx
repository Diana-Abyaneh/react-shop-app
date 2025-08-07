import useProducts from "../utils/useProducts.js";
import styles from "./ProductPage.module.css"

function ProductsPage() {
  const products = useProducts();
  return (
    <div>
      <ul>
        {products && products.map((product, id) => (
          <li key={id}>
            <img src={product.image} alt="product's image" />
            <h3>{product.title}</h3>
            <p>{product.price}$</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ProductsPage;
