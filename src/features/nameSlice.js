import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: '',
}

export const nameSlice = createSlice({
  name: 'cardHolderName',
  initialState,
  reducers: {
    setcardHolderName: (state, action) => {
      state.value = action.payload
    },
  },
})

export const { setcardHolderName } = nameSlice.actions

export default nameSlice.reducer