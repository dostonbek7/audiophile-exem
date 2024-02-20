import { configureStore } from "@reduxjs/toolkit";
import basketSlice from "../features/basketSlice";
import userSlice from "../features/userSlice";

export const store = configureStore({
  reducer:{
    product:basketSlice,
    user: userSlice,
  }
})