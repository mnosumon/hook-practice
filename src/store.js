import { configureStore } from '@reduxjs/toolkit'
import inputSlice from './slice/inputReciever'

export const store = configureStore({
  reducer: {
    inputt: inputSlice,
  },
})