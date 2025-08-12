import { FaPlus } from "react-icons/fa6";
import { FaMinus } from "react-icons/fa6";
import { FaTrash } from "react-icons/fa";

function BasketCard({ data, clickHandler }) {
  const { image, title, quantity } = data;

  return (
    <div>
      <img src={image} alt={`${title} image`} />
      <h4>{title}</h4>
      <div>
        {quantity == 1 ? (
          <button onClick={() => clickHandler("REMOVE_ITEM", data)}>
            <FaTrash />
          </button>
        ) : (
          <button onClick={() => clickHandler("DECREASE", data)}>
            <FaMinus />
          </button>
        )}
        <span>{quantity}</span>
        <button onClick={() => clickHandler("INCREASE", data)}>
          <FaPlus />
        </button>
      </div>
    </div>
  );
}

export default BasketCard;
