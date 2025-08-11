import { useParams, Link } from "react-router-dom";
import { useProductDetails } from "../utils/useProducts";
import { IoMdPricetags } from "react-icons/io";
import { FaStar } from "react-icons/fa";
import { MdCategory } from "react-icons/md";
import Loader from "../components/Loader";
import styles from "./DetailsPage.module.css";

function DetailsPage() {
  const { id } = useParams();
  const product = useProductDetails(Number(id));

  if (!product) {
    return <Loader />;
  }

  return (
    <div className={styles.container}>
      <img src={product.image} alt={`${product.title} image`} />

      <div className={styles.details}>
        <h3>{product.title}</h3>
        <p>{product.description}</p>

        <div className={styles.icons}>
          <span>
            <MdCategory />
            <p>
              {product.category.charAt(0).toUpperCase() +
                product.category.slice(1)}
            </p>
          </span>
          <span>
            <IoMdPricetags />
            <p>{product.price}$</p>
          </span>
          <span>
            <FaStar />
            <p>
              {product.rating.rate} ({product.rating.count} rates)
            </p>
          </span>
        </div>

        <div className={styles.shopLink}>
          <Link to="/products">Back to shop</Link>
        </div>
      </div>
    </div>
  );
}

export default DetailsPage;
