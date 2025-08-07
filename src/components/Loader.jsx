import { ScaleLoader } from "react-spinners";
import styles from "./Loader.module.css";

function Loader() {
  return (
    <div className={styles.loader}>
      <ScaleLoader
        height={50}
        width={10}
        color="#fe5d42"
        radius={2}
        margin={2}
      />
    </div>
  );
}

export default Loader;
