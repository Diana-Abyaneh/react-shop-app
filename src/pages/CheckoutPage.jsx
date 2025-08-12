import BasketCard from "../components/BasketCard.jsx";
import useCart from "../utils/useCart.js";
import styles from "./CheckoutPage.module.css";
import { FaMoneyCheckAlt } from "react-icons/fa";
import { MdNumbers } from "react-icons/md";
import { LuBadgeCheck } from "react-icons/lu";

function CheckoutPage() {
  const [state, dispatch] = useCart();

  const clickHandler = (type, payload) => {
    dispatch({ type, payload });
  };

  return (
    <div className={styles.container}>
      <div className={styles.details}>
        <span>
          <FaMoneyCheckAlt />
          <p>Total: {state.total}</p>
        </span>
        <span>
          <MdNumbers />
          <p>Quantity: {state.itemsCounter}</p>
        </span>
        <span>
          <LuBadgeCheck />
          <p>Status: {state.checkout ? "Done!" : "Pending..."}</p>
        </span>
        <button>Checkout</button>
      </div>
      <div className={styles.products}>
        {state.selectedItems.map((product) => (
          <BasketCard
            key={product.id}
            data={product}
            clickHandler={clickHandler}
          />
        ))}
      </div>
    </div>
  );
}

export default CheckoutPage;
