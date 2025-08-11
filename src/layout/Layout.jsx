import { Link } from "react-router-dom";
import { FaCartShopping } from "react-icons/fa6";
import { FaHeart } from "react-icons/fa";
import styles from "./Layout.module.css";
import useCart from "../utils/useCart";
function Layout({ children }) {
  const [state] = useCart();
  return (
    <>
      <header className={styles.header}>
        <Link to={"/products"}>Shop App</Link>
        <Link to={"/checkout"}>
          <div>
            <FaCartShopping />
            {!!state.itemsCounter && <span>{state.itemsCounter}</span>}
          </div>
        </Link>
      </header>
      {children}
      <footer className={styles.footer}>
        <h3>
          Made with{" "}
          <span>
            <FaHeart />
          </span>{" "}
          by Diana Abyaneh
        </h3>
      </footer>
    </>
  );
}

export default Layout;
