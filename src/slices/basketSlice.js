import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
};

const basketSlice = createSlice({
  name: "basket",
  initialState,
  reducers: {
    addToBasket: (state, action) => {
      state.items = [...state.items, action.payload];
    },
    removeFromBasket: (state, action) => {
      const newItems = state.items.filter((item) => item.id !== action.payload);
      if (newItems.length === 0) {
        state.items = [];
      } else {
        state.items = newItems;
      }
    },
    changeQuantity: (state, action) => {
      if (action.payload.type === "increase") {
        state.items = state.items.map((item) => {
          if (item.id === action.payload.id) {
            return {
              ...item,
              quantity: item.quantity + 1,
            };
          }
          return item;
        });
      }
      if (action.payload.type === "decrease") {
        state.items = state.items.map((item) => {
          if (item.id === action.payload.id) {
            if (item.quantity === 1) {
              return {
                ...item,
              };
            } else {
              return {
                ...item,
                quantity: item.quantity - 1,
              };
            }
          }
          return item;
        });
      }
    },
  },
});

const { reducer, actions } = basketSlice;
export const { addToBasket, removeFromBasket, changeQuantity } = actions;
export default reducer;
