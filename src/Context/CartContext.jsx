import { createContext, useReducer } from "react";
import { sumProducts } from "../helper/helper";

const CartContext = createContext();

const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_ITEM":
      if (!state.selectedItems.find((item) => item.id == action.payload.id))
        state.selectedItems.push({ ...action.payload, quantity: 1 });
      return {
        ...state,
        ...sumProducts(state.selectedItems),
        checkout: false,
      };
    default:
      throw new Error("Invalid action!");
  }
};

const initialState = {
  selectedItems: [],
  itemsCounter: 0,
  total: 0,
  checkout: false,
};

function CartProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <CartContext.Provider value={{ state, dispatch }}>
      {children}
    </CartContext.Provider>
  );
}

export default CartProvider;
export { CartContext };
