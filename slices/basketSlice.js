import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
};

const basketSlice = createSlice({
  name: "basket",
  initialState,
  reducers: {
    addToBasket(state, action) {
      state.items = [...state.items, action.payload];
    },
    removeFromBasket(state, action) {
      state.items = state.items.filter((item) => item.id !== action.payload);
    },
  },
});

export const selectItems = (state) => state.basket.items;
export const selectTotal = (state) =>
  state.basket.items.reduce((total, item) => total + item.price, 0);

export const { addToBasket, removeFromBasket } = basketSlice.actions;
export default basketSlice.reducer;
