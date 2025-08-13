import { useParams, Link } from "react-router-dom";
import { IoMdPricetags } from "react-icons/io";
import { FaStar } from "react-icons/fa";
import { MdCategory } from "react-icons/md";
import Loader from "../components/Loader";
import styles from "./DetailsPage.module.css";
import { useContext } from "react";
import { ProductContext } from "../context/ProductContext";
import PageNotFound from "./404";

function DetailsPage() {
  const { id } = useParams();
  const { products } = useContext(ProductContext);

  if (!products || products.length === 0) {
    return <Loader />;
  }

  const product = products.find((p) => String(p.id) === id);

  if (!product) {
    return <PageNotFound />;
  }

  return (
    <div className={styles.container}>
      <img src={product.image} alt={`${product.title} image`} />

      <div className={styles.details}>
        <h3>{product.title}</h3>
        <p>{product.description}</p>

        <div className={styles.icons}>
          <div>
            <span>
              <MdCategory />
            </span>
            <p>
              {product.category.charAt(0).toUpperCase() +
                product.category.slice(1)}
            </p>
          </div>
          <div>
            <span>
              <IoMdPricetags />
            </span>
            <p>{product.price}$</p>
          </div>
          <div>
            <span>
              <FaStar />
            </span>
            <p>
              {product.rating.rate} ({product.rating.count} rates)
            </p>
          </div>
        </div>

        <div className={styles.shopLink}>
          <Link to="/products">Back to shop</Link>
        </div>
      </div>
    </div>
  );
}

export default DetailsPage;
