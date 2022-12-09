import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { AddExpense, Expense, RemoveExpense, UpdateExpense } from "./Expense.model"

type State = {
  expenses: Expense[]
}

const initialState: State = {
  expenses: []
}

export const expenseSlice = createSlice({
  name: "expense",
  initialState,
  reducers: {
    addExpense: (state, { payload: { amount, date, description } }: PayloadAction<AddExpense>) => {
      const expense: Expense = {
        id: new Date().toISOString() + Math.random().toString(),
        amount,
        date,
        description
      }
      state.expenses.push(expense)
    },
    removeExpense: (state, { payload: { id } }: PayloadAction<RemoveExpense>) => {
      state.expenses = state.expenses.filter((expense: Expense) => expense.id !== id)
    },
    updateExpense: (state, { payload: { id, amount, date, description } }: PayloadAction<UpdateExpense>) => {
      const index = state.expenses.findIndex((expense: Expense) => expense.id === id)
      state.expenses[index] = {
        ...state.expenses[index],
        amount, date, description
      }
    },
  }
})

export const expenseReducer = expenseSlice.reducer
export const { addExpense, removeExpense, updateExpense } = expenseSlice.actions