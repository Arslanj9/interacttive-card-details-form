import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: '00',
}

export const expYearSlice = createSlice({
  name: 'expYear',
  initialState,
  reducers: {
    setExpYear: (state, action) => {
      state.value = action.payload
    },
  },
})

export const { setExpYear } = expYearSlice.actions

export default expYearSlice.reducer