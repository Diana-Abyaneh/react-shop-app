import { Link } from "react-router-dom";
import styles from "./404.module.css";

function PageNotFound() {
  return (
    <div className={styles.container}>
      <img src="/images/404.PNG" alt="404" />
      <button><Link to="/products">Go to main page!</Link></button>
    </div>
  );
}

export default PageNotFound;
