import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: {
    name: '',
    email: '',
    password: ''
  }
}

export const counterSlice = createSlice({
  name: 'input',
  initialState,
  reducers: {
    inputValue: (state, action) => {
      state.value = action.payload; 
    }
  },
})

export const { inputValue } = counterSlice.actions

export default counterSlice.reducer
