import { createContext, useEffect, useReducer } from "react";
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
    case "REMOVE_ITEM": {
      const newSelectedItems = state.selectedItems.filter(
        (item) => item.id != action.payload.id
      );
      return {
        ...state,
        selectedItems: [...newSelectedItems],
        ...sumProducts(newSelectedItems),
      };
    }
    case "INCREASE": {
      const index = state.selectedItems.findIndex(
        (item) => item.id == action.payload.id
      );
      state.selectedItems[index].quantity++;
      return {
        ...state,
        ...sumProducts(state.selectedItems),
      };
    }
    case "DECREASE":
      {
        const index = state.selectedItems.findIndex(
          (item) => item.id == action.payload.id
        );
        state.selectedItems[index].quantity--;
      }
      return {
        ...state,
        ...sumProducts(state.selectedItems),
      };
    case "CHECKOUT":
      return {
        selectedItems: [],
        itemsCounter: 0,
        total: 0,
        checkout: true,
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
  const init = (initialState) => {
    const stored = localStorage.getItem("cartState");
    return stored ? JSON.parse(stored) : initialState;
  };

  const [state, dispatch] = useReducer(reducer, initialState, init);
  
  useEffect(() => {
    localStorage.setItem("cartState", JSON.stringify(state));
  }, [state]);

  return (
    <CartContext.Provider value={{ state, dispatch }}>
      {children}
    </CartContext.Provider>
  );
}

export default CartProvider;
export { CartContext };
