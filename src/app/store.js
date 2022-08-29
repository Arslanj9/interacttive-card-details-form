import { configureStore } from '@reduxjs/toolkit'
import confirmReducer from '../features/confirmSlice'
import nameReducer from '../features/nameSlice'
import numberReducer from '../features/numberSlice'
import expMonthReducer from '../features/expMonthSlice'
import expYearReducer from '../features/expYearSlice'
import cvcNumReducer from '../features/cvcSlice'

export const store = configureStore({
  reducer: {
    confirm: confirmReducer,
    cardHolderName: nameReducer, 
    cardHolderNumber: numberReducer,
    expMonth: expMonthReducer,
    expYear: expYearReducer,
    cvcNum: cvcNumReducer,
  },
})