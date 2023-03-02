import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./slices/cartSlice";
import purchasedSlice from "./slices/purchasedSlice";

const store = configureStore({
  reducer:{
    cart: cartSlice,
    purchased: purchasedSlice
  },
})

export default store;