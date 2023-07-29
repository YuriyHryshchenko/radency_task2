import { configureStore } from '@reduxjs/toolkit'
import noteSlice from './noteSlice';
import uiSlice from './uiSlice';
export const store = configureStore({
  reducer: {
    noteSlice,
    uiSlice
  },
  devTools: process.env.NODE_ENV !== 'production'
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch