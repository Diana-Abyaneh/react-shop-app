import styles from "./ProductCard.module.css";
import { FaCartPlus } from "react-icons/fa";
import { TbListDetails } from "react-icons/tb";
import { Link } from "react-router-dom";

function ProductCard({ data }) {
  const { id, title, image, price } = data;
  return (
    <li className={styles.card}>
      <img src={image} alt="product's image" />
      <h4>{title}</h4>
      <p>{price}$</p>
      <div className={styles.actions}>
        <Link to={`/products/${id}`}>
          <TbListDetails />
        </Link>
        <div>
          <button>
            <FaCartPlus />
          </button>
        </div>
      </div>
    </li>
  );
}

export default ProductCard;
