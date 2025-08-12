import { FaMoneyCheckAlt } from "react-icons/fa";
import { MdNumbers } from "react-icons/md";
import { LuBadgeCheck } from "react-icons/lu";
import { toast } from "react-toastify";

import BasketCard from "../components/BasketCard.jsx";
import useCart from "../utils/useCart.js";
import EmptyCart from "./EmptyCart.jsx";
import styles from "./CheckoutPage.module.css";

function CheckoutPage() {
  const [state, dispatch] = useCart();
  const { total, itemsCounter, checkout, selectedItems } = state;

  const clickHandler = (type, payload) => {
    dispatch({ type, payload });
    if (type === "CHECKOUT") {
      toast.success("Checkout completed successfully!", {
        position: "top-center",
        autoClose: 3000,
        className: styles.myToast,
        bodyClassName: styles.myToastBody,
        progressClassName: styles.myProgress,
      });
    }
  };

  if (itemsCounter === 0) {
    return <EmptyCart />;
  }

  return (
    <div className={styles.container}>
      <div className={styles.details}>
        <div>
          <span>
            <FaMoneyCheckAlt />
          </span>
          <p>Total: {total}</p>
        </div>
        <div>
          <span>
            <MdNumbers />
          </span>
          <p>Quantity: {itemsCounter}</p>
        </div>
        <div>
          <span>
            <LuBadgeCheck />
          </span>
          <p>Status: {checkout ? "Done!" : "Pending..."}</p>
        </div>
        <button onClick={() => clickHandler("CHECKOUT", state)}>
          Checkout
        </button>
      </div>

      <div className={styles.products}>
        {selectedItems.map((product) => (
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
