import { configureStore } from "@reduxjs/toolkit";
import { themeReducer } from "./slices/theme.slice";

export const store = configureStore({
  reducer: {
    themeReducer
  }
})

export type RootState = ReturnType<typeof store.getState>