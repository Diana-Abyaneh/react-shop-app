import useProducts from "../utils/useProducts.js";

function ProductsPage() {
  const products = useProducts();
  return (
    <div>
      <ul>
        {products && products.map((product, id) => (
          <li key={id}>{product.title}</li>
        ))}
      </ul>
    </div>
  );
}

export default ProductsPage;
