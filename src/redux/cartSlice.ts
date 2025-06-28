import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ProductType } from "types/product";

interface CartItem extends ProductType {
  quantity: number;
}
interface CartState {
  products: CartItem[];
  isOpen: boolean;
}

const persisted = localStorage.getItem("cart");
const initialState: CartState = persisted
  ? JSON.parse(persisted)
  : { products: [], isOpen: false };

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<{product:ProductType,quantityToAdd:number}>) => {
      debugger
      const existing = state.products.find(p => p.id === action.payload.product.id);
      const quantityToAdd = action.payload.quantityToAdd || 1;
      const finalQuantity = Math.min(quantityToAdd, action.payload.product.stock - (existing ? existing.quantity : 0));
      existing ? (existing.quantity += finalQuantity ) : state.products.push({ ...action.payload.product, quantity: finalQuantity });
    },
    removeFromCart: (state, action: PayloadAction<string>) => {
      state.products = state.products.filter(p => p.id !== action.payload);
    },
    updateQuantity: (state, action: PayloadAction<{ id: string; quantity: number }>) => {
      const product = state.products.find(p => p.id === action.payload.id);
      if (product) product.quantity = Math.max(1, action.payload.quantity);
    },
    toggleCart: state => {
      state.isOpen = !state.isOpen;
    },
    clearCart: state => {
      state.products = [];
    },
  },
});

export const { addToCart, removeFromCart, updateQuantity, toggleCart, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
