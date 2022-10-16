import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./features/cart/cartSlice";
import modalReducer from "./features/modal/modalSlice";
import newsReducer from "./features/news/newsSlice";


export const store = configureStore({
  reducer: {
    cart: cartReducer,
    modal: modalReducer,
    news : newsReducer
  },
});
