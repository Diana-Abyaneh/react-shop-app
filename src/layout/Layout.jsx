import { Link } from "react-router-dom";
import { FaCartShopping } from "react-icons/fa6";
import { FaHeart } from "react-icons/fa";
import styles from "./Layout.module.css"
function Layout({ children }) {
  return (
    <>
      <header className={styles.header}>
        <Link to={"/products"}>Shop App</Link>
        <Link to={"/checkout"}>
          <FaCartShopping />
        </Link>
      </header>
      {children}
      <footer className={styles.footer}>
        <h3>Made with <span><FaHeart/></span> by Diana Abyaneh</h3>
      </footer>
    </>
  );
}

export default Layout;
