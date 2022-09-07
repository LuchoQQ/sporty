import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [],
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      console.log(action);
      state.products.push(action.payload);
    },
    deleteFromCart: (state, action) => {},
    login: (state) => {
      state.loggedStatus = true;
    },
    setUserData: (state, action) => {
      state.username += action.payload.username;
      state.email += action.payload.email;
      state.admin += action.payload.admin;
    },
  },
});

export const { addToCart, setUserData, login } = cartSlice.actions;

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state: RootState) => state.counter.value)`
export const selectCartProducts = (state) => state.cart.products;

export default cartSlice.reducer;
