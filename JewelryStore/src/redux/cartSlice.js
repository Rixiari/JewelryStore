// Reference 27B transactionSlice.js
//reducers:{add, delete, edit}
// remember to update handleAddToCart in productCard

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  balance: 0,
  history: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    deleteProduct: (state, action) => {
      const { productId } = action.payload;
      const updatedHistory = state.history.filter(transaction => transaction.productId !== productId);
      const deletedProduct = state.history.find(transaction => transaction.productId === productId);

      return {
        ...state,
        history: updatedHistory,
        balance: state.balance - deletedProduct.amount,
      };
    },
    addProduct: (state, action) => {
      const { productId, amount } = action.payload;
      const updatedBalance = state.balance + amount;

      return {
        ...state,
        history: [
          ...state.history,
          { type: "add", productId, amount },
        ],
        balance: updatedBalance,
      };
    },
    editProduct: (state, action) => {
      const { productId, newAmount } = action.payload;
      const updatedHistory = state.history.map(transaction =>
        transaction.productId === productId
          ? { ...transaction, amount: newAmount }
          : transaction
      );
      const productTransaction = state.history.find(transaction => transaction.productId === productId);
      const updatedBalance = state.balance - productTransaction.amount + newAmount;

      return {
        ...state,
        history: updatedHistory,
        balance: updatedBalance,
      };
    },
  },
});

export const { addProduct, deleteProduct, editProduct } = cartSlice.actions;

export const selectBalance = state => state.cart.balance;
export const selectHistory = state => state.cart.history;

export default cartSlice.reducer;