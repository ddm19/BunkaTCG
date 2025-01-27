import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ProductType } from "types/product";

interface CartItem extends ProductType
{
    quantity: number;
}

interface CartState
{
    products: CartItem[];
    isOpen: boolean;
}

const initialState: CartState = {
    products: [],
    isOpen: false,
};

export const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addToCart: (state, action: PayloadAction<ProductType>) =>
        {
            const existingProduct = state.products.find((p) => p.id === action.payload.id);
            if (existingProduct)
            {
                existingProduct.quantity += 1;
            } else
            {
                state.products.push({ ...action.payload, quantity: 1 });
            }

        },
        removeFromCart: (state, action: PayloadAction<number>) =>
        {
            state.products = state.products.filter((product) => product.id !== action.payload);
        },
        updateQuantity: (state, action: PayloadAction<{ id: number; quantity: number; }>) =>
        {
            const product = state.products.find((p) => p.id === action.payload.id);
            if (product)
            {
                product.quantity = Math.max(1, action.payload.quantity);
            }
        },
        toggleCart: (state) =>
        {
            state.isOpen = !state.isOpen;
        },
        clearCart: (state) =>
        {
            state.products = [];
        },
    },
});

export const { addToCart, removeFromCart, updateQuantity, toggleCart, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
