import { secData } from '@/utils/dynamicpage'
import { configureStore } from '@reduxjs/toolkit'
import  ProductSlice  from './product'
import { secData2 } from '@/utils/secData'
import { types } from 'util'
import  cartSlice  from './features/cart'

export const store = configureStore({
  reducer: {
    secData2: ProductSlice,
    secData: cartSlice
  },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch