import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice";
import notificationReducer from "./notificationSlice";

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    notification: notificationReducer,
  },
  devTools: true,
});

store.subscribe(() => {
  const { cart } = store.getState();
  localStorage.setItem("cart", JSON.stringify(cart));
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
