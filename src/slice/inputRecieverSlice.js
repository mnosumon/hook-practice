import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  inputContent: {
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
     
      state.inputContent = action.payload; 
    }
  },
})

export const { inputValue } = counterSlice.actions

export default counterSlice.reducer
