import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: '00',
}

export const expMonthSlice = createSlice({
  name: 'expMonth',
  initialState,
  reducers: {
    setExpMonth: (state, action) => {
      state.value = action.payload
    },
  },
})

export const { setExpMonth } = expMonthSlice.actions

export default expMonthSlice.reducer