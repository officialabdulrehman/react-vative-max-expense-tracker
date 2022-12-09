import { configureStore } from "@reduxjs/toolkit";
import { expenseReducer } from "./slices/expense.slice";
import { themeReducer } from "./slices/theme.slice";

export const store = configureStore({
  reducer: {
    themeReducer,
    expenseReducer
  }
})

export type RootState = ReturnType<typeof store.getState>