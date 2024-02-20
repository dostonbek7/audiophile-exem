import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: null,
  isAuthChange: false,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    login: (state, { payload }) => {},
    logOut: (state, { payload }) => {},
    isAuthChange: (state) => {},
  },
});

export const { login, logOut, isAuthChange } = userSlice.actions;
export default userSlice.reducer;
