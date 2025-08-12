import BasketCard from "../components/BasketCard.jsx";
import useCart from "../utils/useCart.js";

function CheckoutPage() {
  const [state, dispatch] = useCart();

  const clickHandler = (type, payload) => {
    dispatch({ type, payload });
  };

  return (
    <div>
      <div>
        <span>
          <p>Total: {state.total}</p>
        </span>
        <span>
          <p>Quantity: {state.itemsCounter}</p>
        </span>
        <span>
          <p>Status: {state.checkout ? "Done!" : "Pending..."}</p>
        </span>
        <button>Checkout</button>
      </div>
      <div>
        {state.selectedItems.map((product) => (
          <BasketCard key={product.id} data={product} clickHandler={clickHandler}/>
        ))}
      </div>
    </div>
  );
}

export default CheckoutPage;
