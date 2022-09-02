import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [],
  filters: {
    price: {min: 0, max: 9999999999},
    category: {
      zapatilla: false,
      botin: false,
      remera: false,
    },
    company: false,
  },
};

export const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    setProducts: (state, action) => {
      state.products = action.payload
    },
    setPrice: (state, action) => {
      state.filters.price = action.payload;
    },
    setCategory: (state, action) => {
      state.filters.category = action.payload;
    },
    setCompany: (state, action) => {
      state.filters.company = action.payload;
    },
  },
});

export const { setProducts, setPrice, setCategory, setCompany } =
  productSlice.actions;

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state: RootState) => state.counter.value)`
export const selectProducts = (state) => state.products.products;

export const selectFilters = (state) => {
  const filters = {
    price: state.products.filters.price,
    categories: state.products.filters.category,
    company: state.products.filters.company,
  };
  return filters;
};

export default productSlice.reducer;
