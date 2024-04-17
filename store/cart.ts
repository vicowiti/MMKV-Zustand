import { create } from "zustand";
import { Product } from "./interfaces";

export interface CartState {
  products: Array<Product & { quantity: number }>;
  addProductToCart: (product: Product) => void;
  reduceProductFromCart: (productId: string) => void;
  clearCart: () => void;
  items: number;
}

const useCartStore = create<CartState>((set) => ({
  products: [],
  items: 0,
  addProductToCart: (product) =>
    set((state) => {
      state.items++;
      const hasProduct = state.products.some((item) => item.id === product.id);
      if (hasProduct) {
        return {
          ...state,
          products: state.products.map((item) =>
            item.id === product.id
              ? { ...item, quantity: item.quantity + 1 }
              : item
          ),
        };
      } else {
        return {
          ...state,
          products: [...state.products, { ...product, quantity: 1 }],
        };
      }
    }),
  reduceProductFromCart: (productId) => {},
  clearCart: () =>
    set((state) => {
      return {
        ...state,
        products: [],
        items: 0,
      };
    }),
}));
