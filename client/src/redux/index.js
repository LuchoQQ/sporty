import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./reducers/userSlice";
import productReducer from "./reducers/productsSlice"
import cartReducer from "./reducers/cartSlice";
const store = configureStore({
  reducer: {
    user: userReducer,
    products: productReducer,
    cart: cartReducer
  },
});

export default store;
