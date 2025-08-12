import { Link } from "react-router-dom";
import styles from "./EmptyCart.module.css";

function EmptyCart() {
  return (
    <div className={styles.container}>
      <img src="/images/emptyCart.png" alt="Cart is empty" />
      <h2>Your cart is empty!</h2>
      <button>
        <Link to="/products">Start shopping</Link>
      </button>
    </div>
  );
}

export default EmptyCart;
