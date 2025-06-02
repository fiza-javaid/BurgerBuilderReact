//orderSlice.js
import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    recentOrder: null,
    myOrder: [],
}

export const orderSlice = createSlice({
  name: 'order',
  initialState,
  reducers: {
    
    setRecentOrder: (state, action) => {
      state.recentOrder = action.payload
    },

    setMyOrder: (state, action) => {
        state.myOrder = action.payload
      },
    clearAllOrders: (state) => {
        state.myOrder = [];
      },
    deleteAnOrder: (state, action) => {
      state.myOrder= action.payload;
    }
  },

  
  
})

export const {  setRecentOrder, setMyOrder, myOrder, recentOrder, clearAllOrders, deleteAnOrder } = orderSlice.actions

export default orderSlice.reducer