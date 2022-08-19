import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loggedStatus: false,
  username: "",
  email: "",
  admin: false,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    logout: (state) => {
      state.loggedStatus = false;
    },
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

export const { logout, setUserData, login } = userSlice.actions;

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state: RootState) => state.counter.value)`
export const selectUserStatus = (state) => state.user.loggedStatus;

export const selectUserData = (state) => {
  const obj = {
    username: state.user.username,
    email: state.user.email,
    admin: state.user.admin,
  };
  return obj
};

export default userSlice.reducer;
