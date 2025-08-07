import styles from "./ProductCard.module.css"

function Cards({ data }) {
  return (
    <li className={styles.card}>
      <img src={data.image} alt="product's image" />
      <h4>{data.title}</h4>
      <p>{data.price}$</p>
    </li>
  );
}

export default Cards;
