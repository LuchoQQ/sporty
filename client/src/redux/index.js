import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./reducers/userSlice";
import productReducer from "./reducers/productsSlice"
const store = configureStore({
  reducer: {
    user: userReducer,
    products: productReducer,
  },
});

export default store;
