import { createSlice } from "@reduxjs/toolkit";
import { json } from "react-router-dom";

const initialState = () => {
  return (
    JSON.parse(localStorage.getItem("audiophlie-product")) || {
      allProduct: [],
      price: 0,
      total: 0,
    }
  );
};

export const basketSlice = createSlice({
  name: "basket",
  initialState: initialState(),
  reducers: {
    addToDate: (state, { payload }) => {
      const item = state.allProduct
    },
    removeData:(state, {payload})=>{},
    deleteData:(state, {payload})=>{},
    total:(state,{payload})=>{},
  },
});

export const { addToDate } = basketSlice.actions;
export default basketSlice.reducer;
