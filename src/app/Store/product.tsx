import { secData } from '@/utils/dynamicpage'
import { types } from '@/utils/secData'
import { createSlice } from '@reduxjs/toolkit'


// Define the initial state using that type
const initialState: types[] = secData
  


export const ProductSlice = createSlice({
  name: 'Product',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
   
  },
})

export const {  } = ProductSlice.actions



export default ProductSlice.reducer