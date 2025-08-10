import styles from "./ProductCard.module.css";
import { FaCartPlus } from "react-icons/fa";
import { TbListDetails } from "react-icons/tb";
import { Link } from "react-router-dom";
import useCart from "../utils/useCart";

function ProductCard({ data }) {
  const { id, title, image, price } = data;

  const [state, dispatch] = useCart();
  console.log(state);
  
  const clickHandler = () => {
    dispatch({ type: "ADD_ITEM", payload: data });
  };

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
          <button onClick={clickHandler}>
            <FaCartPlus />
          </button>
        </div>
      </div>
    </li>
  );
}

export default ProductCard;
