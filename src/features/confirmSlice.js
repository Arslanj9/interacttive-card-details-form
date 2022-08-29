import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: false,
}

export const confirmSlice = createSlice({
  name: 'confirm',
  initialState,
  reducers: {
    setShowThankyou: (state, action) => {
      state.value = action.payload
    },
  },
})

export const { setShowThankyou } = confirmSlice.actions

export default confirmSlice.reducer