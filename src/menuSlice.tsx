import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [
    { id: 1, name: 'Пицца', price: 10 },
    { id: 2, name: 'Бургер', price: 8 },
    { id: 3, name: 'Салат', price: 6 },
  ],
};

export const menuSlice = createSlice({
  name: 'menu',
  initialState,
  reducers: {
    addItem: (state, action) => {
      state.items.push(action.payload);
    },
    removeItem: (state, action) => {
      state.items = state.items.filter(item => item.id !== action.payload);
    },
  },
});

export const { addItem, removeItem } = menuSlice.actions;

export default menuSlice.reducer;