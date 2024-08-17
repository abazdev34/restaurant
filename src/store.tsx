import { configureStore } from '@reduxjs/toolkit';
import menuReducer from "../src/menuSlice";

export const store = configureStore({
  reducer: {
    menu: menuReducer,
  },
});