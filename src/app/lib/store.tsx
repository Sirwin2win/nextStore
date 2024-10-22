// store/store.js
import { configureStore } from "@reduxjs/toolkit";
import storeReducer from "./features/storeSlice";

export function makeStore() {
  return configureStore({
    reducer: {
      stores: storeReducer,
    },
    devTools: process.env.NODE_ENV !== "production",
  });
}

export const store = makeStore();
