import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: null,
  isAuthChange: false,
  error: null,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    logIn: (state, { payload }) => {
      state.user = payload;
    },
    logOut: (state, { payload }) => {
      state.user = payload;
    },
    isAuthChange: (state) => {
      state.isAuthChange = true;
    },
    errorData: (state, { payload }) => {
      state.error = payload;
    },
  },
});

export const { logIn, logOut, isAuthChange, errorData } = userSlice.actions;
export default userSlice.reducer;
