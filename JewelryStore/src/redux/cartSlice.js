// Reference 27B transactionSlice.js
//reducers:{add, delete, edit}
// remember to update handleAddToCart in productCard

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  total: 0,
  cart: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    deleteProduct: (state, action) => {
      const { productId } = action.payload;
      const updatedcart = state.cart.filter(transaction => transaction.productId !== productId);
      const deletedProduct = state.cart.find(transaction => transaction.productId === productId);

      return {
        ...state,
        cart  : updatedcart ,
        total: state.total - deletedProduct.amount,
      };
    },
    addProduct: (state, action) => {
        console.log("cartSlice",action);
      const product = action.payload;
      let currentQty = 0
        const newCart = state.cart.filter((item)=>{
            if(item.id !== product.id){
                return item
            } else {
                currentQty = item.quantity
            }
        })
        newCart.push({...product, quantity:currentQty+1});
        let productPrice = product.price * (currentQty+1)
      return {
        ...state,
        cart  : [
          ...newCart,
        ],
        total:state.total+productPrice
      };
    },
    editProduct: (state, action) => {
      const { productId, newAmount } = action.payload;
      const updatedcart = state.cart  .map(transaction =>
        transaction.productId === productId
          ? { ...transaction, amount: newAmount }
          : transaction
      );
      const productTransaction = state.cart.find(transaction => transaction.productId === productId);
      const updatedtotal = state.total - productTransaction.amount + newAmount;

      return {
        ...state,
        cart  : updatedcart ,
        total: updatedtotal,
      };
    },
  },
});

export const { addProduct, deleteProduct, editProduct } = cartSlice.actions;

export const selectTotal = state => state.cartSlice.total;
export const selectCart = state => state.cartSlice.cart;

export default cartSlice.reducer;