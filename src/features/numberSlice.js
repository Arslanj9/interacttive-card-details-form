import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: '0000 0000 0000 0000',
}

export const numberSlice = createSlice({
  name: 'cardHolderNumber',
  initialState,
  reducers: {
    setcardHolderNumber: (state, action) => {
      state.value = action.payload
    },
  },
})

export const { setcardHolderNumber } = numberSlice.actions

export default numberSlice.reducer