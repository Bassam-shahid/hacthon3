
import { secData2, types } from '@/utils/secData'
import { createSlice } from '@reduxjs/toolkit'


// Define the initial state using that type
const initialState: types []  = secData2
  


export const cartSlice = createSlice({
  name: 'cart',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
   
  },
})

export const {  } = cartSlice.actions



export default cartSlice.reducer