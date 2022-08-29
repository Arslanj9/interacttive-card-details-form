import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: '000',
}

export const cvcSlice = createSlice({
  name: 'cvcNum',
  initialState,
  reducers: {
    setCvcNum: (state, action) => {
      state.value = action.payload
    },
  },
})

export const { setCvcNum } = cvcSlice.actions

export default cvcSlice.reducer