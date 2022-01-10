import { configureStore } from '@reduxjs/toolkit'
import propertySlice from './slices/propertySlice'
import userSlices from './slices/userSlices' 
export const store = configureStore({
  reducer: {
        user : userSlices,
        properties : propertySlice
  },
})

