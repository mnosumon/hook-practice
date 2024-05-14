import { configureStore } from '@reduxjs/toolkit'
import inputSlice from './slice/inputRecieverSlice'

export const store = configureStore({
  reducer: {
    inputt: inputSlice,
  },
})