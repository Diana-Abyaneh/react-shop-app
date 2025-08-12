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
        <div>
          <span>
            <FaMoneyCheckAlt />
          </span>
          <p>Total: {state.total}</p>
        </div>
        <div>
          <span>
            <MdNumbers />
          </span>
          <p>Quantity: {state.itemsCounter}</p>
        </div>
        <div>
          <span>
            <LuBadgeCheck />
          </span>
          <p>Status: {state.checkout ? "Done!" : "Pending..."}</p>
        </div>
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
