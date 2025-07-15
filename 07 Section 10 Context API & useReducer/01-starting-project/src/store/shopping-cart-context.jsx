// using React context
import { createContext, useState } from "react";
import { DUMMY_PRODUCTS } from "../dummy-products";
import { useReducer } from "react";

export const CartContext = createContext({
  // create the default value here to provide auto-complete to the VSCode
  items: [],
  addItemToCart: () => {},
  updateItemQuantity: () => {},
});

// this function will be called by React
// and execute the function received in action parameter
// state is a snapshot of the previous state
function cartReducer(state, action) {
  if (action.type === "ADD_ITEM") {
    const updatedItems = [...state.items];

    const existingCartItemIndex = updatedItems.findIndex(
      (cartItem) => cartItem.id === action.payload
    );
    const existingCartItem = updatedItems[existingCartItemIndex];

    if (existingCartItem) {
      const updatedItem = {
        ...existingCartItem,
        quantity: existingCartItem.quantity + 1,
      };
      updatedItems[existingCartItemIndex] = updatedItem;
    } else {
      const product = DUMMY_PRODUCTS.find(
        (product) => product.id === action.payload
      );
      updatedItems.push({
        id: action.payload,
        name: product.title,
        price: product.price,
        quantity: 1,
      });
    }

    return {
      ...state, // in case of more complex states, should spread to avoid losing data
      items: updatedItems,
    };
  }

  if (action.type === "UPDATE_ITEM") {
    const updatedItems = [...state.items];
    const updatedItemIndex = updatedItems.findIndex(
      (item) => item.id === action.payload.productId
    );

    const updatedItem = {
      ...updatedItems[updatedItemIndex],
    };

    updatedItem.quantity += action.payload.amount;

    if (updatedItem.quantity <= 0) {
      updatedItems.splice(updatedItemIndex, 1);
    } else {
      updatedItems[updatedItemIndex] = updatedItem;
    }

    return {
      ...state, // in case of more complex states, should spread to avoid losing data
      items: updatedItems,
    };
  }

  return state;
}

// create and export a component which contains the logic and state management of the application
export default function CartContextProvider({ children }) {
  // reducer is used to convert complex data to a simpler one, like 'reduce()' array method
  // cartDispatch is a function to manager the state and will be called by a reducer function defined
  // outside the component "cartReducer"
  const [shoppingCart, cartDispatch] = useReducer(cartReducer, {
    items: [],
  });

  // const [shoppingCart, setShoppingCart] = useState({
  //   items: [],
  // });

  function handleAddItemToCart(id) {
    cartDispatch({
      type: "ADD_ITEM",
      payload: id,
    });
  }

  function handleUpdateCartItemQuantity(productId, amount) {
    cartDispatch({
      type: "UPDATE_ITEM",
      payload: {
        productId,
        amount,
      },
    });
  }

  // ctxValue exposes all value I want to inner components
  const ctxValue = {
    items: shoppingCart.items,
    addItemToCart: handleAddItemToCart,
    updateItemQuantity: handleUpdateCartItemQuantity,
  };

  // component must returns a Context Provider with everything wrapped (children)
  return (
    // default value must be set only for components not wrapped by the provider access the context
    <CartContext.Provider value={ctxValue}>{children}</CartContext.Provider>
  );
}
