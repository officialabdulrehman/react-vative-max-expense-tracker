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
    setExpenses: (state, { payload }: PayloadAction<Expense[]>) => {
      state.expenses = payload
    },
    addExpense: (state, { payload }: PayloadAction<AddExpense>) => {
      state.expenses.push(payload)
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
export const { setExpenses, addExpense, removeExpense, updateExpense, } = expenseSlice.actions