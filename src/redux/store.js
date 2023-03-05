import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./slices/authSlice";
import cartSlice from "./slices/cartSlice";
import ProductSlice from "./slices/ProductSlice";
import purchasedSlice from "./slices/purchasedSlice";

const store = configureStore({
  reducer: {
    cart: cartSlice,
    purchased: purchasedSlice,
    auth: authSlice,
    product: ProductSlice,
  },
});

export default store;
