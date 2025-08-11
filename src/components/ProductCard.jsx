import styles from "./ProductCard.module.css";
import { FaCartPlus } from "react-icons/fa";
import { TbListDetails } from "react-icons/tb";
import { FaPlus } from "react-icons/fa6";
import { FaMinus } from "react-icons/fa6";
import { FaTrash } from "react-icons/fa";

import { Link } from "react-router-dom";
import useCart from "../utils/useCart";
import { productQuantity } from "../helper/helper";

function ProductCard({ data }) {
  const { id, title, image, price } = data;

  const [state, dispatch] = useCart();
  // console.log(state);
  const quantity = productQuantity(state, id);
  console.log(quantity);

  const clickHandler = (type) => {
    dispatch({ type, payload: data });
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
          {quantity == 1 && (
            <>
              <button onClick={() => clickHandler("REMOVE_ITEM")}>
                <FaTrash />
              </button>
              <span>{quantity}</span>
            </>
          )}

          {quantity > 1 && (
            <>
              <button onClick={() => clickHandler("DECREASE")}>
                <FaMinus />
              </button>
              <span>{quantity}</span>
            </>
          )}
          
          {quantity == 0 ? (
            <button onClick={() => clickHandler("ADD_ITEM")}>
              <FaCartPlus />
            </button>
          ) : (
            <button onClick={() => clickHandler("INCREASE")}>
              <FaPlus />
            </button>
          )}
        </div>
      </div>
    </li>
  );
}

export default ProductCard;
